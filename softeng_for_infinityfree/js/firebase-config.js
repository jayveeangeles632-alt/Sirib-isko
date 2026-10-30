// ============================================================================
// FIREBASE CONFIGURATION FOR SIRIB I-SKO
// 1. Primary Firebase ("sirib-isko"): Dedicated for Email Verification (Students & Evaluators)
// 2. Secondary Firebase ("sirib-2"): Dedicated for Password Reset
// ============================================================================

// Primary Firebase Configuration (Old Firebase Project: "sirib-isko")
// Dedicated for Email Verification (Evaluators, Students, Administrators)
const firebaseConfig = {
  apiKey: "AIzaSyDKnL57z1K595swoM3t1csoLZtsiWJB2Aw",
  authDomain: "sirib-isko.firebaseapp.com",
  projectId: "sirib-isko",
  storageBucket: "sirib-isko.firebasestorage.app",
  messagingSenderId: "766653507875",
  appId: "1:766653507875:web:84ba6968c199233c058496",
  measurementId: "G-9BGKZQC9S1"
};

// Secondary Firebase Configuration (New Firebase Project: "sirib-2")
// Dedicated for Password Reset
const firebaseResetConfig = {
  apiKey: "AIzaSyDklLtpNYUkUZdj84CMD9tSyb8ikLn2isM",
  authDomain: "sirib-2.firebaseapp.com",
  projectId: "sirib-2",
  storageBucket: "sirib-2.firebasestorage.app",
  messagingSenderId: "364897739540",
  appId: "1:364897739540:web:ad13f3d10ffdba3be99801",
  measurementId: "G-LSN7XTXH5P"
};

// Initialize Primary Firebase SDK Instance (sirib-isko for verification)
let firebaseApp = null;
let firebaseAuth = null;

// Initialize Secondary Firebase SDK Instance (sirib-2 for password reset)
let firebaseResetApp = null;
let firebaseResetAuth = null;

if (typeof firebase !== 'undefined') {
  try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    firebaseAuth = firebase.auth();
    console.log("Primary Firebase (sirib-isko) initialized for Email Verification.");
  } catch (err) {
    console.warn("Primary Firebase initialization note:", err.message);
  }

  try {
    firebaseResetApp = firebase.initializeApp(firebaseResetConfig, "resetPasswordApp");
    firebaseResetAuth = firebaseResetApp.auth();
    console.log("Secondary Firebase (sirib-2) initialized for Password Reset.");
  } catch (err) {
    console.warn("Secondary Firebase initialization note:", err.message);
  }
} else {
  console.warn("Firebase SDK scripts not detected. Please verify CDN script tags in index.html/index.php.");
}

function getFirebaseContinueBaseUrl() {
  let origin = window.location.origin;
  if (!origin || origin === 'null') {
    origin = 'http://localhost';
  }
  // Convert 127.0.0.1 to localhost which is pre-authorized by Firebase by default
  if (window.location.hostname === '127.0.0.1') {
    origin = origin.replace('127.0.0.1', 'localhost');
  }
  return origin + window.location.pathname;
}

/**
 * Dispatch an email via Google Firebase Identity Toolkit REST API.
 * Uses 'sirib-isko' for VERIFY_EMAIL (evaluators & students).
 * Uses 'sirib-2' for PASSWORD_RESET.
 *
 * @param {string} email Recipient email address
 * @param {string} continueUrl Target return URL
 * @param {string} type 'VERIFY_EMAIL' (default) | 'PASSWORD_RESET' | 'EMAIL_SIGNIN'
 * @param {string|null} password Optional password to authenticate / sign-up user to acquire idToken
 * @returns {Promise<{success: boolean, message?: string, error?: string, url?: string, type?: string}>}
 */
async function dispatchGoogleCloudEmail(email, continueUrl, type = 'VERIFY_EMAIL', password = null) {
  // Direct PASSWORD_RESET to the dedicated sirib-2 project
  const isPasswordReset = (type === 'PASSWORD_RESET');
  const targetConfig = isPasswordReset ? firebaseResetConfig : firebaseConfig;
  const targetAuth = isPasswordReset ? firebaseResetAuth : firebaseAuth;
  const apiKey = targetConfig.apiKey;

  try {
    // 1. Client SDK Fast Path: If SDK Auth is ready
    if (type === 'VERIFY_EMAIL' && targetAuth && targetAuth.currentUser && targetAuth.currentUser.email && targetAuth.currentUser.email.toLowerCase() === email.toLowerCase()) {
      try {
        await targetAuth.currentUser.sendEmailVerification({
          url: continueUrl,
          handleCodeInApp: true
        });
        console.log('Google Firebase Email address verification sent via SDK to:', email);
        return {
          success: true,
          message: 'Firebase Email address verification dispatched to ' + email,
          url: continueUrl,
          type: 'VERIFY_EMAIL'
        };
      } catch (sdkErr) {
        console.warn('Firebase SDK sendEmailVerification note:', sdkErr.message);
      }
    }

    if (type === 'PASSWORD_RESET' && targetAuth && typeof targetAuth.sendPasswordResetEmail === 'function') {
      try {
        await targetAuth.sendPasswordResetEmail(email, {
          url: continueUrl,
          handleCodeInApp: true
        });
        console.log('Firebase (sirib-2) password reset dispatched via SDK to:', email);
        return {
          success: true,
          message: 'Password reset link dispatched to ' + email + ' via Firebase (sirib-2)',
          url: continueUrl,
          type: 'PASSWORD_RESET'
        };
      } catch (sdkErr) {
        console.warn('Firebase (sirib-2) SDK sendPasswordResetEmail note, trying REST API:', sdkErr.message);
      }
    }

    let idToken = null;
    const initialPass = password || ('SiribPass' + Math.floor(100000 + Math.random() * 900000) + '!');

    // 2. Preflight / ID Token Acquisition for VERIFY_EMAIL on Primary Firebase (sirib-isko)
    if (type === 'VERIFY_EMAIL') {
      try {
        const upResp = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            password: initialPass,
            returnSecureToken: true
          })
        });
        const upData = await upResp.json().catch(() => ({}));
        if (upResp.ok && upData.idToken) {
          idToken = upData.idToken;
        } else if (upData && upData.error && upData.error.message === 'EMAIL_EXISTS' && password) {
          const inResp = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiKey, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true
            })
          });
          const inData = await inResp.json().catch(() => ({}));
          if (inResp.ok && inData.idToken) {
            idToken = inData.idToken;
          }
        }
      } catch (authErr) {
        console.warn('Firebase token acquisition notice:', authErr);
      }

      if (idToken) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + apiKey, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            requestType: 'VERIFY_EMAIL',
            idToken: idToken,
            continueUrl: continueUrl
          })
        });

        const data = await response.json().catch(() => ({}));
        if (response.ok) {
          console.log('Firebase Email address verification successfully dispatched to:', email);
          return {
            success: true,
            message: 'Firebase Email address verification dispatched to ' + email,
            url: continueUrl,
            type: 'VERIFY_EMAIL'
          };
        }
      }
    }

    // 3. OOB Request (PASSWORD_RESET on sirib-2, or EMAIL_SIGNIN fallback)
    const fallbackTypes = (type === 'VERIFY_EMAIL') ? ['EMAIL_SIGNIN', 'PASSWORD_RESET'] : [type];
    let lastErr = 'Failed to dispatch email';

    for (const reqType of fallbackTypes) {
      try {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + apiKey, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            requestType: reqType,
            email: email,
            continueUrl: continueUrl
          })
        });

        const data = await response.json().catch(() => ({}));
        if (response.ok) {
          console.log('Firebase email dispatched to:', email, 'type:', reqType, 'project:', targetConfig.projectId);
          return {
            success: true,
            message: 'Email successfully dispatched via Firebase (' + targetConfig.projectId + ') to ' + email,
            url: continueUrl,
            type: reqType
          };
        } else {
          // If EMAIL_NOT_FOUND during PASSWORD_RESET, auto-provision user in sirib-2 and retry
          if (reqType === 'PASSWORD_RESET' && data && data.error && data.error.message === 'EMAIL_NOT_FOUND') {
            try {
              const tempPass = 'SiribReset' + Math.floor(100000 + Math.random() * 900000) + '!';
              const signResp = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: email,
                  password: tempPass,
                  returnSecureToken: true
                })
              });
              if (signResp.ok) {
                const retryResp = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + apiKey, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    requestType: 'PASSWORD_RESET',
                    email: email,
                    continueUrl: continueUrl
                  })
                });
                if (retryResp.ok) {
                  return {
                    success: true,
                    message: 'Password reset link sent to ' + email + ' via Firebase (sirib-2).',
                    url: continueUrl,
                    type: 'PASSWORD_RESET'
                  };
                }
              }
            } catch (autoProvErr) {}
          }
          lastErr = (data && data.error && data.error.message) ? data.error.message : ('HTTP ' + response.status);
        }
      } catch (fErr) {
        lastErr = fErr.message;
      }
    }

    return {
      success: false,
      error: lastErr,
      url: continueUrl
    };

  } catch (err) {
    console.warn('Firebase email dispatch exception:', err);
    return {
      success: false,
      error: err.message,
      url: continueUrl
    };
  }
}

/**
 * Dispatch an official Password Reset email using the dedicated Firebase project (sirib-2).
 *
 * @param {string} email User email address
 * @returns {Promise<{success: boolean, message?: string, error?: string, url?: string}>}
 */
async function sendFirebasePasswordReset(email) {
  if (!email || !email.includes('@')) {
    return { success: false, error: 'Please enter a valid email address.' };
  }
  const continueUrl = getFirebaseContinueBaseUrl() + '?view=login&passwordReset=1&email=' + encodeURIComponent(email);
  return await dispatchGoogleCloudEmail(email, continueUrl, 'PASSWORD_RESET');
}

/**
 * Confirm and apply a password reset using the action code from Firebase (sirib-2).
 *
 * @param {string} oobCode Action code from email reset link
 * @param {string} newPassword The user's new password
 * @returns {Promise<{success: boolean, email?: string, error?: string}>}
 */
async function confirmFirebasePasswordReset(oobCode, newPassword) {
  const resetApiKey = firebaseResetConfig.apiKey;
  try {
    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=' + resetApiKey, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        oobCode: oobCode,
        newPassword: newPassword
      })
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      return {
        success: true,
        email: data.email || ''
      };
    } else {
      const errMsg = (data && data.error && data.error.message) ? data.error.message : 'Invalid or expired reset link.';
      return {
        success: false,
        error: errMsg === 'EXPIRED_OOB_CODE' ? 'This password reset link has expired. Please request a new one.' : errMsg
      };
    }
  } catch (err) {
    return {
      success: false,
      error: err.message
    };
  }
}

/**
 * Dispatch student registration verification & tracking email using Primary Firebase (sirib-isko).
 *
 * @param {string} email Student email address
 * @param {string} studentId Student ID number
 * @param {string|null} password Student password for authenticating to Firebase
 * @returns {Promise<{success: boolean, message?: string, error?: string, url?: string}>}
 */
async function sendFirebaseStudentRegisterVerification(email, studentId, password = null) {
  const queryPart = '?view=studentPending&email=' + encodeURIComponent(email) + (studentId ? ('&student_id=' + encodeURIComponent(studentId)) : '');
  const verifyUrl = getFirebaseContinueBaseUrl() + queryPart;
  return await dispatchGoogleCloudEmail(email, verifyUrl, 'VERIFY_EMAIL', password);
}

/**
 * Dispatch an administrator account verification email using Primary Firebase (sirib-isko).
 *
 * @param {string} email Administrator email address
 * @param {string} token Verification token from backend
 * @param {string|null} password Admin password for authenticating to Firebase
 * @returns {Promise<{success: boolean, message?: string, error?: string, url?: string}>}
 */
async function sendFirebaseAdminVerification(email, token, password = null) {
  const queryPart = '?view=verifyAdmin&token=' + encodeURIComponent(token) + '&email=' + encodeURIComponent(email);
  const verifyUrl = getFirebaseContinueBaseUrl() + queryPart;
  return await dispatchGoogleCloudEmail(email, verifyUrl, 'VERIFY_EMAIL', password);
}

/**
 * Dispatch an evaluator account activation invitation email using Primary Firebase (sirib-isko).
 *
 * @param {string} email Evaluator email address
 * @param {string} token Secure activation token from backend
 * @param {string|null} password Optional password
 * @returns {Promise<{success: boolean, message?: string, error?: string, url?: string}>}
 */
async function sendFirebaseEvaluatorInvite(email, token, password = null) {
  const queryPart = '?view=activateEvaluator&token=' + encodeURIComponent(token) + '&email=' + encodeURIComponent(email);
  const activationUrl = getFirebaseContinueBaseUrl() + queryPart;
  return await dispatchGoogleCloudEmail(email, activationUrl, 'VERIFY_EMAIL', password);
}

/**
 * Dispatch an account approval notification email via Firebase Auth.
 *
 * @param {string} email User email address
 * @param {string} name User full name
 * @returns {Promise<{success: boolean, message?: string, error?: string, url?: string}>}
 */
async function sendFirebaseAccountApproved(email, name) {
  const queryPart = '?view=login&approved=1&email=' + encodeURIComponent(email);
  const loginUrl = getFirebaseContinueBaseUrl() + queryPart;
  return await dispatchGoogleCloudEmail(email, loginUrl, 'EMAIL_SIGNIN');
}

/**
 * Helper to resend Primary Firebase (sirib-isko) Email Address Verification.
 *
 * @param {string} email User email address
 * @param {string} continueUrl Target return URL
 * @param {string|null} password Optional password
 * @returns {Promise<{success: boolean, message?: string, error?: string}>}
 */
async function sendFirebaseResendVerification(email, continueUrl, password = null) {
  return await dispatchGoogleCloudEmail(email, continueUrl || getFirebaseContinueBaseUrl(), 'VERIFY_EMAIL', password);
}

// Automatically process Firebase Auth verification or password reset action codes if opened directly
if (typeof window !== 'undefined' && window.location) {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const mode = searchParams.get('mode');
    const oobCode = searchParams.get('oobCode');

    // 1. Email Verification Code (Processed via Primary Firebase: sirib-isko)
    if ((mode === 'verifyEmail' || mode === 'verifyAndChangeEmail') && oobCode && firebaseAuth) {
      firebaseAuth.applyActionCode(oobCode).then(() => {
        console.log('Firebase Email Address Verification applied successfully on sirib-isko.');
        if (typeof toast === 'function') {
          toast('Your email address has been verified successfully via Firebase!', 'success');
        }
      }).catch(err => {
        console.warn('Firebase applyActionCode:', err.message);
      });
    }

    // 2. Password Reset Code (Processed via Secondary Firebase: sirib-2)
    if (mode === 'resetPassword' && oobCode) {
      setTimeout(() => {
        if (typeof openResetPasswordModal === 'function') {
          openResetPasswordModal(oobCode);
        }
      }, 400);
    }
  } catch (e) {
    // Ignore URL parse errors
  }
}
