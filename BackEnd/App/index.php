<?php
namespace Pi\Visgo;
require_once "../vendor/autoload.php";

use Pi\Visgo\Repository\PromotionRepository;
use Pi\Visgo\Repository\RoleRepository;
use Pi\Visgo\Controller\PromotionController;
use Pi\Visgo\Database\Connection;

header('Content-Type: application/json');

$roleRepository = new RoleRepository('sqlite');
$promotionRepository = new PromotionRepository('sqlite');
$promotionController = new PromotionController($promotionRepository);

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

switch ($uri) {
    case '/role':

        if ($method === 'GET') {
            $roleRepository->getAllRoles();
        }

        break;

    case '/promotion':

        switch($method){
            case 'GET':
                if ($method === 'GET') {
                    $promotionController->getAllPromotion();
                }

                if (preg_match('/\/promotion\/(\d+)/', $method, $match)){
                    $id = $match[1];
                    $data = json_decode(file_get_contents('php://input'));
                    $promotionController->searchById($id);
                    break;
                }
            break;

            case 'POST':
                    $data = json_decode(file_get_contents('php://input'));
                    $promotionController->create($data);
            break;

            case 'PUT':
                if(preg_match('/\/promotion\/(\d+)/', $uri, $match)){
                    $id = $match[1];
                    $data = json_decode(file_get_contents('php://input'));
                    $promotionController->update($id, $data);
                }
            break;

            case 'DELETE':
                if(preg_match('/\/promotion\/(\d+)/', $uri, $match)){
                $id = $match[1];
                $promotionController->delete($id);
            }
            break;
        }

}