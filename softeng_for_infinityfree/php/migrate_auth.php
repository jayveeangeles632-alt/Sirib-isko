<?php
/**
 * Migration Script: Admin Self-Registration and Evaluator Account Management
 * Sirib i-Sko — PGIN Scholarship Management System
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

$pdo = Database::getConnection();
if (!$pdo) {
    die("Database connection failed: " . Database::getError() . "\n");
}

echo "Running authentication migration on database `" . DB_NAME . "`...\n";

// 1. Modify users status column to allow 'Pending Activation', 'Pending Verification', etc.
try {
    $pdo->exec("ALTER TABLE `users` MODIFY COLUMN `status` VARCHAR(40) NOT NULL DEFAULT 'Active'");
    echo " [OK] users.status column modified to VARCHAR(40).\n";
} catch (Exception $e) {
    echo " [INFO] users.status: " . $e->getMessage() . "\n";
}

// 2. Add columns to users if they don't exist
$columnsToAdd = [
    'email_verified' => "TINYINT(1) NOT NULL DEFAULT 1",
    'evaluator_id'   => "VARCHAR(50) NULL",
    'token'          => "VARCHAR(100) NULL",
    'token_type'     => "VARCHAR(40) NULL",
    'token_expires'  => "DATETIME NULL"
];

$existingCols = $pdo->query("SHOW COLUMNS FROM `users`")->fetchAll(PDO::FETCH_COLUMN);

foreach ($columnsToAdd as $col => $definition) {
    if (!in_array($col, $existingCols)) {
        try {
            $pdo->exec("ALTER TABLE `users` ADD COLUMN `$col` $definition");
            echo " [OK] Added column `$col` to `users`.\n";
        } catch (Exception $e) {
            echo " [ERROR] Adding `$col`: " . $e->getMessage() . "\n";
        }
    } else {
        echo " [EXISTS] Column `$col` already in `users`.\n";
    }
}

// Ensure all existing active users have email_verified = 1
$pdo->exec("UPDATE `users` SET `email_verified` = 1 WHERE `email_verified` IS NULL OR `status` = 'Active'");
echo " [OK] Existing active users marked as email_verified = 1.\n";

// 3. Create admin_authorizations table
$pdo->exec("
CREATE TABLE IF NOT EXISTS `admin_authorizations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `created_by_admin_id` INT NOT NULL,
  `auth_code` VARCHAR(64) NOT NULL UNIQUE,
  `intended_email` VARCHAR(150) NULL,
  `is_used` TINYINT(1) NOT NULL DEFAULT 0,
  `used_by_user_id` INT NULL,
  `expires_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_code` (`auth_code`),
  INDEX `idx_used` (`is_used`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
");
echo " [OK] `admin_authorizations` table created/verified.\n";

// 4. Create email_logs table
$pdo->exec("
CREATE TABLE IF NOT EXISTS `email_logs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `recipient_email` VARCHAR(150) NOT NULL,
  `recipient_name` VARCHAR(150) NULL,
  `subject` VARCHAR(255) NOT NULL,
  `body_html` TEXT NOT NULL,
  `email_type` VARCHAR(50) NOT NULL,
  `token` VARCHAR(100) NULL,
  `status` VARCHAR(30) NOT NULL DEFAULT 'Sent',
  `error_message` TEXT NULL,
  `sent_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_recipient` (`recipient_email`),
  INDEX `idx_token` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
");
echo " [OK] `email_logs` table created/verified.\n";

echo "\nMigration completed successfully!\n";
