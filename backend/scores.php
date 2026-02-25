

<?php
// Backend for saving and retrieving best scores per person using MySQL
header('Content-Type: application/json');

$host = 'localhost';
$db   = 'geography_game'; // Use your existing database
$user = 'root';           // Default XAMPP user
$pass = '';               // Default XAMPP password is empty
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
try {
    $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Database connection failed']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!isset($data['name']) || !isset($data['score'])) {
        echo json_encode(['success' => false, 'error' => 'Missing name or score']);
        exit;
    }
    // Check if user already exists
    $stmt = $pdo->prepare('SELECT score FROM scores WHERE name = ?');
    $stmt->execute([$data['name']]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($row) {
        // Update only if new score is higher
        if ($data['score'] > $row['score']) {
            $update = $pdo->prepare('UPDATE scores SET score = ? WHERE name = ?');
            $update->execute([$data['score'], $data['name']]);
        }
    } else {
        // Insert new user
        $insert = $pdo->prepare('INSERT INTO scores (name, score) VALUES (?, ?)');
        $insert->execute([$data['name'], $data['score']]);
    }
    echo json_encode(['success' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get all best scores
    $stmt = $pdo->query('SELECT name, score FROM scores');
    $scores = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['success' => true, 'scores' => $scores]);
    exit;
}

// Invalid request
http_response_code(405);
echo json_encode(['success' => false, 'error' => 'Method not allowed']);
