<?php
/**
 * Safe Migration Runner for Student ID Approval System
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

header('Content-Type: text/plain; charset=utf-8');

echo "=== Sirib i-Sko: Student ID Approval Migration ===\n\n";

$pdo = Database::getConnection();
if (!$pdo) {
    echo "ERROR: Unable to connect to MySQL database: " . Database::getError() . "\n";
    exit(1);
}

// Columns to add if not present
$columnsToAdd = [
    'id_document_path'      => "VARCHAR(255) NULL AFTER status",
    'id_document_name'      => "VARCHAR(255) NULL AFTER id_document_path",
    'id_document_size'      => "VARCHAR(50) NULL AFTER id_document_name",
    'id_document_mime'      => "VARCHAR(100) NULL AFTER id_document_size",
    'rejection_reason'      => "TEXT NULL AFTER id_document_mime",
    'admin_review_notes'    => "TEXT NULL AFTER rejection_reason",
    'reviewed_by_admin_id'  => "INT NULL AFTER admin_review_notes",
    'reviewed_at'           => "DATETIME NULL AFTER reviewed_by_admin_id",
    'resubmitted_at'        => "DATETIME NULL AFTER reviewed_at"
];

$existingCols = $pdo->query("SHOW COLUMNS FROM users")->fetchAll(PDO::FETCH_COLUMN);

foreach ($columnsToAdd as $col => $definition) {
    if (!in_array($col, $existingCols)) {
        try {
            $pdo->exec("ALTER TABLE users ADD COLUMN $col $definition");
            echo "[+] Added column: $col\n";
        } catch (Exception $e) {
            echo "[-] Error adding $col: " . $e->getMessage() . "\n";
        }
    } else {
        echo "[✓] Column already exists: $col\n";
    }
}

// Ensure demo applicant is Approved
try {
    $pdo->exec("UPDATE users SET status = 'Approved' WHERE role IN ('applicant', 'student') AND status = 'Active'");
    echo "[✓] Updated active applicants to Approved status.\n";
} catch (Exception $e) {
    echo "[-] Update notice: " . $e->getMessage() . "\n";
}

// Ensure secure uploads directory exists
$uploadDir = __DIR__ . '/../uploads/secure_ids';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
    echo "[+] Created secure directory: uploads/secure_ids/\n";
}

$htaccess = $uploadDir . '/.htaccess';
if (!file_exists($htaccess)) {
    file_put_contents($htaccess, "Deny from all\n");
    echo "[+] Protected uploads/secure_ids/ with Deny from all .htaccess\n";
}

echo "\nMigration completed successfully!\n";
