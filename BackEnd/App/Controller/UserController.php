<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\Responses\Response;
use Pi\Visgo\Model\Role;
use Pi\Visgo\Model\User;
use Pi\Visgo\Repository\UserRepository;

class UserController
{

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getAll()
    {
        $users = $this->userRepository->getAllUsers();
        Response::success($users, "Requisição realizada com sucesso", 200);
    }

    public function getById($idUser)
    {
        $user = $this->userRepository->getUserById($idUser);
        Response::success($user, "Requisição realizada com sucesso", 200);
    }

    public function delete($idUser)
    {
        $result = $this->userRepository->deleteUserById($idUser);

        if (!$result) {
            Response::error($result, "Erro ao deletar usuário", 500);
        }

        Response::noContent();
    }

    private function assemblerUser(object $data): User
    {
        $role = new Role();
        $role->setId($data->role);

        $user = new User();
        $user->setName($data->name)
        ->setEmail($data->email)
        ->setPassword($data->password)
        ->setRole($role)
        ->

    }
}
