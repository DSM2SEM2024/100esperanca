<?php

namespace Pi\Visgo\Authentification;

use PDO;
use \Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Pi\Visgo\Database\Connection;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\SignatureInvalidException;
use InvalidArgumentException;

class Auth {
    private PDO $connection;
    private string $secret;

    public function __construct($drive) 
    {
        $this->connection = Connection::getInstance($drive);

        $this->secret = $_ENV['JWT_SECRET'] ?? 'default_secret';

    }
    private function generateToken($userId, $username, $roles) 
    {
        if (empty($userId || $roles)) {
            throw new InvalidArgumentException('User ID and role is required', 500);
        }

        $payload = [
            'iat' => time(),
            'exp' => time() + 3600,
            'sub' => $userId,
            "username" => "$username",
            "roles" => $roles
        ]; 

        return JWT::encode($payload, $this->secret, 'HS256');
    }
    
    public function validateToken($jwt) 
    {

        try {
            $decoded = JWT::decode($jwt, new Key($this->secret, 'HS256'));
            return (array) $decoded;
        } catch (ExpiredException|SignatureInvalidException $e) {
            throw new Exception($e->getMessage(), 401);
        }
    }
    public function authenticate($email, $password) 
    {

        $query = "SELECT id, name, password FROM user WHERE email = :email";

        $stmt = $this->connection->prepare($query);

        $stmt->execute([':email' => $email]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        $stmt = null;


        if (!$user || !password_verify($password, $user['password'])) {
            throw new Exception('Invalid Credentials', 401);
        }

        $roleQuery = "SELECT r.name FROM role r JOIN user_role ur ON r.id = ur.id_role WHERE ur.id_user = :user_id";

        $stmt = $this->connection->prepare($roleQuery);

        $stmt->execute([':user_id' => $user['id']]);

        $roles = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
        return $this->generateToken($user['id'], $user['name'], $roles);

    }
    
    public function generateRefreshToken($userId) 
    {

        $refreshToken = bin2hex(random_bytes(64));

        $hashedToken = password_hash($refreshToken, PASSWORD_DEFAULT);

        $query = "INSERT INTO user_tokens (user_id, token, expires) VALUES (:user_id, :token, :expires)";

        $stmt = $this->connection->prepare($query);

        $stmt->execute([
            ':user_id' => $userId,
            ':token' => $hashedToken,
            ':expires' => time() + (7 * 24 * 60 * 60)
        ]);

        $stmt = null;

        return $refreshToken;
    }

    public function getUserIdFromEmail ($email)
    {

        $query = "SELECT id FROM user WHERE email = :email";

        $stmt = $this->connection->prepare($query);

        $stmt->execute([':email' => $email]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        return $user ? $user['id'] : null;
    }

    public function checkPermission($requiredRole) 
    {
        
        $headers = apache_request_headers();
    
        if (!isset($headers['Authorization'])) {
            throw new Exception('Token not found.', 401);
        }
    
        $token = str_replace('Bearer ', '', $headers['Authorization']);
    
        try {

            $decoded = JWT::decode($token, new Key($this->secret, 'HS256'));

            $userRoles = $decoded->roles ?? [];
    
            if (in_array('FULL_ADMIN', $userRoles)) {

                return $decoded;
            } 

            elseif (in_array('ADMIN', $userRoles)) {

                if ($requiredRole === 'admin' || $requiredRole === 'client') {
                    return $decoded;
                }
                throw new Exception('Permission denied.', 403);
            } 
            
            elseif (in_array('CLIENT', $userRoles)) {

                if ($requiredRole === 'client') {

                    return $decoded;
                }
                throw new Exception('Permission denied.', 403);
            } else {
                throw new Exception('Permission denied.', 403);
            }
        } catch (ExpiredException $e) {
            throw new Exception('Token expired', 401);
        } catch (SignatureInvalidException $e) {
            throw new Exception('Invalid token signature', 401);
        } catch (Exception $e) {
            throw new Exception('Error validating token', 500);
        }
    }
    
}