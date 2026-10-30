<?php
/**
 * Seeder script for sample applications, documents, evaluations, notifications, and logs
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

$pdo = Database::getConnection();
if (!$pdo) {
    die("Database connection failed: " . Database::getError() . "\n");
}

$count = $pdo->query('SELECT COUNT(*) FROM applications')->fetchColumn();
if ($count == 0) {
    $pdo->exec("
        INSERT INTO applications (code, applicant_id, scholarship_id, reviewer_id, status, stage, full_name, birthdate, sex, address, contact, email, school, course, year_level, student_id, gpa, guardian, occupation, family_income, family_members, reviewer_comments, submitted_at, created_at, updated_at) VALUES
        ('APP-2026-0001', 1, 18, 7, 'Under Review', 'Under Review', 'Maria Santos Domingo', '2004-03-14', 'Female', 'Brgy. 5, Laoag City, Ilocos Norte', '0917-123-4567', 'maria.domingo@student.pgin.gov.ph', 'Mariano Marcos State University', 'BS Information Technology', '3rd Year', '2023-00123', 94.50, 'Juan Domingo', 'Farmer', '₱120,000 - ₱180,000 / year', '5', 'Initial review ongoing; complete documents.', '2026-09-20 10:00:00', '2026-09-20 10:00:00', '2026-09-23 14:30:00'),
        ('APP-2026-0002', 1, 19, 8, 'Approved', 'Final Decision', 'Maria Santos Domingo', '2004-03-14', 'Female', 'Brgy. 5, Laoag City, Ilocos Norte', '0917-123-4567', 'maria.domingo@student.pgin.gov.ph', 'Mariano Marcos State University', 'BS Information Technology', '3rd Year', '2023-00123', 95.00, 'Juan Domingo', 'Farmer', '₱120,000 - ₱180,000 / year', '5', 'Strong academic record; recommended for approval.', '2026-08-15 09:00:00', '2026-08-15 09:00:00', '2026-08-28 16:00:00'),
        ('APP-2026-0003', 2, 18, 7, 'Processing', 'Document Checking', 'John Paul Ragasa', '2004-08-22', 'Male', 'Brgy. Poblacion, Batac City, Ilocos Norte', '0918-222-3344', 'jp.ragasa@student.pgin.gov.ph', 'University of Northern Philippines', 'BS Civil Engineering', '2nd Year', '2022-00456', 91.20, 'Pedro Ragasa', 'Carpenter', '₱100,000 - ₱150,000 / year', '4', 'Documents under verification.', '2026-09-22 11:30:00', '2026-09-22 11:30:00', '2026-09-24 10:15:00'),
        ('APP-2026-0004', 3, 18, 8, 'Approved', 'Final Decision', 'Kristine Valdez', '2003-11-05', 'Female', 'Brgy. San Julian, Paoay, Ilocos Norte', '0919-555-1212', 'k.valdez@student.pgin.gov.ph', 'Mariano Marcos State University', 'BS Nursing', '4th Year', '2021-00789', 93.80, 'Rosa Valdez', 'Store Owner', '₱150,000 - ₱200,000 / year', '3', 'Complete and qualified. Approved for AY 2026-2027.', '2026-07-10 14:00:00', '2026-07-10 14:00:00', '2026-07-28 15:00:00'),
        ('APP-2026-0005', 4, 19, NULL, 'Incomplete', 'Document Checking', 'Ronnel Agustin', '2005-02-18', 'Male', 'Brgy. Currimao Centro, Currimao, Ilocos Norte', '0920-777-8899', 'r.agustin@student.pgin.gov.ph', 'Ilocos Norte College of Arts and Trades', 'BS Electrical Engineering', '1st Year', '2023-00951', 88.50, 'Danilo Agustin', 'Fisherman', '₱80,000 - ₱120,000 / year', '6', 'Please re-submit your Certificate of Enrollment.', '2026-09-18 08:30:00', '2026-09-18 08:30:00', '2026-09-20 13:45:00')
    ");

    $app2Id = $pdo->query("SELECT id FROM applications WHERE code = 'APP-2026-0002'")->fetchColumn();
    if ($app2Id) {
        $pdo->exec("
            INSERT INTO evaluations (application_id, reviewer_id, academic, financial, completeness, eligibility, additional, total, recommendation, comments, submitted_at) VALUES
            ($app2Id, 8, 28, 20, 20, 15, 9, 92, 'Recommend for Approval', 'Excellent grades and complete requirements.', '2026-08-25 15:30:00')
        ");
    }

    $app1Id = $pdo->query("SELECT id FROM applications WHERE code = 'APP-2026-0001'")->fetchColumn();
    if ($app1Id) {
        $pdo->exec("
            INSERT INTO application_documents (application_id, doc_type, file_name, file_path, file_size, status, uploaded_at) VALUES
            ($app1Id, 'School ID', 'School_ID.pdf', 'uploads/School_ID.pdf', '420 KB', 'Verified', '2026-09-20 10:05:00'),
            ($app1Id, 'Certificate of Grades', 'Grades_Cert.pdf', 'uploads/Grades_Cert.pdf', '612 KB', 'Verified', '2026-09-20 10:06:00'),
            ($app1Id, 'Certificate of Enrollment', 'Enrollment_Cert.pdf', 'uploads/Enrollment_Cert.pdf', '380 KB', 'Verified', '2026-09-20 10:07:00'),
            ($app1Id, 'Barangay Certificate', 'Barangay_Cert.pdf', 'uploads/Barangay_Cert.pdf', '295 KB', 'Pending', '2026-09-20 10:08:00')
        ");
    }

    $pdo->exec("
        INSERT INTO notifications (user_id, title, message, is_read, created_at) VALUES
        (1, 'Application Under Review', 'Your application APP-2026-0001 is now under review by the evaluation committee.', 0, '2026-09-23 14:30:00'),
        (1, 'Scholarship Approved!', 'Congratulations! Your application APP-2026-0002 has been approved.', 1, '2026-08-28 16:00:00'),
        (2, 'Application Processing', 'Your application APP-2026-0003 is currently being processed.', 0, '2026-09-24 10:15:00'),
        (4, 'Action Required: Incomplete Documents', 'Please re-submit your Certificate of Enrollment for APP-2026-0005.', 0, '2026-09-20 13:45:00'),
        (6, 'New Applications Received', '5 new scholarship applications have been submitted for evaluation.', 0, '2026-09-24 08:00:00')
    ");

    $pdo->exec("
        INSERT INTO activity_logs (user_id, role, action, description, created_at) VALUES
        (6, 'admin', 'Assign Reviewer', 'Assigned Carlos Bautista to evaluate APP-2026-0002', '2026-08-20 11:00:00'),
        (8, 'reviewer', 'Submit Evaluation', 'Submitted evaluation score 92/100 for APP-2026-0002', '2026-08-25 15:30:00'),
        (6, 'admin', 'Approve Application', 'Approved scholarship application APP-2026-0002', '2026-08-28 16:00:00'),
        (7, 'reviewer', 'Status Update', 'Marked APP-2026-0001 status as Under Review', '2026-09-23 14:30:00')
    ");

    echo "Sample data successfully seeded!\n";
} else {
    echo "Applications already exist ($count rows).\n";
}
