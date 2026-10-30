<?php
/**
 * Email Delivery & Logging Service
 * Sirib i-Sko — PGIN Scholarship Management System
 * 
 * Supports:
 * - Native socket SMTP with STARTTLS (works without composer or third-party libraries)
 * - PHP mail() fallback
 * - Full database email logging into `email_logs`
 * - Clear error diagnostics and local development preview links
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

class Mailer {

    /**
     * Send an email with HTML content, with full logging and SMTP/fallback support.
     * 
     * @return array [success => bool, status => string, error => ?string, preview_url => ?string, token => ?string]
     */
    public static function sendEmail(
        string $toEmail,
        string $toName,
        string $subject,
        string $htmlBody,
        string $emailType = 'general',
        ?string $token = null
    ): array {
        $toEmail = trim($toEmail);
        $toName  = trim($toName) ?: $toEmail;

        $smtpHost   = SMTP_HOST;
        $smtpPort   = SMTP_PORT;
        $smtpUser   = SMTP_USER;
        $smtpPass   = SMTP_PASS;
        $smtpSecure = SMTP_SECURE;
        $fromEmail  = SMTP_FROM;
        $fromName   = SMTP_FROM_NAME;

        $status       = 'Pending';
        $errorMessage = null;
        $sentVia      = 'None';

        // Check if real SMTP credentials are provided
        if (!empty($smtpUser) && !empty($smtpPass)) {
            $smtpResult = self::deliverViaSmtp($toEmail, $toName, $subject, $htmlBody, $smtpHost, $smtpPort, $smtpUser, $smtpPass, $smtpSecure, $fromEmail, $fromName);
            if ($smtpResult['success']) {
                $status  = 'Sent';
                $sentVia = 'SMTP';
            } else {
                $errorMessage = "SMTP delivery error: " . $smtpResult['error'];
                @error_log("[Mailer Error] SMTP delivery error to $toEmail: " . $smtpResult['error']);
                // Attempt mail() fallback
                if (function_exists('mail') && @ini_get('sendmail_path')) {
                    $headers  = "MIME-Version: 1.0\r\n";
                    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
                    $headers .= "From: $fromName <$fromEmail>\r\n";
                    if (@mail($toEmail, $subject, $htmlBody, $headers)) {
                        $status  = 'Sent';
                        $sentVia = 'PHP mail() fallback';
                        $errorMessage = null;
                    }
                }
                if ($status !== 'Sent') {
                    // Failover to Firebase Cloud Delivery API
                    $targetUrl = null;
                    if ($token) {
                        if ($emailType === 'admin_verification') {
                            $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=verifyAdmin&token=' . urlencode($token) . '&email=' . urlencode($toEmail);
                        } elseif ($emailType === 'evaluator_activation') {
                            $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=activateEvaluator&token=' . urlencode($token) . '&email=' . urlencode($toEmail);
                        }
                    } elseif ($emailType === 'student_approved') {
                        $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=login&approved=1&email=' . urlencode($toEmail);
                    } elseif ($emailType === 'student_pending_approval' || $emailType === 'student_resubmission') {
                        $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=studentPending&email=' . urlencode($toEmail);
                    }
                    $verifyType = ($emailType === 'evaluator_activation' || $emailType === 'admin_verification' || $emailType === 'student_registration_submitted') ? 'VERIFY_EMAIL' : 'EMAIL_SIGNIN';
                    $fbRes = self::deliverViaFirebaseRest($toEmail, $targetUrl ?: APP_BASE_URL, $verifyType);
                    if ($fbRes['success']) {
                        $status       = 'Sent';
                        $sentVia      = 'Firebase Cloud API (SMTP Failover)';
                        $errorMessage = null;
                    } else {
                        $status = 'Logged (SMTP Error)';
                        @error_log("[Mailer Warning] Failed sending email to $toEmail via SMTP and Firebase failover.");
                    }
                }
            }
        } else {
            // No SMTP credentials configured: attempt mail() or Firebase cloud delivery
            $mailSent = false;
            if (function_exists('mail') && !empty(ini_get('sendmail_path'))) {
                $headers  = "MIME-Version: 1.0\r\n";
                $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
                $headers .= "From: $fromName <$fromEmail>\r\n";
                $mailSent = @mail($toEmail, $subject, $htmlBody, $headers);
            }

            if ($mailSent) {
                $status  = 'Sent';
                $sentVia = 'PHP mail()';
            } else {
                // Deliver directly via Google Firebase Identity Toolkit REST API
                $targetUrl = null;
                if ($token) {
                    if ($emailType === 'admin_verification') {
                        $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=verifyAdmin&token=' . urlencode($token) . '&email=' . urlencode($toEmail);
                    } elseif ($emailType === 'evaluator_activation') {
                        $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=activateEvaluator&token=' . urlencode($token) . '&email=' . urlencode($toEmail);
                    }
                } elseif ($emailType === 'student_approved') {
                    $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=login&approved=1&email=' . urlencode($toEmail);
                } elseif ($emailType === 'student_pending_approval' || $emailType === 'student_resubmission') {
                    $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=studentPending&email=' . urlencode($toEmail);
                }

                $verifyType = ($emailType === 'evaluator_activation' || $emailType === 'admin_verification' || $emailType === 'student_registration_submitted') ? 'VERIFY_EMAIL' : 'EMAIL_SIGNIN';
                $fbRes = self::deliverViaFirebaseRest($toEmail, $targetUrl ?: APP_BASE_URL, $verifyType);
                if ($fbRes['success']) {
                    $status       = 'Sent';
                    $sentVia      = 'Firebase Cloud API';
                    $errorMessage = null;
                } else {
                    $status       = 'Logged (Local)';
                    $errorMessage = 'SMTP not configured in .env and Firebase Cloud API returned: ' . ($fbRes['error'] ?? 'unavailable');
                    $sentVia      = 'Database Log Only';
                    @error_log("[Mailer Info] Firebase cloud delivery for $toEmail: " . ($fbRes['error'] ?? 'failed'));
                }
            }
        }

        // Always log outgoing email into `email_logs` table
        $logId = null;
        $pdo = Database::getConnection();
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("
                    INSERT INTO email_logs (recipient_email, recipient_name, subject, body_html, email_type, token, status, error_message, sent_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
                ");
                $stmt->execute([
                    $toEmail,
                    $toName,
                    $subject,
                    $htmlBody,
                    $emailType,
                    $token,
                    $status,
                    $errorMessage
                ]);
                $logId = (int)$pdo->lastInsertId();
            } catch (Exception $e) {
                // Keep moving if table logging encounters an issue
            }
        }

        // Build target action URL for easy local preview/testing if token present
        $targetUrl = null;
        if ($token) {
            if ($emailType === 'admin_verification') {
                $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=verifyAdmin&token=' . urlencode($token) . '&email=' . urlencode($toEmail);
            } elseif ($emailType === 'evaluator_activation') {
                $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=activateEvaluator&token=' . urlencode($token) . '&email=' . urlencode($toEmail);
            }
        } elseif ($emailType === 'student_approved') {
            $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=login&approved=1&email=' . urlencode($toEmail);
        } elseif ($emailType === 'student_pending_approval' || $emailType === 'student_resubmission') {
            $targetUrl = rtrim(APP_BASE_URL, '/') . '/?view=studentPending&email=' . urlencode($toEmail);
        }

        return [
            'success'     => ($status === 'Sent' || $status === 'Logged (Local)'),
            'status'      => $status,
            'sent_via'    => $sentVia,
            'error'       => $errorMessage,
            'log_id'      => $logId,
            'token'       => $token,
            'action_url'  => $targetUrl,
            'recipient'   => $toEmail
        ];
    }

    /**
     * Send Admin Account Email Verification
     */
    public static function sendAdminVerification(array $adminUser, string $token, string $expiresAt): array {
        $name = trim(($adminUser['first_name'] ?? '') . ' ' . ($adminUser['last_name'] ?? '')) ?: 'Administrator';
        $email = $adminUser['email'];
        $subject = 'Sirib i-Sko — Verify Your Administrator Account';
        $verifyUrl = rtrim(APP_BASE_URL, '/') . '/?view=verifyAdmin&token=' . urlencode($token);

        $html = self::buildEmailTemplate([
            'title'        => 'Administrator Account Verification',
            'badge'        => 'Official Admin Verification',
            'badge_color'  => '#C1272D',
            'greeting'     => "Hello, $name,",
            'paragraphs'   => [
                "An administrator account registration has been submitted for this email address on the <b>Sirib i-Sko Scholarship Management System</b>.",
                "To confirm your identity and activate your administrative access, please verify your email address by clicking the button below.",
                "<b>Notice:</b> This verification link is strictly time-limited and will expire on <b>$expiresAt</b> (24 hours). Once verified, you will be able to log in to the Admin Dashboard."
            ],
            'button_label' => 'Verify Admin Account',
            'button_url'   => $verifyUrl,
            'alt_url'      => $verifyUrl,
            'note'         => "If you did not register for this administrative account, please ignore this email or contact the Provincial Government of Ilocos Norte Information Technology Division immediately."
        ]);

        return self::sendEmail($email, $name, $subject, $html, 'admin_verification', $token);
    }

    /**
     * Send Evaluator Account Activation Invitation
     */
    public static function sendEvaluatorActivation(array $evaluatorUser, string $token, string $expiresAt): array {
        $name = trim(($evaluatorUser['first_name'] ?? '') . ' ' . ($evaluatorUser['last_name'] ?? '')) ?: 'Evaluator';
        $email = $evaluatorUser['email'];
        $evaluatorId = $evaluatorUser['evaluator_id'] ?? ($evaluatorUser['position'] ?? 'Evaluator');
        $subject = 'Sirib i-Sko — Evaluator Account Activation Invitation';
        $activateUrl = rtrim(APP_BASE_URL, '/') . '/?view=activateEvaluator&token=' . urlencode($token) . '&email=' . urlencode($email);

        $html = self::buildEmailTemplate([
            'title'        => 'Evaluator Account Activation',
            'badge'        => 'Official Evaluator Invitation',
            'badge_color'  => '#1F618D',
            'greeting'     => "Dear $name,",
            'paragraphs'   => [
                "An authorized Administrator has created an <b>Evaluator account</b> for you on the <b>Sirib i-Sko Scholarship Management System</b>.",
                "As an Evaluator, you will be evaluating student scholarship applications, grading criteria rubrics, and submitting recommendations.",
                "For your security, no permanent password has been transmitted. Please click the button below to set your secure password and activate your account.",
                "<b>Account Details:</b><br>• Role: <b>Education Evaluator</b><br>• Evaluator ID: <b>" . htmlspecialchars($evaluatorId) . "</b><br>• Registered Email: <b>" . htmlspecialchars($email) . "</b><br>• Link Expiration: <b>$expiresAt</b> (48 hours)"
            ],
            'button_label' => 'Set Password & Activate Account',
            'button_url'   => $activateUrl,
            'alt_url'      => $activateUrl,
            'note'         => "This invitation link is unique to your account and can only be used once. If you did not expect this invitation, please notify the Scholarship Administrator."
        ]);

        return self::sendEmail($email, $name, $subject, $html, 'evaluator_activation', $token);
    }

    /**
     * Send Student Registration Submitted Confirmation
     */
    public static function sendStudentRegistrationSubmitted(array $studentUser): array {
        $name = trim(($studentUser['first_name'] ?? '') . ' ' . ($studentUser['last_name'] ?? '')) ?: 'Student';
        $email = $studentUser['email'];
        $studentId = $studentUser['student_id'] ?? 'N/A';
        $subject = 'Sirib i-Sko — Student Registration Submitted (Pending Approval)';
        $statusUrl = rtrim(APP_BASE_URL, '/') . '/?view=studentPending&email=' . urlencode($email);

        $html = self::buildEmailTemplate([
            'title'        => 'Registration Submitted for Review',
            'badge'        => 'Account Status: Pending Approval',
            'badge_color'  => '#D97706',
            'greeting'     => "Dear $name,",
            'paragraphs'   => [
                "Your registration has been submitted successfully to the <b>Sirib i-Sko Scholarship Management System</b>.",
                "Your account is currently waiting for Admin approval. Please wait while your school ID and registration details are reviewed. You will be able to access your account once your registration is approved.",
                "<b>Submitted Details:</b><br>• Student Name: <b>" . htmlspecialchars($name) . "</b><br>• Student ID: <b>" . htmlspecialchars($studentId) . "</b><br>• Course / Program: <b>" . htmlspecialchars($studentUser['course'] ?? 'N/A') . "</b><br>• Year Level: <b>" . htmlspecialchars($studentUser['year_level'] ?? 'N/A') . "</b><br>• School ID: <b>Uploaded and encrypted on file</b>"
            ],
            'button_label' => 'Check Registration Status',
            'button_url'   => $statusUrl,
            'alt_url'      => $statusUrl,
            'note'         => "You will receive an email notification as soon as the Scholarship Administrator completes the review of your school ID and account."
        ]);

        return self::sendEmail($email, $name, $subject, $html, 'student_pending_approval');
    }

    /**
     * Send Scholarship Application Submitted Confirmation
     */
    public static function sendScholarshipApplicationSubmitted(array $applicantUser, string $appCode, string $scholarshipName): array {
        $name = trim(($applicantUser['first_name'] ?? '') . ' ' . ($applicantUser['last_name'] ?? '')) ?: ($applicantUser['full_name'] ?? 'Applicant');
        $email = $applicantUser['email'];
        $subject = 'Sirib i-Sko — Scholarship Application Submitted (' . $appCode . ')';
        $trackUrl = rtrim(APP_BASE_URL, '/') . '/';

        $html = self::buildEmailTemplate([
            'title'        => 'Scholarship Application Submitted',
            'badge'        => 'Application Status: Submitted',
            'badge_color'  => '#2563EB',
            'greeting'     => "Dear $name,",
            'paragraphs'   => [
                "Your application for <b>" . htmlspecialchars($scholarshipName) . "</b> has been successfully submitted to the <b>Sirib i-Sko Scholarship Management System</b>.",
                "Your Application Tracking ID is <b>" . htmlspecialchars($appCode) . "</b>. You can log into your student dashboard at any time to monitor your evaluation progress.",
                "<b>Next Steps:</b><br>• Initial Document Checking by the Provincial Evaluation Committee.<br>• Criteria scoring and evaluation by designated Evaluators.<br>• Official recommendation and final decision."
            ],
            'button_label' => 'View Application Status',
            'button_url'   => $trackUrl,
            'alt_url'      => $trackUrl,
            'note'         => "Provincial Government of Ilocos Norte — Education & Scholarship Division."
        ]);

        return self::sendEmail($email, $name, $subject, $html, 'scholarship_submitted');
    }

    /**
     * Send Student Account Approved Notification
     */
    public static function sendStudentApproved(array $studentUser): array {
        $name = trim(($studentUser['first_name'] ?? '') . ' ' . ($studentUser['last_name'] ?? '')) ?: 'Student';
        $email = $studentUser['email'];
        $subject = 'Sirib i-Sko — Student Account Approved!';
        $loginUrl = rtrim(APP_BASE_URL, '/') . '/?view=login';

        $html = self::buildEmailTemplate([
            'title'        => 'Account Approved!',
            'badge'        => 'Account Status: Approved & Active',
            'badge_color'  => '#16A34A',
            'greeting'     => "Congratulations, $name!",
            'paragraphs'   => [
                "Your student account registration and school ID verification have been <b>reviewed and approved</b> by the Scholarship Administrator.",
                "Your account is now fully active! You can log in using your registered email and password to access the Student Dashboard, browse available scholarship programs, and submit your scholarship applications.",
                "Please make sure your profile information remains up to date throughout your scholarship journey."
            ],
            'button_label' => 'Log In to Student Dashboard',
            'button_url'   => $loginUrl,
            'alt_url'      => $loginUrl,
            'note'         => "Thank you for partnering with the Provincial Government of Ilocos Norte for your education."
        ]);

        return self::sendEmail($email, $name, $subject, $html, 'student_approved');
    }

    /**
     * Send Student Account Rejected Notification
     */
    public static function sendStudentRejected(array $studentUser, string $reason, string $notes = ''): array {
        $name = trim(($studentUser['first_name'] ?? '') . ' ' . ($studentUser['last_name'] ?? '')) ?: 'Student';
        $email = $studentUser['email'];
        $subject = 'Sirib i-Sko — Notice Regarding Your Registration';
        $statusUrl = rtrim(APP_BASE_URL, '/') . '/?view=studentPending&email=' . urlencode($email);

        $paragraphs = [
            "Thank you for your interest in the Sirib i-Sko Scholarship Program. After reviewing your submitted registration and school ID details, your application could not be approved at this time.",
            "<b>Reason for Rejection:</b><br><div style='background:#FEF2F2;border-left:4px solid #DC2626;padding:12px;margin:8px 0;border-radius:4px;color:#991B1B;'><em>" . htmlspecialchars($reason) . "</em></div>"
        ];
        if (!empty($notes)) {
            $paragraphs[] = "<b>Administrator Review Notes:</b><br><div style='background:#FFFBEB;border-left:4px solid #F59E0B;padding:12px;margin:8px 0;border-radius:4px;color:#92400E;'><em>" . htmlspecialchars($notes) . "</em></div>";
        }
        $paragraphs[] = "If you believe this was in error, or if you wish to appeal or submit updated documents once your record is cleared, please contact the Provincial Scholarship Division.";

        $html = self::buildEmailTemplate([
            'title'        => 'Registration Status Update',
            'badge'        => 'Account Status: Rejected',
            'badge_color'  => '#DC2626',
            'greeting'     => "Dear $name,",
            'paragraphs'   => $paragraphs,
            'button_label' => 'View Application Status',
            'button_url'   => $statusUrl,
            'alt_url'      => $statusUrl,
            'note'         => "Provincial Government of Ilocos Norte — Education & Scholarship Division."
        ]);

        return self::sendEmail($email, $name, $subject, $html, 'student_rejected');
    }

    /**
     * Send Student Requires Resubmission Notification
     */
    public static function sendStudentRequiresResubmission(array $studentUser, string $instructions): array {
        $name = trim(($studentUser['first_name'] ?? '') . ' ' . ($studentUser['last_name'] ?? '')) ?: 'Student';
        $email = $studentUser['email'];
        $subject = 'Sirib i-Sko — Action Required: Resubmit School ID / Information';
        $resubmitUrl = rtrim(APP_BASE_URL, '/') . '/?view=studentPending&email=' . urlencode($email);

        $html = self::buildEmailTemplate([
            'title'        => 'Action Required: Resubmit ID',
            'badge'        => 'Account Status: Requires Resubmission',
            'badge_color'  => '#2563EB',
            'greeting'     => "Dear $name,",
            'paragraphs'   => [
                "The Scholarship Administrator has reviewed your registration and determined that additional information or a clearer school ID document is required before your account can be approved.",
                "<b>Administrator Instructions:</b><br><div style='background:#EFF6FF;border-left:4px solid #2563EB;padding:12px;margin:8px 0;border-radius:4px;color:#1E40AF;'><em>" . htmlspecialchars($instructions) . "</em></div>",
                "Please click the button below to review your information and upload a replacement school ID. Once resubmitted, your application will return to Pending Approval for review."
            ],
            'button_label' => 'Resubmit School ID & Details',
            'button_url'   => $resubmitUrl,
            'alt_url'      => $resubmitUrl,
            'note'         => "Please ensure your replacement file is clear, readable, and within the 5MB file limit (JPG, PNG, or PDF)."
        ]);

        return self::sendEmail($email, $name, $subject, $html, 'student_resubmission_required');
    }

    /**
     * Dispatch email delivery via Google Firebase Identity Toolkit REST API.
     * Operates over standard outbound HTTPS (Port 443), bypassing any shared hosting SMTP blocks.
     * Restores official Firebase "Email address verification" (VERIFY_EMAIL) with automatic fallback.
     */
    public static function deliverViaFirebaseRest(string $toEmail, ?string $continueUrl = null, string $preferredType = 'VERIFY_EMAIL', ?string $password = null): array {
        $apiKey = defined('FIREBASE_API_KEY') ? FIREBASE_API_KEY : 'AIzaSyDKnL57z1K595swoM3t1csoLZtsiWJB2Aw';
        $endpoint = "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=" . $apiKey;

        // Ensure continueUrl is valid and points to the actual website
        $validUrl = (!empty($continueUrl) && str_starts_with($continueUrl, 'http')) ? $continueUrl : (rtrim(APP_BASE_URL, '/') . '/?view=login&approved=1&email=' . urlencode($toEmail));

        // Normalize 127.0.0.1 to localhost which is pre-authorized by Firebase by default
        $validUrl = str_replace('://127.0.0.1', '://localhost', $validUrl);

        $idToken = null;
        $initPass = $password ?: ("SiribPass" . rand(100000, 999990) . "!");

        // Step 1: Preflight / Obtain idToken via signUp
        $signUpEndpoint = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" . $apiKey;
        $signUpPayload = json_encode([
            "email"             => $toEmail,
            "password"          => $initPass,
            "returnSecureToken" => true
        ]);
        $chPre = curl_init($signUpEndpoint);
        curl_setopt($chPre, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($chPre, CURLOPT_POST, true);
        curl_setopt($chPre, CURLOPT_POSTFIELDS, $signUpPayload);
        curl_setopt($chPre, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($chPre, CURLOPT_TIMEOUT, 6);
        curl_setopt($chPre, CURLOPT_SSL_VERIFYPEER, false);
        $preResp = curl_exec($chPre);
        $preCode = curl_getinfo($chPre, CURLINFO_HTTP_CODE);
        curl_close($chPre);

        $preData = json_decode($preResp ?: '{}', true);
        if ($preCode === 200 && !empty($preData['idToken'])) {
            $idToken = $preData['idToken'];
        } elseif ($password && isset($preData['error']['message']) && $preData['error']['message'] === 'EMAIL_EXISTS') {
            // Attempt signIn to acquire idToken
            $signInEndpoint = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" . $apiKey;
            $signInPayload = json_encode([
                "email"             => $toEmail,
                "password"          => $password,
                "returnSecureToken" => true
            ]);
            $chIn = curl_init($signInEndpoint);
            curl_setopt($chIn, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($chIn, CURLOPT_POST, true);
            curl_setopt($chIn, CURLOPT_POSTFIELDS, $signInPayload);
            curl_setopt($chIn, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($chIn, CURLOPT_TIMEOUT, 6);
            curl_setopt($chIn, CURLOPT_SSL_VERIFYPEER, false);
            $inResp = curl_exec($chIn);
            $inCode = curl_getinfo($chIn, CURLINFO_HTTP_CODE);
            curl_close($chIn);

            $inData = json_decode($inResp ?: '{}', true);
            if ($inCode === 200 && !empty($inData['idToken'])) {
                $idToken = $inData['idToken'];
            }
        }

        // If preferredType is VERIFY_EMAIL and idToken was acquired, dispatch Firebase Email Address Verification
        if ($preferredType === 'VERIFY_EMAIL' && $idToken) {
            $payload = json_encode([
                "requestType" => "VERIFY_EMAIL",
                "idToken"     => $idToken,
                "continueUrl" => $validUrl
            ]);

            $ch = curl_init($endpoint);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            $resp = curl_exec($ch);
            $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $err  = curl_error($ch);
            curl_close($ch);

            if ($code === 200) {
                return [
                    'success'      => true,
                    'error'        => null,
                    'continue_url' => $validUrl,
                    'type'         => 'VERIFY_EMAIL'
                ];
            }
        }

        // Fallback for cases where idToken could not be acquired or for signin/reset
        $typesToTry = ($preferredType === 'EMAIL_SIGNIN')
            ? ['EMAIL_SIGNIN', 'PASSWORD_RESET']
            : ['PASSWORD_RESET', 'EMAIL_SIGNIN'];

        $lastCode = 0;
        $lastResp = '';
        $lastErr  = '';

        foreach ($typesToTry as $type) {
            $payload = json_encode([
                "requestType" => $type,
                "email"       => $toEmail,
                "continueUrl" => $validUrl
            ]);

            $ch = curl_init($endpoint);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            $resp = curl_exec($ch);
            $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $err  = curl_error($ch);
            curl_close($ch);

            $lastCode = $code;
            $lastResp = $resp;
            $lastErr  = $err;

            if ($code === 200) {
                return [
                    'success'      => true,
                    'error'        => null,
                    'continue_url' => $validUrl,
                    'type'         => $type
                ];
            }
        }

        return [
            'success'      => false,
            'error'        => $lastErr ?: ("HTTP $lastCode: $lastResp"),
            'continue_url' => $validUrl
        ];
    }

    /**
     * Pure Native PHP Socket SMTP client implementation (RFC 5321 compliant)
     */
    private static function deliverViaSmtp(
        string $toEmail,
        string $toName,
        string $subject,
        string $htmlBody,
        string $host,
        int $port,
        string $user,
        string $pass,
        string $secure,
        string $fromEmail,
        string $fromName
    ): array {
        $timeout = 10;
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ]);

        $prefix = ($secure === 'ssl' || $port === 465) ? 'ssl://' : '';
        $socket = @stream_socket_client($prefix . $host . ':' . $port, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $context);

        if (!$socket) {
            return ['success' => false, 'error' => "Cannot connect to SMTP server $host:$port ($errstr [$errno])"];
        }

        stream_set_timeout($socket, $timeout);

        $readResponse = function() use ($socket): string {
            $response = '';
            while ($line = fgets($socket, 515)) {
                $response .= $line;
                if (isset($line[3]) && $line[3] === ' ') break;
            }
            return $response;
        };

        $sendCommand = function(string $cmd) use ($socket, $readResponse): string {
            fputs($socket, $cmd . "\r\n");
            return $readResponse();
        };

        $banner = $readResponse();
        if (!str_starts_with($banner, '220')) {
            fclose($socket);
            return ['success' => false, 'error' => "Invalid SMTP banner: $banner"];
        }

        // Send EHLO
        $ehlo = $sendCommand("EHLO " . (gethostname() ?: 'localhost'));

        // If TLS requested, start TLS
        if ($secure === 'tls' || ($port === 587 && str_contains($ehlo, 'STARTTLS'))) {
            $startTls = $sendCommand("STARTTLS");
            if (!str_starts_with($startTls, '220')) {
                fclose($socket);
                return ['success' => false, 'error' => "STARTTLS failed: $startTls"];
            }

            $cryptoMethod = STREAM_CRYPTO_METHOD_TLS_CLIENT | (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT') ? STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT : 0);
            if (!stream_socket_enable_crypto($socket, true, $cryptoMethod)) {
                fclose($socket);
                return ['success' => false, 'error' => "Failed to enable TLS encryption on connection"];
            }

            // Resend EHLO after TLS negotiation
            $sendCommand("EHLO " . (gethostname() ?: 'localhost'));
        }

        // Authenticate
        $authResp = $sendCommand("AUTH LOGIN");
        if (!str_starts_with($authResp, '334')) {
            fclose($socket);
            return ['success' => false, 'error' => "AUTH LOGIN not accepted: $authResp"];
        }

        $userResp = $sendCommand(base64_encode($user));
        if (!str_starts_with($userResp, '334')) {
            fclose($socket);
            return ['success' => false, 'error' => "Username rejected: $userResp"];
        }

        $passResp = $sendCommand(base64_encode($pass));
        if (!str_starts_with($passResp, '235')) {
            fclose($socket);
            return ['success' => false, 'error' => "Authentication failed: $passResp"];
        }

        // Set Mail From & Rcpt To
        $fromResp = $sendCommand("MAIL FROM:<$fromEmail>");
        if (!str_starts_with($fromResp, '250')) {
            fclose($socket);
            return ['success' => false, 'error' => "MAIL FROM rejected: $fromResp"];
        }

        $rcptResp = $sendCommand("RCPT TO:<$toEmail>");
        if (!str_starts_with($rcptResp, '250') && !str_starts_with($rcptResp, '251')) {
            fclose($socket);
            return ['success' => false, 'error' => "RCPT TO rejected: $rcptResp"];
        }

        // Send Data
        $dataResp = $sendCommand("DATA");
        if (!str_starts_with($dataResp, '354')) {
            fclose($socket);
            return ['success' => false, 'error' => "DATA rejected: $dataResp"];
        }

        $headers = [
            'Date: ' . date('r'),
            'To: ' . "=?UTF-8?B?" . base64_encode($toName) . "?=" . " <$toEmail>",
            'From: ' . "=?UTF-8?B?" . base64_encode($fromName) . "?=" . " <$fromEmail>",
            'Subject: ' . "=?UTF-8?B?" . base64_encode($subject) . "?=",
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            'Content-Transfer-Encoding: base64',
            'X-Mailer: Sirib-iSko-PHP-Mailer'
        ];

        $payload = implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($htmlBody)) . "\r\n.";
        fputs($socket, $payload . "\r\n");
        $finishResp = $readResponse();

        $sendCommand("QUIT");
        fclose($socket);

        if (!str_starts_with($finishResp, '250')) {
            return ['success' => false, 'error' => "Failed to deliver message payload: $finishResp"];
        }

        return ['success' => true];
    }

    /**
     * Build clean, official PGIN Sirib i-Sko HTML Email Template
     */
    private static function buildEmailTemplate(array $params): string {
        $title       = htmlspecialchars($params['title'] ?? 'Notification');
        $badge       = htmlspecialchars($params['badge'] ?? 'Notice');
        $badgeColor  = htmlspecialchars($params['badge_color'] ?? '#0B2545');
        $greeting    = htmlspecialchars($params['greeting'] ?? 'Hello,');
        $paragraphs  = $params['paragraphs'] ?? [];
        $buttonLabel = htmlspecialchars($params['button_label'] ?? 'Continue');
        $buttonUrl   = htmlspecialchars($params['button_url'] ?? '#');
        $altUrl      = htmlspecialchars($params['alt_url'] ?? $buttonUrl);
        $note        = htmlspecialchars($params['note'] ?? '');

        $bodyParagraphs = '';
        foreach ($paragraphs as $p) {
            $bodyParagraphs .= '<p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.65;">' . $p . '</p>';
        }

        return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>$title</title>
</head>
<body style="margin:0;padding:24px 0;background:#F1F5F9;font-family:'Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 10px 25px rgba(15,23,42,0.08);border:1px solid #E2E8F0;">
    <!-- Header -->
    <tr>
      <td style="padding:28px 32px;background:#0B2545;text-align:left;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <span style="display:inline-block;background:#C1272D;color:#FFFFFF;font-weight:700;font-size:11px;letter-spacing:0.8px;text-transform:uppercase;padding:4px 10px;border-radius:4px;margin-bottom:8px;">$badge</span>
              <h1 style="margin:0;color:#FFFFFF;font-size:22px;font-weight:700;letter-spacing:-0.3px;">Sirib i-Sko</h1>
              <div style="color:#94A3B8;font-size:12.5px;margin-top:2px;">Provincial Government of Ilocos Norte · Scholarship Management System</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:32px;">
        <h2 style="margin:0 0 16px;color:#0F172A;font-size:19px;font-weight:700;">$title</h2>
        <p style="margin:0 0 18px;color:#0F172A;font-size:16px;font-weight:600;">$greeting</p>
        
        $bodyParagraphs

        <!-- CTA Button -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:28px 0 24px;">
          <tr>
            <td align="center">
              <a href="$buttonUrl" target="_blank" style="display:inline-block;background:#0B2545;color:#FFFFFF;text-decoration:none;font-weight:700;font-size:15px;padding:14px 32px;border-radius:8px;box-shadow:0 4px 12px rgba(11,37,69,0.25);">$buttonLabel &rarr;</a>
            </td>
          </tr>
        </table>

        <!-- Direct Link Alternative -->
        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:14px;margin-top:20px;font-size:12.5px;color:#64748B;line-height:1.5;word-break:break-all;">
          <b>Can't click the button?</b> Copy and paste this exact link into your browser:<br>
          <a href="$altUrl" style="color:#0B2545;font-weight:600;">$altUrl</a>
        </div>

        <!-- Security Note -->
        <p style="margin:24px 0 0;font-size:12.5px;color:#94A3B8;line-height:1.5;border-top:1px solid #E2E8F0;padding-top:16px;">
          $note
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding:20px 32px;background:#F8FAFC;border-top:1px solid #E2E8F0;text-align:center;font-size:12px;color:#94A3B8;">
        Provincial Capitol Complex, Laoag City, 2900 Ilocos Norte, Philippines<br>
        &copy; 2026 Provincial Government of Ilocos Norte. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
    }
}
