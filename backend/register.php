<?php
// backend/register.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
$input = json_decode(file_get_contents('php://input'), true);
if (!isset($input['username'], $input['email'], $input['password'])) {
    echo json_encode(['success' => false, 'error' => 'Missing fields.']);
    exit;
}
$username = trim($input['username']);
$email = trim($input['email']);
$password = $input['password'];
if ($username === '' || $email === '' || $password === '') {
    echo json_encode(['success' => false, 'error' => 'All fields required.']);
    exit;
}
// Hash password
$hash = password_hash($password, PASSWORD_DEFAULT);
// DB connection
$host = 'localhost';
$db   = 'geography_game'; // Use your existing database
$user = 'root'; // Default XAMPP user
$pass = '';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    // Check if user/email exists
    $stmt = $pdo->prepare('SELECT id FROM users WHERE username = ? OR email = ?');
    $stmt->execute([$username, $email]);
    if ($stmt->fetch()) {
        echo json_encode(['success' => false, 'error' => 'Username or email already exists.']);
        exit;
    }
    // Insert user
    $stmt = $pdo->prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
    $stmt->execute([$username, $email, $hash]);
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    error_log("Registration error: " . $e->getMessage());
    echo json_encode(['success' => false, 'error' => 'Database error: ' . $e->getMessage()]);
}
