<?php

namespace Pi\Visgo\Authentification;

use PDO;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Pi\Visgo\Database\Connection;
use Firebase\JWT\ExpiredException;
use Pi\Visgo\Authentification\Config;
use Pi\Visgo\Repository\UserRepository;
use Firebase\JWT\SignatureInvalidException;

class Auth {

    private PDO $connection;

    private string $table = 'user_role';

    private UserRepository $userRepository;

    private string $jwtSecret;

    public function __construct($drive = 'sqlite')
    {
        $this->connection = Connection::getInstance($drive);
        
        $this->userRepository = new UserRepository($this->connection);

        $this->jwtSecret = Config::JWT()['jwt_secret'];
    }

    private function generateToken($user)
    {   
        $payload = [
            'iss' => 'http://localhost:8000',
            'iat' => time(),                        // hora da emissão
            'exp' => time() + 3600,  // ajustar dps
            'sub' => $user ['id'],
            'aud' => $_SERVER['REMOTE_ADDR'], // IP do usuario (talvez remova esses dois ultimos ou adicionar uma logica para nao prejudicar usuarios)
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] // dispositivo do usuario
        ];

        try{
            return JWT::encode($payload, $this->jwtSecret, 'HS256');
        } catch (\Exception $e) {
            throw new \Exception('Token not generated');
        }
    }
    function validateToken($jwt){

        try {
            $decoded = JWT::decode($jwt, new Key($this->jwtSecret, 'HS256'));
            return (array)$decoded;

        } catch (ExpiredException $e) {
            throw new \Exception('Token expired', 401);
        } catch (SignatureInvalidException $e) {
            throw new \Exception('Signature invalid', 401);
        } catch (\Exception $e){
            throw new \Exception('Invalid token or Unknown error', 401);
        }
    }

    public function authenticate($email, $password)
    {
        $maxAttempts = 5; 
        $lockoutTime = 300; // Tempo de bloqueio 5 min (mudar depois talvez)
    
        // Verifica se o usuário já atingiu o limite de tentativas falhas
       $stmt = $this->connection->prepare("SELECT id, password, attempts, last_attempt FROM user WHERE email = :email");


        $stmt->execute([':email' => $email]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
        if ($user) {
            if ($user['attempts'] >= $maxAttempts) {
                $remainingTime = ($user['last_attempt'] + $lockoutTime) - time();
                if ($remainingTime > 0) {
                    throw new \Exception('Too Many Attempts - Try Again in ' . $remainingTime . ' seconds.', 429);
                }
                    // Reseta tentativas após tempo de bloqueio
                    $stmt = $this->connection->prepare("UPDATE user SET attempts = 0 WHERE email = :email");
                    $stmt->execute([':email' => $email]);
            }
        }
    
        if (!$user || !password_verify($password, $user['password'])) {
            // Atualiza tentativas de login no banco
            $stmt = $this->connection->prepare("UPDATE user SET attempts = attempts + 1, last_attempt = :time WHERE email = :email");
            $stmt->execute([':time' => time(), ':email' => $email]);
    
            throw new \Exception('Invalid Credentials', 401);
        }
    
        // Login bem-sucedido, reseta tentativas
        $stmt = $this->connection->prepare("UPDATE user SET attempts = 0 WHERE email = :email");
        $stmt->execute([':email' => $email]);
    
        return $this->generateToken(['id' => $user['id']]);
    }
    
   public function generateRefreshToken ($userId){

        $refreshToken = bin2hex(random_bytes(64));
        $hashedToken = password_hash($refreshToken, PASSWORD_DEFAULT);

        $stmt = $this->connection->prepare("INSERT INTO user_tokens (user_id, token, expires, ip_address, user_agent) VALUES (:user_id, :token, :expires, :ip_address, :user_agent)");

        $stmt->execute([
            ':user_id' => $userId,
            ':token' => $hashedToken,
            ':expires' => time() + (7 * 24 * 60 * 60),
            ':ip_address' => $_SERVER['REMOTE_ADDR'],
            ':user_agent' => $_SERVER['HTTP_USER_AGENT']
        ]);

        setcookie('refresh_token', $refreshToken, [
            'expires' => time() + (7 * 24 * 60 * 60),
            'path' => '/',
            'secure' => false,     
            'httponly' => true,    
            'samesite' => 'Strict'
        ]);

        return $refreshToken;
    }

   public function refreshToken() {

    $refreshToken = $_COOKIE['refresh_token'] ?? null;
        if (!$refreshToken) {
            throw new \Exception('Refresh token not provided', 400);
        }

    $stmt = $this->connection->prepare("SELECT user_id, token, ip_address, user_agent FROM user_tokens WHERE token = :token AND expires > :time");
    $stmt->execute([
    ':token' => $refreshToken,
    ':time' => time()
    ]);

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            if (password_verify($refreshToken, $row['token'])) {
                if ($row['ip_address'] !== $_SERVER['REMOTE_ADDR'] || $row['user_agent'] !== $_SERVER['HTTP_USER_AGENT']) {
                    file_put_contents(__DIR__.'/logs/refresh_token_attempts.log',
                        date('Y-m-d H:i:s')." - Unauthorized refresh token usage attempt by user {$row['user_id']}\n",
                        FILE_APPEND);

                    throw new \Exception('Invalid refresh token - Unrecognized device.', 403);
                }
                return $this->generateToken(['id' => $row['user_id']]);
            }
        }

        throw new \Exception('Refresh token is expired or invalid', 401);
    }
}
