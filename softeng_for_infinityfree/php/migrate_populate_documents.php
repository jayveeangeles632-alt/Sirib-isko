<?php
/**
 * Migration / Repair Script: Ensure all scholarships have their full required documents populated
 * Sirib i-Sko — PGIN Scholarship Management System
 */

header('Content-Type: text/html; charset=utf-8');

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/api.php';

$pdo = Database::getConnection();

if (!$pdo) {
    die("<h3>Database connection error: " . htmlspecialchars(Database::getConnectionError() ?? 'unavailable') . "</h3>");
}

echo "<h2>Sirib i-Sko — Scholarship Documents Migration &amp; Repair</h2>";
echo "<p>Checking and populating required documents for all scholarship programs...</p>";

ensureScholarshipsTablePopulated($pdo);

$schs = $pdo->query("SELECT id, code, name FROM scholarships ORDER BY id ASC")->fetchAll(PDO::FETCH_ASSOC);

echo "<table border='1' cellpadding='8' cellspacing='0' style='border-collapse:collapse;font-family:sans-serif;'>";
echo "<tr style='background:#f1f5f9;'><th>ID</th><th>Code</th><th>Name</th><th>Document Count</th><th>Status</th></tr>";

$allOk = true;

foreach ($schs as $s) {
    $count = (int)$pdo->query("SELECT COUNT(*) FROM scholarship_documents WHERE scholarship_id = " . (int)$s['id'])->fetchColumn();
    $status = ($count > 0) ? "<span style='color:green;font-weight:bold;'>✓ OK ($count docs)</span>" : "<span style='color:red;font-weight:bold;'>✗ Empty</span>";
    if ($count === 0) $allOk = false;
    echo "<tr><td>{$s['id']}</td><td>{$s['code']}</td><td>" . htmlspecialchars($s['name']) . "</td><td>$count</td><td>$status</td></tr>";
}

echo "</table>";

if ($allOk) {
    echo "<h3 style='color:green;'>✓ All scholarship programs have their required documents successfully populated!</h3>";
} else {
    echo "<h3 style='color:red;'>⚠ Some scholarships were empty. Re-run or verify database permissions.</h3>";
}
