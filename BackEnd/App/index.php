<?php
namespace Pi\Visgo;

require_once "../vendor/autoload.php";

use Pi\Visgo\Repository\OrderRepository;
use Pi\Visgo\Controller\OrderController;
use Pi\Visgo\Database\Connection;

header('Content-Type: application/json');

$connection = Connection::getInstance('sqlite');
$orderRepository = new OrderRepository($connection);
$orderController = new OrderController($orderRepository);

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

switch ($method) {
    case 'GET':
 
    break;

    case 'POST':


    break;

    case 'PUT':
        
    break;

    case 'DELETE':

    break;
}

