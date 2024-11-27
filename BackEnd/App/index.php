<?php
namespace Pi\Visgo;

use Pi\Visgo\Router\Router;
use Pi\Visgo\Router\Routes;

require_once "../vendor/autoload.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$routes = Routes::getRoutes();

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

Router::dispatcher($routes,$method,$uri);