<?php
include 'cnn.php';
$resposta = ['msg' => false];

try {
    if (
        isset($_REQUEST['full_name']) &&
        isset($_REQUEST['email']) &&
        isset($_REQUEST['phone']) &&
        isset($_REQUEST['address']) &&
        isset($_REQUEST['password'])
    ) {
        $name = strval($_REQUEST['full_name']);
        $email = strval($_REQUEST['email']);
        $phone = strval($_REQUEST['phone']);
        $address = strval($_REQUEST['address']);
        $password = strval($_REQUEST['password']);

        // 🔐 Hash the password before storing it
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO clients (full_name, email, phone, address, password) 
                VALUES (:full_name, :email, :phone, :address, :password)";

        $stmt = $pdo->prepare($sql);
        $ok = $stmt->execute([
            ':full_name' => $name,
            ':email' => $email,
            ':phone' => $phone,
            ':address' => $address,
            ':password' => $hashedPassword  // Storing hashed password
        ]);

        if ($ok) {
            $resposta['msg'] = "Welcome!";
        } else {
            $resposta['msg'] = "Sorry, but you couldn't regist!";
        }
    } else {
        $resposta['msg'] = "Missing required fields.";
    }
} catch (Exception $erro) {
    $resposta['msg'] = "Error: " . $erro->getMessage();
} finally {
    echo json_encode($resposta);
}
