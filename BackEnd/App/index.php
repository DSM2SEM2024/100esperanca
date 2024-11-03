<?php
namespace Pi\Visgo;

require_once "../vendor/autoload.php";

use Pi\Visgo\Repository\OrderRepository;
use Pi\Visgo\Controller\OrderController;
use Pi\Visgo\Database\Connection;

header('Content-Type: application/json');

$orderRepository = new OrderRepository('sqlite');
$orderController = new OrderController($orderRepository);

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

switch ($uri) {
    case '/order':
        switch ($method) {
            case 'GET':
                // Check if the request is to list all orders or get a specific order by ID
                if (preg_match('/\/order\/(\d+)/', $uri, $match)) {
                    $id = $match[1];
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
                if (preg_match('/\/order\/(\d+)/', $uri, $match)) {
                    $id = $match[1];
                    $data = json_decode(file_get_contents('php://input'));
                    $orderController->update($id, $data);
                }
                break;

            case 'DELETE':
                if (preg_match('/\/order\/(\d+)/', $uri, $match)) {
                    $id = $match[1];
                    $orderController->delete($id);
                }
                break;

            default:
                echo json_encode(['message' => 'Method not supported for this endpoint.']);
                break;
        }
        break;

    default:
        echo json_encode(['message' => 'Endpoint not found.']);
        break;
}
