<?php
namespace Pi\Visgo;
require_once "../vendor/autoload.php";

use Pi\Visgo\Model\Order;
use Pi\Visgo\Repository\OrderRepository;


header('Content-Type: application/json');

$orderRepository = new OrderRepository('sqlite');

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

switch ($method) {
    case 'POST':

        if ($uri === '/order') {
            $data = json_decode(file_get_contents('php://input'));

            $order = new Order();
            $order->setDate_Time_Order($data->date_time_order);
            $order->setDescription($data->description);

            $orderRepository->createOrder($order);
            echo json_encode(['message' => 'Order created successfully']);
        }
        break;

    case 'PUT':

        if (preg_match('/\/order\/(\d+)$/', $uri, $match)) {
            $orderId = $match[1];
            $data = json_decode(file_get_contents('php://input'));

            $order = new Order();
            $order->setDate_Time_Order($data->date_time_order);
            $order->setDescription($data->description);

            $orderRepository->updateOrder($orderId, $order);
            echo json_encode(['message' => 'Order updated successfully']);
        }
        break;

    case 'GET':

        if (preg_match('/\/order\/(\d+)$/', $uri, $match)) {
            $orderId = $match[1];
            $order = $orderRepository->getOrderById($orderId);
            echo json_encode($order);
        } 

        elseif ($uri === '/order') {
            $orders = $orderRepository->getAllOrder();
            echo json_encode($orders);
        }
        break;

    case 'DELETE':

        if (preg_match('/\/order\/(\d+)$/', $uri, $match)) {
            $orderId = $match[1];
            $orderRepository->deleteOrderById($orderId);
            echo json_encode(['message' => 'Order deleted successfully']);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
