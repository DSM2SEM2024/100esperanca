<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\Responses\ResponseAssemblerError;
use Pi\Visgo\Common\Responses\ResponseAssemblerSuccess;
use Pi\Visgo\Repository\UserRepository;

class UserController {

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function getAll() { 
        $users = $this->userRepository->getAllUsers();
        ResponseAssemblerSuccess::response(200, $users, "Requisição realizada com sucesso");
    }

    public function getById($idUser) {
        $user = $this->userRepository->getUserById($idUser);
        ResponseAssemblerSuccess::response(200, $user,  "Requisição realizada com sucesso");
    }

    public function delete($idUser) { 
        $result = $this->userRepository->deleteUserById($idUser);

        if (!$result) {
            ResponseAssemblerError::response(400,"");
        }

        ResponseAssemblerSuccess::response(200, $result, "Requisição realizada com sucesso");
    }
}
