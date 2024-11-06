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
        if ($id) {
            $orderController->searchById($id); 
        } else {
            $orderController->getAll();
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'));
        $orderController->create($data);
        break;

    case 'PUT':
        if ($id) {
            $data = json_decode(file_get_contents('php://input'));
            $orderController->update($id, $data);
        }
        break;

    case 'DELETE':
        if ($id) {
            $orderController->delete($id);
        }
        break;

    default:
        echo json_encode(['message' => 'Method not supported for this endpoint.']);
        break;
}
