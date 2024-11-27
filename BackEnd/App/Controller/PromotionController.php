<?php

namespace Pi\Visgo\Controller;

use Exception;
use Pi\Visgo\Common\Responses\Response;
use Pi\Visgo\Model\Promotion;
use Pi\Visgo\Repository\PromotionRepository;
use Pi\Visgo\Common\Validator;

class PromotionController
{

    private $promotionRepository;

    public function __construct(PromotionRepository $promotionRepository)
    {
        $this->promotionRepository = $promotionRepository;
    }

    public function create($data)
    {
        $promotionModel = $this->assemblerPromotion($data);

        $result = $this->promotionRepository->createPromotion($promotionModel);

        if (!$result) {
            Response::error($result, "Erro ao criar Promoção", 400);
        }

        Response::success($result, "Promoção criada com sucesso", 201);
    }

    public function update($id, $data)
    {

        $promotionModel = $this->assemblerPromotion($data);

        $result = $this->promotionRepository->updatePromotion($id, $promotionModel);

        if (!$result) {
            Response::error($result, "Erro ao atualizar a promoção", 400);
        }

        Response::success($result, "Promoção atualizada com sucesso", 200);
    }

    public function closingPromotion($id)
    {

        $result = $this->promotionRepository->ClosePromotionById($id);

        if (!$result) {
            Response::error($result, "Erro ao fechar promoção", 400);
        }

        Response::success($result, "Promoção fechada com sucesso!", 200);
    }

    public function openingPromotion($id, $data)
    {

        $promotionModel = new Promotion();
        $promotionModel->setStartDatePromotion($data->start_date_promotion);
        $promotionModel->setEndDatePromotion($data->end_date_promotion);

        $result = $this->promotionRepository->OpenPromotionById($id, $promotionModel);

        if (!$result) {
            Response::error(404, "Erro ao fechar promoção");
        }

        Response::success(200, $result, "Promoção reaberta com sucesso!");
    }


    public function getAllPromotion()
    {
        $result = $this->promotionRepository->getAllPromotion();
        Response::success(200, $result, 'Requisição bem sucedida!');
    }

    public function searchById($id)
    {
        $result = $this->promotionRepository->searchByIdPromotion($id);
        Response::success(200, $result, 'Requisição bem sucedida!');
    }

    public function addProductsInPromotion($data)
    {
        $products = $data->products;

        $validationArray = Validator::validatorRepetedValuesInArray($products);


        if ($validationArray) {
            Response::error("Um produto não pode ser adicionado duas vezes na mesma promoção", 400);
            throw new Exception("Produto de Id repetido na criação");
        }

        $promotion = $data->promotion;

        $result = $this->promotionRepository->insertProductInPromotion($promotion, $products);

        if (!$result) {
            Response::error($result, "Erro ao adicionar o produto a promoção", 500);
        }

        Response::success($result, "Produto adicionado a promoção com sucesso", 200);
    }

    public function getAllProductsInPromotion()
    {
        $result = $this->promotionRepository->getAllProductPromotion();
        Response::success($result, "Requisão do produto da promoção realizada com sucesso!", 200);
    }

    public function deleteProductInPromotion($data)
    {
        $promotion = $data->promotion;
        $products = $data->products;
        $result = $this->promotionRepository->deleteProductPromotion($promotion, $products);

        if (!$result) {
            Response::error($result, "Erro ao deletar o produto de promoção", 500);
        }
        Response::success($result, "Produto da promoção deletado com sucesso", 200);

    }

    private function assemblerPromotion(object $data): Promotion
    {
        $promotionModel = new Promotion();
        return $promotionModel->setStartDatePromotion($data->start_date_promotion)
            ->setEndDatePromotion($data->end_date_promotion)
            ->setCodPromotion($data->cod_promotion);
    }

}
