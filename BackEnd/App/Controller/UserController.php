<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\ResponseAssemblerError;
use Pi\Visgo\Common\ResponseAssemblerSuccess;
use Pi\Visgo\Repository\UserRepository;

class UserController {

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function getAll() { 
        $users = $this->userRepository->getAllUsers();
        ResponseAssemblerSuccess::response(200, $users);
    }

    public function getUserById($idUser) {
        $user = $this->userRepository->getUserById($idUser);
        ResponseAssemblerSuccess::response(200, $user);
    }

    public function deleteUser($idUser) { 
        $result = $this->userRepository->deleteUserById($idUser);

        if (!$result) {
            ResponseAssemblerError::response(400,"");
        }

        ResponseAssemblerSuccess::response(200, $result);
    }
}
