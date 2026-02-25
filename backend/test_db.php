<?php
// backend/test_db.php - Test database connection
header('Content-Type: application/json');

$host = 'localhost';
$db   = 'geography_game';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
    $pdo = new PDO($dsn, $user, $pass);
    
    // Check if users table exists
    $stmt = $pdo->query("SHOW TABLES LIKE 'users'");
    $tableExists = $stmt->rowCount() > 0;
    
    if ($tableExists) {
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM users");
        $userCount = $stmt->fetch()['count'];
        echo json_encode([
            'success' => true,
            'message' => 'Database connected successfully',
            'table_exists' => true,
            'user_count' => $userCount
        ]);
    } else {
        echo json_encode([
            'success' => true,
            'message' => 'Database connected but users table does not exist',
            'table_exists' => false
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'error' => 'Database connection failed: ' . $e->getMessage()
    ]);
}
?>