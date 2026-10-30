<?php
/**
 * Database Connection & Query Helper (PDO & MySQLi)
 * Sirib i-Sko — PGIN Scholarship Management System
 * 
 * Works seamlessly with dbh.php and PDO.
 */

require_once __DIR__ . '/config.php';

class Database {
    private static ?PDO $pdo = null;
    private static ?mysqli $mysqli = null;
    private static ?string $connectionError = null;

    /**
     * Get singleton PDO connection instance.
     * Gracefully captures connection errors without crashing if MySQL is stopped.
     */
    public static function getConnection(): ?PDO {
        if (self::$pdo === null) {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];

            try {
                self::$pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
            } catch (Throwable $e) {
                self::$connectionError = $e->getMessage();
                return null;
            }
        }
        return self::$pdo;
    }

    /**
     * Get singleton MySQLi connection (compatible with dbh.php)
     */
    public static function getMysqliConnection(): ?mysqli {
        if (self::$mysqli === null) {
            try {
                if (function_exists('mysqli_report')) {
                    @mysqli_report(MYSQLI_REPORT_OFF);
                }
                $conn = @mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
                if ($conn) {
                    @mysqli_set_charset($conn, DB_CHARSET);
                    self::$mysqli = $conn;
                } else {
                    self::$connectionError = mysqli_connect_error();
                }
            } catch (Throwable $t) {
                self::$connectionError = $t->getMessage();
            }
        }
        return self::$mysqli;
    }

    /**
     * Get the last connection error message if any.
     */
    public static function getError(): ?string {
        return self::$connectionError;
    }

    /**
     * Check if database connection is active and connected.
     */
    public static function isConnected(): bool {
        return self::getConnection() !== null;
    }
}

// Ensure global $conn exists for any script expecting it
if (!isset($conn) || !$conn) {
    $conn = Database::getMysqliConnection();
}
