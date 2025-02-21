<?php

namespace Pi\Visgo\Controller;

use Pi\Visgo\Authentification\Auth;
use Pi\Visgo\Authentification\Middleware;
use Exception;

class AuthController {
    
    private Auth $auth;
    private Middleware $middleware;

    public function __construct() {
        $this->auth = new Auth();
        $this->middleware = new Middleware('sqlite');
    }
    public function login() {
        try {

            $data = $this->getRequestData();

            if (!isset($data['email']) || !isset($data['password'])) {
                throw new Exception("Email and password ", 400);
            }

            $email = $data['email'];
            $password = $data['password'];

            $token = $this->auth->authenticate($email, $password);
            $userId = $this->auth->getUserIdFromEmail($email);
            $refreshToken = $this->auth->generateRefreshToken($userId);

            header('Content-Type: application/json');
            echo json_encode([
                'access_token' => $token,
                'refresh_token' => $refreshToken
            ]);
        } catch (Exception $e) {
            http_response_code($e->getCode() ?: 401);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
    public function validateToken() {
        try {
            $decodedToken = $this->middleware->tokenJwt();
            echo json_encode(['user_data' => $decodedToken]);
        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function adminRoute() {
        $this->protectedRoute('admin');
    }
    
    public function fullAdminRoute() {
        $this->protectedRoute('full_admin');
    }
    
    public function clientRoute() {
        $this->protectedRoute('client');
    }

    private function getRequestData() {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!$data) {
            $data = $_GET;
        }

        return $data ?: [];
    }   

    private function protectedRoute($role) {
        try {
            $decodedToken = $this->middleware->tokenJwt();  
            $this->auth->checkPermission($role);
            
            echo json_encode([
                'message' => 'Acesso permitido',
                'user' => $decodedToken
            ]);
        } catch (Exception $e) {
            http_response_code(403);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

