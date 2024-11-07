<?php
namespace Pi\Visgo;
require_once "../vendor/autoload.php";

use Pi\Visgo\Model\User;
use Pi\Visgo\Model\Address;
use Pi\Visgo\Controller\UserController;
use Pi\Visgo\Repository\UserRepository;

header('Content-Type: application/json');

$userRepository = new UserRepository('sqlite');
$userController = new UserController($userRepository);

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

switch ($method) {
    case 'POST':

        $data = json_decode(file_get_contents('php://input'));
        
        $userModel = new User();
        $userModel->setName($data->name);
        $userModel->setEmail($data->email);
        $userModel->setPassword($data->password);
        $userModel->setRole($data->role);
        
        $addressModel = new Address();
        $addressModel->setState($data->address->state);
        $addressModel->setCity($data->address->city);
        $addressModel->setNeighborhood($data->address->neighborhood);
        $addressModel->setNumber($data->address->number);
        $addressModel->setStreet($data->address->street);
        $addressModel->setCep($data->address->cep);
        
        $userModel->setAddress($addressModel);
        
        $result = $userRepository->createUser($userModel);
        
        if (!$result) {
            echo 'ocorreu algum erro, usuário não foi criado!';
        } else {
            echo 'Usuário criado com sucesso!';
        }
    break;

    case 'PUT':
        
        if(preg_match('/\/user\/(\d+)$/', $uri, $match)){
            $idUser = $match[1];
            $data = json_decode(file_get_contents('php://input'));
            
            $userModel = new User();
            $userModel->setId($idUser);
            
            $addressModel = new Address();
            $addressModel->setState($data->address->state);
            $addressModel->setCity($data->address->city);
            $addressModel->setNeighborhood($data->address->neighborhood);
            $addressModel->setNumber($data->address->number);
            $addressModel->setStreet($data->address->street);
            $addressModel->setCep($data->address->cep);
            $userModel->setAddress($addressModel);
            
            $userRepository->updateUserAddress($userModel);
        } else if(preg_match(pattern: '/\/user\/(\d+)\/name$/', $uri, $match)){
            $idUser = $match[1];
            $data = json_decode(file_get_contents('php://input'));
            
            $userModel = new User();
            $userModel->setId($idUser);
            $userModel->setName($data->name);
            
            $userRepository->updateUserName($userModel);
        } else if(preg_match('/\/user\/(\d+)\/email$/', $uri, $match)){
            $idUser = $match[1];
            $data = json_decode(file_get_contents('php://input'));
            
            $userModel = new User();
            $userModel->setId($idUser);
            $userModel->setEmail($data->email);
            
            $userRepository->updateUserEmail($userModel);
        } else if(preg_match('/\/user\/(\d+)\/password$/', $uri, $match)){
            $idUser = $match[1];
            $data = json_decode(file_get_contents('php://input'));
            
            $userModel = new User();
            $userModel->setId($idUser);
            $userModel->setPassword($data->password);
            
            $userRepository->updateUserPassword($userModel);
        }

    break;

    case 'GET':

        if(preg_match('/\/user\/(\d+)/', $uri, $match)){

            $idUser = $match[1];
            $userController->getUserById($idUser);

        }else if($uri === '/user') {
            
            $userController->getAll();

        }
    break;

    case 'DELETE':

        if(preg_match('/\/user\/(\d+)/', $uri, $match)){
            $idUser = $match[1];
            $user = $userController->deleteUser($idUser);
        }
    
    default:
        break;
}