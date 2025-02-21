<?php

namespace Pi\Visgo\Controller;

use Pi\Visgo\Authentification\Auth;
use Pi\Visgo\Authentification\Middleware;
use Pi\Visgo\Common\Responses\Response;


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
                Response::error($data,"Email or password incorrect", 400);
                return;
            }


            $email = $data['email'];

            $password = $data['password'];

            $token = $this->auth->authenticate($email, $password);

            $userId = $this->auth->getUserIdFromEmail($email);

            $refreshToken = $this->auth->generateRefreshToken($userId);

            header('Content-Type: application/json');

            response::success([
                'access_token' => $token,
                'refresh_token' => $refreshToken
            ], "Login realizado com sucesso!", 200);

        } catch (\Exception $e) {
            Response::error(null, $e->getMessage(), 500);
        }
    
    }
    public function validateToken() {

        $decodedToken = $this->middleware->tokenJwt();

        response::success($decodedToken, "Token validado com sucesso!", 200);

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
                
                Response::success($decodedToken, "Acesso permitido", 200);
                
            } catch (\Exception $e) {
                Response::error(null, $e->getMessage(), 403);
            }
        }
}

