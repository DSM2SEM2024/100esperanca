<?php
namespace Pi\Visgo\Router;

use Pi\Visgo\Common\Responses\Response;
use Pi\Visgo\Controller\AuthController;

class Router
{
    public static function dispatcher(array $arrayRotas, $method, $uri)
    {
        foreach ($arrayRotas[$method] as $route => $routeConfig) {
            $controllerClass = $routeConfig[0];
            $controllerMethod = $routeConfig[1];
            $requiredRole = $routeConfig[2] ?? null;

            $pattern = preg_replace('/\{([a-zA-Z0-9_]+)\}/', '([a-zA-Z0-9_]+)', $route);
            $pattern = str_replace('/', '\/', $pattern);
            $pattern = '/^' . $pattern . '$/';

            if (preg_match($pattern, $uri, $recurso)) {
                array_shift($recurso); // remove o match completo da regex
                $controllerInstance = new $controllerClass();

                if ($requiredRole) {
                    try {
                        $authController = new AuthController();
                        $authController->ProtectedRoute($requiredRole);
                    } catch (\Exception $e) {
                        return Response::error(null, $e->getMessage(), 403);
                    }
                }

                $data = json_decode(file_get_contents('php://input'));
                $reflection = new \ReflectionMethod($controllerInstance, $controllerMethod);
                $parameters = $reflection->getParameters();

                $args = [];

                foreach ($parameters as $param) {
                    if ($param->getName() === 'data') {
                        $args[] = $data;
                    } elseif ($param->getName() === 'files' && !empty($_FILES)) {
                        $args[] = $_FILES;
                    } elseif (!empty($recurso)) {
                        $args[] = array_shift($recurso);
                    } else {
                        $args[] = null;
                    }
                }

                return call_user_func_array([$controllerInstance, $controllerMethod], $args);
            }
        }

        Response::error(false, "Rota: $uri não encontrada", 404);
    }
}