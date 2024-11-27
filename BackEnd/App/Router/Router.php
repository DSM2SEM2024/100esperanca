<?php
namespace Pi\Visgo\Router;

use Pi\Visgo\Common\Responses\Response;

class Router
{
    public static function dispatcher(array $arrayRotas, $method, $uri)
    {
        foreach ($arrayRotas[$method] as $route => $controller) {
            $pattern = preg_replace('/\{([a-zA-Z0-9_]+)\}/', '([a-zA-Z0-9_]+)', $route);
            $pattern = str_replace('/', '\/', $pattern);
            $pattern = '/^' . $pattern . '$/';

            if (preg_match($pattern, $uri, $recurso)) {
                array_shift($recurso);
                $controllerInstance = new $controller[0]();
                $data = json_decode(file_get_contents('php://input'));
                $reflection = new \ReflectionMethod($controllerInstance, $controller[1]);
                $parameters = $reflection->getParameters();

                $args = [];
                foreach ($parameters as $param) {
                    if ($param->getName() == 'data') {
                        $args[] = $data;
                    } elseif (!empty($recurso)) {
                        $args[] = array_shift($recurso);
                    } else {
                        $args[] = null;
                    }
                }

                return call_user_func_array([$controllerInstance, $controller[1]], $args);
            }
        }

        Response::error(false, "Rota: $uri não encontrada", 404);
    }


}
