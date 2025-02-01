<?php
session_start();
header('Content-Type: application/json');

include 'cnn.php';

$response = ["success" => false, "message" => "Invalid credentials."];

try {
    if (!isset($_POST['email']) || !isset($_POST['password'])) {
        $response["message"] = "Email and password are required.";
        echo json_encode($response);
        exit;
    }

    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT id_client, full_name, password FROM clients WHERE email = :email");
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id_client'];
        $_SESSION['user_name'] = $user['full_name'];
        $response = ["success" => true, "message" => "Login successful."];
    } else {
        $response["message"] = "Invalid email or password.";
    }
} catch (Exception $e) {
    $response["message"] = "Server error: " . $e->getMessage();
}

echo json_encode($response);
exit;
?>