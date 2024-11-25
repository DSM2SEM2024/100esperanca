<?php
namespace Pi\Visgo;
require_once "../vendor/autoload.php";

use Pi\Visgo\Controller\ProductController;
use Pi\Visgo\Model\User;
use Pi\Visgo\Model\Address;
use Pi\Visgo\Controller\UserController;
use Pi\Visgo\Repository\ProductRepository;
use Pi\Visgo\Repository\UserRepository;

header('Content-Type: application/json');

$productRepository = new ProductRepository('sqlite');
$productController = new ProductController($productRepository);

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

switch ($method) {
    case 'POST':
        $data = json_decode(file_get_contents('php://input'));

        if ($uri == '/products') {

            $productController->create($data);

        }


        break;

    case 'PUT':

        if (preg_match('/\/products\/(\d+)$/', $uri, $match)) {
            $idUser = $match[1];
            $data = json_decode(file_get_contents('php://input'));

            $productController->update($idUser, $data);
        }

        break;

    case 'GET':

        if (preg_match('/\/products\/(\d+)/', $uri, $match)) {

            $idProduct = $match[1];
            $productController->getById($idProduct);

        } else if ($uri === '/products') {

            $productController->getAll();

        }
        break;

    case 'DELETE':

        if (preg_match('/\/products\/(\d+)/', $uri, $match)) {
            $idUser = $match[1];
            $productController->discontinue($idUser);
        }

    default:
        break;
}