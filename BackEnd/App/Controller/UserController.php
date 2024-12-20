mysql<?php
namespace Pi\Visgo\Controller;

use PDOException;
use Pi\Visgo\Common\Exceptions\ErrorCreatingEntityException;
use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use Pi\Visgo\Common\Responses\Response;
use Pi\Visgo\Model\Address;
use Pi\Visgo\Model\Role;
use Pi\Visgo\Model\User;
use Pi\Visgo\Repository\UserRepository;

class UserController
{

    private UserRepository $userRepository;

    public function __construct()
    {
        $this->userRepository = new UserRepository('mysql');
    }

    public function create(object $data)
    {
        try {
            $user = $this->assemblerUser($data);
            $result = $this->userRepository->createUser($user);

            Response::success($result, 'Usuário criado com sucesso', 201);
        } catch (ErrorCreatingEntityException $e) {
            Response::error($e->getMessage(), 500);
        } catch (PDOException $e) {
            Response::error($e->getMessage(), 500);
        }
    }

    public function update(object $data)
    {
        try {
            $user = $this->assemblerUser($data);
            $this->userRepository->updateUserWithAddress($user);
        } catch (ErrorCreatingEntityException $e) {
            Response::error($e->getMessage(), 500);
        } catch (PDOException $e) {
            Response::error($e->getMessage(), 500);
        }
    }

    public function getAll()
    {
        $users = $this->userRepository->getAllUsers();
        Response::success($users, "Requisição realizada com sucesso", 200);
    }

    public function getAllWithRoles()
    {
        $roles = $this->userRepository->getAllUsersWithRoles();
        Response::success($roles, "Requisição realizada com sucesso",200);
    }

    public function getById($idUser)
    {
        try {
            $user = $this->userRepository->getUserById($idUser);
            Response::success($user, "Requisição realizada com sucesso", 200);
        } catch (ResourceNotFoundException $e) {
            Response::error($e->getMessage(), 404);
        }
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
        $roles = array();
        $addresses = array();

        foreach ($data->roles as $nameRole) {
            $role = new Role();
            $role->setName($nameRole);
            array_push($roles, $role);
        }

        foreach ($data->addresses as $address) {
            $addressModel = new Address();
            $addressModel->setState($address->state)
                ->setCity($address->city)
                ->setNeighborhood($address->neighborhood)
                ->setNumber($address->number)
                ->setStreet($address->street)
                ->setCep($address->cep);
            array_push($addresses, $address);
        }

        $user = new User();
        $user->setName($data->name)
            ->setEmail($data->email)
            ->setPassword($data->password)
            ->setRoles($roles)
            ->setAddresses($addresses);

        return $user;
    }
}
