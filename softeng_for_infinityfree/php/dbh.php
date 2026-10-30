<?php
/**
 * Database Configuration (dbh.php)
 * Sirib i-Sko — PGIN Scholarship Management System
 * 
 * Edit your database credentials below:
 */

// For Local XAMPP MySQL
$server   = "localhost";
$username = "root";
$password = "";
$dbname   = "sirib_isko";

// For Online Hosting (e.g. InfinityFree, Hostinger, cPanel), uncomment and update:
// $server   = "sql313.infinityfree.com";
// $username = "epiz_xxxxxxxx";
// $password = "your_password";
// $dbname   = "epiz_xxxxxxxx_sirib_isko";

// Create MySQLi connection
$conn = mysqli_connect($server, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

// Set charset to utf8mb4
mysqli_set_charset($conn, "utf8mb4");
?>
