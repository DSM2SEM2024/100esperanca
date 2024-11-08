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
        if(preg_match('/\/order\/(\d+)/', $uri, $match)){
            $id = $match[1];
            $data = json_decode(file_get_contents('php://input'));
             $orderController->searchById($id);
        }
            if ($uri === '/order_art'){
                $orderController->getAllOrderArt();
        }
        
    break;

    case 'POST':
        if($uri === '/order_art'){
            $data = json_decode(file_get_contents('php://input'));
            $orderController->addArtToOrder($orderId,$arts);
        }

    break;

    case 'PUT':
        // if(preg_match('/\/order\/(\d+)/', $uri, $match)){
        //     $id = $match[1];
        //     $data = json_decode(file_get_contents('php://input'));
        //     $orderController->finishOrder($id);
        // }
        
        if(preg_match('/\/order\/(\d+)/', $uri, $match)){
            $id = $match[1];
            $data = json_decode(file_get_contents('php://input'));
            $orderController->reopenOrder($id);
        }

        
        
    break;

    case 'DELETE':

        $data = json_decode(file_get_contents('php://input'));
    $orderController->removeArtFromOrder($orderId, $artId);

       
        
        break;
}

