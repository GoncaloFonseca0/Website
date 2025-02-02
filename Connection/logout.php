<?php
session_start();
session_unset(); // Remove todas as variáveis de sessão
session_destroy(); // Destroi a sessão
header('Content-Type: application/json');
echo json_encode(["message" => "Logged out successfully"]);
exit;
?>