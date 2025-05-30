<?php
// Set CORS headers for all responses
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow all origins (or specify 'http://127.0.0.1:3000')
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $message = $input['message'] ?? '';
    echo json_encode(['message' => $message]);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
}