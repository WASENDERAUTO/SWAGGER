<?php

require_once 'vendor/autoload.php'; // Sesuaikan dengan path ke vendor/autoload.php Anda

$swagger = \Swagger\scan('/path/to/your/routes'); // Ganti dengan path ke file-file Anda

header('Content-Type: application/json');
echo $swagger;
