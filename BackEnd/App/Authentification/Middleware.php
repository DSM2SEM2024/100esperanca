<?php 

namespace Pi\Visgo\Authentification;

use PDO;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Firebase\JWT\ExpiredException;
use Pi\Visgo\Authentification\Config;
use Pi\Visgo\Database\Connection;
use Pi\Visgo\Repository\UserRepository;

class Middleware {

    private PDO $connection;
    private UserRepository $userRepository;
    private string $jwtSecret;

    public function __construct($drive = 'sqlite')    {
        
        $this->connection = Connection::getInstance($drive);

        $this->userRepository = new UserRepository($this->connection);

        $this->jwtSecret = Config::JWT()['jwt_secret'];
    }

    public function tokenJwt(): ?object 
    {
        $token = $this->getTokenFromRequest();

        if (!$token) {
            throw new \Exception('Token não fornecido.', 401);
        }

        try {
            $decoded = JWT::decode($token, new Key($this->jwtSecret, 'HS256'));

            if (!$this->userExists($decoded->sub)) {
                throw new \Exception('Usuário not found.', 401);
            }

            return $decoded;

        } catch (ExpiredException $e) {
            throw new \Exception('Token expired.', 401);
        } catch (\UnexpectedValueException $e) {
            throw new \Exception('invalid Token.', 401);
        } catch (\Exception $e) {
            throw new \Exception('Error validating token', 500);
        }
    }

    private function getTokenFromRequest(): ?string
    {
        $headers = apache_request_headers();
        $authHeader = $headers['Authorization'] ?? $_SERVER['HTTP_AUTHORIZATION'] ?? null;

        if ($authHeader && preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            return $matches[1];
        }

        return $_COOKIE['token'] ?? null;
    }

    private function userExists($userId): bool
    {
        $stmt = $this->connection->prepare("SELECT id FROM user WHERE id = :id");
        $stmt->bindValue(':id', $userId, PDO::PARAM_INT);
        $stmt->execute();

        return (bool) $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
