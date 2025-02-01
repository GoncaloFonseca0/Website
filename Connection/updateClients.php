<?php
header('Content-Type: application/json'); // Ensure JSON response

include 'cnn.php'; // Ensure database connection

$response = ["success" => false, "message" => "Unknown error"];

try {
    if (!isset($_POST['id_client'])) {
        $response["message"] = "Client ID not provided.";
        echo json_encode($response);
        exit;
    }

    $id_client = $_POST['id_client'];
    $name = $_POST['full_name'] ?? null;
    $email = $_POST['email'] ?? null;
    $phone = $_POST['phone'] ?? null;
    $address = $_POST['address'] ?? null;
    $password = $_POST['password'] ?? null; // Get password if provided

    // Prepare the SQL update query dynamically
    $updateFields = [];
    $params = [
        ':id_client' => $id_client
    ];

    if (!empty($name)) {
        $updateFields[] = "full_name = :full_name";
        $params[':full_name'] = $name;
    }
    if (!empty($email)) {
        $updateFields[] = "email = :email";
        $params[':email'] = $email;
    }
    if (!empty($phone)) {
        $updateFields[] = "phone = :phone";
        $params[':phone'] = $phone;
    }
    if (!empty($address)) {
        $updateFields[] = "address = :address";
        $params[':address'] = $address;
    }

    // If a new password is provided, hash and update it
    if (!empty($password)) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $updateFields[] = "password = :password";
        $params[':password'] = $hashedPassword;
    }

    // If no fields to update, return an error
    if (empty($updateFields)) {
        $response["message"] = "No valid fields provided for update.";
        echo json_encode($response);
        exit;
    }

    // Final SQL statement
    $sql = "UPDATE clients SET " . implode(', ', $updateFields) . " WHERE id_client = :id_client";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    if ($stmt->rowCount() > 0) {
        $response["success"] = true;
        $response["message"] = "Client updated successfully!";
    } else {
        $response["message"] = "No changes made or client not found.";
    }
} catch (PDOException $e) {
    $response["message"] = "Database error: " . $e->getMessage();
}

echo json_encode($response);
exit;
