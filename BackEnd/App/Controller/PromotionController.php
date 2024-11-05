<?php

namespace Pi\Visgo\Controller;

use Exception;
use Pi\Visgo\Common\ResponseAssemblerError;
use Pi\Visgo\Common\ResponseAssemblerSuccess;
use Pi\Visgo\Model\Promotion;
use Pi\Visgo\Repository\PromotionRepository;


class PromotionController
{

    private $promotionRepository;

    public function __construct(PromotionRepository $promotionRepository)
    {
        $this->promotionRepository = $promotionRepository;
    }

    public function create($data)
    {
        $promotionModel = new Promotion();
        $promotionModel->setStartDatePromotion($data->start_date_promotion);
        $promotionModel->setEndDatePromotion($data->end_date_promotion);
        $promotionModel->setCodPromotion($data->cod_promotion);

        $result = $this->promotionRepository->createPromotion($promotionModel);

        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao criar Promoção");
        }
        
        ResponseAssemblerSuccess::response(200, $result, "Promoção criada com sucesso");
    }

    public function update($id, $data)
    {

        $promotionModel = new Promotion();
        $promotionModel->setStartDatePromotion($data->start_date_promotion);
        $promotionModel->setEndDatePromotion($data->end_date_promotion);
        $promotionModel->setCodPromotion($data->cod_promotion);

        $result = $this->promotionRepository->updatePromotion($id, $promotionModel);

        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao atualizar a promoção");
        }
        
        ResponseAssemblerSuccess::response(200, $result, "Promoção atualizada com sucesso");
    }

    public function ClosingPromotion($id){

        //criar método de verificação do id

        $result = $this->promotionRepository->ClosePromotionById($id);
        
        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao fechar promoção");
        }

        ResponseAssemblerSuccess::response(200, $result, "Promoção fechada com sucesso!");
    }

    public function OpeningPromotion($id){

        //criar método de verificação do id

        $result = $this->promotionRepository->OpenPromotionById($id);
        
        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao fechar promoção");
        }

        ResponseAssemblerSuccess::response(200, $result, "Promoção aberta com sucesso!");
    }


    public function getAllPromotion() {
        $result = $this->promotionRepository->getAllPromotion();
        ResponseAssemblerSuccess::response(200, $result, 'Requisição bem sucedida!');
    }

    public function searchById($id)
    {
        $result = $this->promotionRepository->searchByIdPromotion($id);
        ResponseAssemblerSuccess::response(200, $result, 'Requisição bem sucedida!');
    }

    public function addProductsInPromotion($data)
    {
        $promotion = $data->promotion;
        $products = $data->products;

        $result = $this->promotionRepository->insertProductInPromotion($promotion, $products);
        
        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao adicionar o produto a promoção");
        }
        
        ResponseAssemblerSuccess::response(200, $result, "Produto adicionado a promoção com sucesso");
    }

    /*public function updateProductsInPromotion($data)
    {
        $promotion = $data->promotion;
        $products = $data->products;

        $result = $this->promotionRepository->updateProductPromotion($promotion, $products);

        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao atualizar o produto da promoção");
        }
        
        ResponseAssemblerSuccess::response(200, $result, "Produto da promoção atualizado com sucesso");

    }*/

    public function getAllProductsInPromotion()
    {
        $result = $this->promotionRepository->getAllProductPromotion();
        ResponseAssemblerSuccess::response(200, $result, "Requisão do produto da promoção realizada com sucesso!");
    }

    public function deleteProductInPromotion($data)
    {   
        $promotion = $data->promotion;
        $products = $data->products;
        $result = $this->promotionRepository->deleteProductPromotion($promotion, $products);

        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao deletar o produto de promoção");
        }
        echo json_decode("dasdasda");
        ResponseAssemblerSuccess::response(200, $result, "Produto da promoção deletado com sucesso");

    }

}
