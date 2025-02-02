<?php
session_start();
header('Content-Type: application/json');

$response = ["loggedIn" => false];

if (isset($_SESSION['user_id'])) {
    $response = [
        "loggedIn" => true,
        "user_id" => $_SESSION['user_id'],
        "user_name" => $_SESSION['user_name'],
        "email" => $_SESSION['email'],
        "phone" => isset($_SESSION['phone']) && !empty($_SESSION['phone']) ? $_SESSION['phone'] : "No phone registered",
        "address" => isset($_SESSION['address']) && !empty($_SESSION['address']) ? $_SESSION['address'] : "No address registered"
    ];
}

echo json_encode($response);
?>