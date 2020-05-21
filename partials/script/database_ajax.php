<?php
include_once __DIR__ .'/../data/database.php';

header('Content-Type: application/json');
echo json_encode($database);
?>