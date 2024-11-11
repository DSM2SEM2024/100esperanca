<?php
namespace Pi\Visgo;

require_once "../vendor/autoload.php";

use Pi\Visgo\Repository\OrderRepository;
use Pi\Visgo\Controller\OrderController;
use Pi\Visgo\Database\Connection;
use Pi\Visgo\Model\Order;

header('Content-Type: application/json');

$connection = Connection::getInstance('sqlite');
$orderRepository = new OrderRepository($connection);
$orderController = new OrderController($orderRepository);

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];


switch ($method) {
       case 'POST':
        if ($uri === '/order_art') {
            $data = json_decode(file_get_contents("php://input"), true);

            if (isset($data['order']) && isset($data['arts']) && is_array($data['arts'])) {
                $order = $data['order'];
                $arts = $data['arts'];

                $orderController->addArtToOrder($order, $arts);
            } else {
                echo json_encode([
                    "status" => false,
                    "message" => "Dados inválidos. Certifique-se de enviar um ID de pedido e um array de artes."
                ]);
            }
        }
        break;
    




case 'GET':

    if(preg_match('/\/order\/(\d+)/', $uri, $match)){
        $id = $match[1];
        $data = json_decode(file_get_contents('php://input'));
        $orderController->searchById($id);

    } elseif (preg_match('/\/order\/art/', $uri)) {
        $orderController->getAllOrderFromArt();
    } 
    
    break;

case 'PUT':
    
    /*  if(preg_match('/\/order\/(\d+)/', $uri, $match)){
            $id = $match[1];
            $data = json_decode(file_get_contents('php://input'));
            $orderController->update($id, $data);

        } */
            
        /*  if(preg_match('/\/order\/(\d+)/', $uri, $match)){
            $id = $match[1];
            $data = json_decode(file_get_contents('php://input'));
            $orderController->reOpenOrder($id);
        } */

        
        /*  if(preg_match('/\/order\/(\d+)/', $uri, $match)){
            $id = $match[1];
            $data = json_decode(file_get_contents('php://input'));
            $orderController->finishOrder($id);
        }  */
    
    break;

    case "DELETE":


            if (preg_match('/\/order\/(\d+)\/art\/(\d+)/', $uri, $matches)) {
                $orderId = (int)$matches[1];
                $artId = (int)$matches[2];
    
                $orderController->removeArtFromOrder($orderId, $artId);
            } 
            break;
    



default:
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
    break;
}