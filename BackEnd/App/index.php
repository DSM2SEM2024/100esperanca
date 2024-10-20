<?php
namespace Pi\Visgo;
require_once "../vendor/autoload.php";

use Pi\Visgo\Model\Address;
use Pi\Visgo\Model\User;
use Pi\Visgo\Repository\UserRepository;

header('Content-Type: application/json');

$userRepository = new UserRepository('sqlite');

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

switch ($uri) {
    case '/user':

        if ($method === 'POST') {
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

        }

        break;
    
    default:
        break;
}