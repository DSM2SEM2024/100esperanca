<?php

require __DIR__ . '/../../vendor/autoload.php';

use Pi\Visgo\Authentification\Auth;
use Pi\Visgo\Authentification\Middleware;

$auth = new Auth('sqlite');
$middleware = new Middleware('sqlite');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === '/login') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['email']) || !isset($data['password'])) {
        http_response_code(400);
        echo json_encode(['message' => ' Need Email and passowrd.']);
        exit;
    }

    try {
        $token = $auth->authenticate($data['email'], $data['password']);
        echo json_encode(['token' => $token]);
    } catch (\Exception $e) {
        http_response_code($e->getCode());
        echo json_encode(['message' => $e->getMessage()]);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/check-auth') {
    try {
        $decoded = $middleware->tokenJwt();
        echo json_encode(['message' => 'Token válido.', 'user' => $decoded]);
    } catch (\Exception $e) {
        http_response_code($e->getCode());
        echo json_encode(['message' => $e->getMessage()]);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === '/refresh-token') {
    try {
        $newToken = $auth->refreshToken();
        echo json_encode(['token' => $newToken]);
    } catch (\Exception $e) {
        http_response_code($e->getCode());
        echo json_encode(['message' => $e->getMessage()]);
    }
}
