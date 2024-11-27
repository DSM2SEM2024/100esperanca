<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use Pi\Visgo\Common\Responses\ProblemAndFieldError;
use Pi\Visgo\Common\Responses\Response;
use Pi\Visgo\Common\Validator;
use Pi\Visgo\Model\Art;
use Pi\Visgo\Repository\ArtRepository;

class ArtController
{

    private $artRepository;

    public function __construct()
    {
        $this->artRepository = new ArtRepository('sqlite');
    }

    public function create($data)
    {
        $isValid = Validator::validatorObjectInput($data);

        if (!$isValid) {
            Response::error(ProblemAndFieldError::getFieldsError(), "Verifique seus dados de entrada", 400);
        }

        $artModel = $this->assemblerArt($data);

        $result = $this->artRepository->createArt($artModel);

        Response::success($result , "Art cadastrada com sucesso", 201);
    }

    public function update($id, $data)
    {
        $isValid = Validator::validatorObjectInput($data);

        if (!$isValid) {
            Response::error(ProblemAndFieldError::getFieldsError(), "Verifique seus dados de entrada", 400);
        }

        $artModel = $this->assemblerArt($data);
        $artModel->setId($id);

        $result = $this->artRepository->updateArt($id, $artModel);

        Response::success($result, "Art atualizada com sucesso", 200);
    }

    public function getAll()
    {
        $result = $this->artRepository->getAllArt();

        Response::success($result, "Requisição realizada com sucesso", 200);
    }

    public function getById($id)
    {
        try {
            $result = $this->artRepository->getArtById($id);
        } catch (ResourceNotFoundException $e) {
            Response::error($e->getMessage(), 404);
        }

        Response::success($result,  "Requisição realizada com sucesso", 200);
    }

    public function isDeleteArt($id)
    {

        $result = $this->artRepository->isDeletedArt($id);

        if (!$result) {
            Response::error("Erro ao deletar Art", 400);
        }

        Response::noContent();
    }

    public function isNotDelete($id)
    {
        $result = $this->artRepository->IsNotDeletedArt($id);

        if (!$result) {
            Response::error("Erro ao reativar Art", 400);
        }

        Response::noContent();
    }

    private function assemblerArt(object $data): Art
    {
        $art = new Art();

        return $art->setName($data->name)
            ->setDescription($data->description)
            ->setCharacteristic($data->characteristic);
    }
}
