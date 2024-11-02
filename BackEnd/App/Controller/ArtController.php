<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\ProblemAndFiledError;
use Pi\Visgo\Common\ResponseAssemblerError;
use Pi\Visgo\Common\ResponseAssemblerSuccess;
use Pi\Visgo\Common\ValidatorArt;
use Pi\Visgo\Model\Art;
use Pi\Visgo\Repository\ArtRepository;

class ArtController {

    private $artRepository;

    public function __construct(ArtRepository $artRepository) {
        $this->artRepository = $artRepository;
    }

    public function create($data) {
        $isValid = ValidatorArt::validationArt($data);

        if (!$isValid) {
            ResponseAssemblerError::response(400, ProblemAndFiledError::getFieldsError());
            return;
        }

        $artModel = new Art(
            $data->characteristic,
            $data->description,
            $data->name
        );

        $result = $this->artRepository->createArt($artModel);

        ResponseAssemblerSuccess::response(200, $result, "Arte adicionada com sucesso!");
    }

    public function update($id, $data) {
        $isValid = ValidatorArt::validationArt($data);

        if (!$isValid) {
            ResponseAssemblerError::response(400, ProblemAndFiledError::getFieldsError());
            return;
        }

        $artModel = new Art(
            $data->characteristic,
            $data->description,
            $data->name
        );

        $result = $this->artRepository->updateArt($id, $artModel);

        ResponseAssemblerSuccess::response(200, $result, "Arte atualizada com sucesso!");
    }

    public function getAll() {
        $result = $this->artRepository->getAllArt();

        ResponseAssemblerSuccess::response(200, $result, "");
    }

    public function searchById($id) {
        $result = $this->artRepository->searchByIdArt($id);

        if ($result) {
            ResponseAssemblerSuccess::response(200, $result, "");
        } else {
            ResponseAssemblerError::response(404, 'Art not found');
        }
    }

    public function delete($id) {
        if ($this->artRepository->deleteByIdArt($id)) {
            ResponseAssemblerSuccess::responseDelete(200, "Arte excluída com sucesso!");
        } else {
            ResponseAssemblerError::responseDelete(500, "Erro ao excluir a Arte.");
        }
    }
}
