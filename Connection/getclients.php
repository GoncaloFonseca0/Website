<?php
include 'cnn.php';

$sql = 'select * from clients;';

try {

    $registos = $pdo->query($sql)->fetchAll();

} catch (PDOException $ERRO) {

    $registos = ['msg' => $erro->getMessage()];
}

echo json_encode($registos);



