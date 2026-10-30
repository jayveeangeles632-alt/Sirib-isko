<?php
/**
 * Safe Migration Runner for JD and MD Scholarship Assignment System
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

header('Content-Type: text/plain; charset=utf-8');

echo "=== Sirib i-Sko: JD & MD Scholarship Assignment Migration ===\n\n";

$pdo = Database::getConnection();
if (!$pdo) {
    echo "ERROR: Unable to connect to MySQL database: " . Database::getError() . "\n";
    exit(1);
}

// Columns to add to users table
$columnsToAdd = [
    'assigned_scholarship_id'   => "INT(11) NULL DEFAULT NULL AFTER course",
    'assigned_scholarship_name' => "VARCHAR(200) NULL DEFAULT NULL AFTER assigned_scholarship_id"
];

$existingCols = $pdo->query("SHOW COLUMNS FROM users")->fetchAll(PDO::FETCH_COLUMN);

foreach ($columnsToAdd as $col => $definition) {
    if (!in_array($col, $existingCols)) {
        try {
            $pdo->exec("ALTER TABLE users ADD COLUMN $col $definition");
            echo "[+] Added column to users: $col\n";
        } catch (Exception $e) {
            echo "[-] Error adding $col: " . $e->getMessage() . "\n";
        }
    } else {
        echo "[OK] Column already exists on users: $col\n";
    }
}

// Check index on assigned_scholarship_id
try {
    $indices = $pdo->query("SHOW INDEX FROM users WHERE Key_name = 'idx_assigned_scholarship_id'")->fetchAll();
    if (empty($indices)) {
        $pdo->exec("ALTER TABLE users ADD INDEX idx_assigned_scholarship_id (assigned_scholarship_id)");
        echo "[+] Added index on assigned_scholarship_id\n";
    } else {
        echo "[OK] Index idx_assigned_scholarship_id already exists\n";
    }
} catch (Exception $e) {
    echo "[-] Index notice: " . $e->getMessage() . "\n";
}

echo "\nMigration completed successfully!\n";
