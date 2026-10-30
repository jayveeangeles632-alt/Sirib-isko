<?php
/**
 * Configuration File
 * Sirib i-Sko — PGIN Scholarship Management System
 * 
 * Automatically synchronizes with dbh.php without requiring any changes to dbh.php.
 */

// Error reporting settings (suppress inline HTML errors so JSON API responses are never corrupted)
@ini_set('display_errors', '0');
@ini_set('display_startup_errors', '0');
@ini_set('log_errors', '1');
@error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);

// Load .env file if present
$envFile = dirname(__DIR__) . '/.env';
if (file_exists($envFile)) {
    $lines = @file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if (is_array($lines)) {
        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '#')) {
                continue;
            }
            $parts = explode('=', $line, 2);
            if (count($parts) === 2) {
                $key = trim($parts[0]);
                $val = trim(trim($parts[1]), "\"'");
                if (!getenv($key)) {
                    putenv("$key=$val");
                    $_ENV[$key] = $val;
                }
            }
        }
    }
}

// -----------------------------------------------------------------------------
// Auto-detect & synchronize database credentials from dbh.php
// (Reads dbh.php directly so you do NOT need to edit config.php or touch dbh.php)
// -----------------------------------------------------------------------------
$dbhServer   = null;
$dbhUsername = null;
$dbhPassword = null;
$dbhDbname   = null;

$dbhCandidatePaths = [
    dirname(__DIR__) . '/dbh.php',
    __DIR__ . '/dbh.php'
];

foreach ($dbhCandidatePaths as $path) {
    if (file_exists($path)) {
        $content = @file_get_contents($path);
        if ($content !== false) {
            $lines = explode("\n", $content);
            foreach ($lines as $line) {
                $trimmed = trim($line);
                if (empty($trimmed) || str_starts_with($trimmed, '//') || str_starts_with($trimmed, '#') || str_starts_with($trimmed, '/*') || str_starts_with($trimmed, '*')) {
                    continue;
                }
                if (preg_match('/^\$(server|servername|host|db_host|username|user|db_user|password|pass|db_pass|dbname|database|db_name)\s*=\s*([\'"])(.*?)\2/i', $trimmed, $m)) {
                    $key = strtolower($m[1]);
                    $val = $m[3];
                    if (in_array($key, ['server', 'servername', 'host', 'db_host']))     $dbhServer   = $val;
                    if (in_array($key, ['username', 'user', 'db_user']))                 $dbhUsername = $val;
                    if (in_array($key, ['password', 'pass', 'db_pass']))                 $dbhPassword = $val;
                    if (in_array($key, ['dbname', 'database', 'db_name']))               $dbhDbname   = $val;
                }
            }
        }
        break;
    }
}

// Credentials priority: dbh.php > environment variables > default localhost
$finalHost = ($dbhServer !== null && $dbhServer !== '') ? $dbhServer : (getenv('DB_HOST') ?: 'localhost');
$finalDb   = ($dbhDbname !== null && $dbhDbname !== '') ? $dbhDbname : (getenv('DB_NAME') ?: 'sirib_isko');
$finalUser = ($dbhUsername !== null && $dbhUsername !== '') ? $dbhUsername : (getenv('DB_USER') ?: 'root');
$finalPass = ($dbhPassword !== null) ? $dbhPassword : (getenv('DB_PASS') !== false ? getenv('DB_PASS') : '');

if (!defined('DB_HOST')) define('DB_HOST', $finalHost);
if (!defined('DB_NAME')) define('DB_NAME', $finalDb);
if (!defined('DB_USER')) define('DB_USER', $finalUser);
if (!defined('DB_PASS')) define('DB_PASS', $finalPass);
if (!defined('DB_CHARSET')) define('DB_CHARSET', 'utf8mb4');

// Application settings
if (!defined('APP_NAME')) define('APP_NAME', 'Sirib i-Sko');
if (!defined('APP_DESC')) define('APP_DESC', 'PGIN Scholarship Management System');
if (!defined('APP_TIMEZONE')) define('APP_TIMEZONE', 'Asia/Manila');
if (!defined('SYSTEM_EMAIL')) define('SYSTEM_EMAIL', getenv('SYSTEM_EMAIL') ?: (getenv('SMTP_FROM') ?: 'scholarship@ilocosnorte.gov.ph'));
if (!defined('SYSTEM_EMAIL_NAME')) define('SYSTEM_EMAIL_NAME', getenv('SYSTEM_EMAIL_NAME') ?: (getenv('SMTP_FROM_NAME') ?: 'Sirib i-Sko — PGIN Scholarship Division'));

// Determine base URL dynamically or from env
$defaultBaseUrl = 'http://localhost/softeng';
if (isset($_SERVER['HTTP_HOST'])) {
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
    $scriptDir = dirname($_SERVER['SCRIPT_NAME'] ?? '');
    $basePath = preg_replace('#/php$#', '', $scriptDir);
    $defaultBaseUrl = rtrim($protocol . $_SERVER['HTTP_HOST'] . $basePath, '/');
}
if (!defined('APP_BASE_URL')) define('APP_BASE_URL', getenv('APP_BASE_URL') ?: $defaultBaseUrl);

// SMTP Email settings
if (!defined('SMTP_HOST')) define('SMTP_HOST', getenv('SMTP_HOST') ?: 'smtp.gmail.com');
if (!defined('SMTP_PORT')) define('SMTP_PORT', (int)(getenv('SMTP_PORT') ?: 587));
if (!defined('SMTP_USER')) define('SMTP_USER', getenv('SMTP_USER') ?: '');
if (!defined('SMTP_PASS')) define('SMTP_PASS', getenv('SMTP_PASS') ?: '');
if (!defined('SMTP_SECURE')) define('SMTP_SECURE', getenv('SMTP_SECURE') ?: 'tls');
if (!defined('SMTP_FROM')) define('SMTP_FROM', SYSTEM_EMAIL);
if (!defined('SMTP_FROM_NAME')) define('SMTP_FROM_NAME', SYSTEM_EMAIL_NAME);

// Firebase Cloud Delivery Configuration (for reliable delivery when SMTP ports are restricted on free hosting)
if (!defined('FIREBASE_API_KEY')) define('FIREBASE_API_KEY', getenv('FIREBASE_API_KEY') ?: 'AIzaSyDKnL57z1K595swoM3t1csoLZtsiWJB2Aw');
if (!defined('FIREBASE_PROJECT_ID')) define('FIREBASE_PROJECT_ID', getenv('FIREBASE_PROJECT_ID') ?: 'sirib-isko');

// Security & Token lifespans
if (!defined('ADMIN_TOKEN_HOURS')) define('ADMIN_TOKEN_HOURS', 24);
if (!defined('EVALUATOR_TOKEN_HOURS')) define('EVALUATOR_TOKEN_HOURS', 48);
if (!defined('FIRST_ADMIN_KEY')) define('FIRST_ADMIN_KEY', getenv('FIRST_ADMIN_KEY') ?: 'SiribAdmin2026!');

// Document upload limits & configuration (Unified across frontend and backend)
if (!defined('MAX_UPLOAD_SIZE_BYTES')) define('MAX_UPLOAD_SIZE_BYTES', (int)(getenv('MAX_UPLOAD_SIZE_BYTES') ?: (5 * 1024 * 1024))); // 5 MB
if (!defined('MAX_UPLOAD_SIZE_LABEL')) define('MAX_UPLOAD_SIZE_LABEL', getenv('MAX_UPLOAD_SIZE_LABEL') ?: '5 MB');

// Set default timezone
@date_default_timezone_set(APP_TIMEZONE);

// Start PHP session safely if not already active and headers not sent
if (session_status() === PHP_SESSION_NONE && !headers_sent()) {
    @session_start();
}
