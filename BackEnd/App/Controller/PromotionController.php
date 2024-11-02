<?php

namespace Pi\Visgo\Controller;

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

        if($result){
            ResponseAssemblerSuccess::response(200, $result, "Promoção criada com sucesso");
        }

        ResponseAssemblerError::responseDelete(404, "Erro ao criar Promoção");
    }

    public function update($id, $data)
    {
        $promotionModel = new Promotion();
        $promotionModel->setStartDatePromotion($data->start_date_promotion);
        $promotionModel->setEndDatePromotion($data->end_date_promotion);
        $promotionModel->setCodPromotion($data->cod_promotion);

        $result = $this->promotionRepository->createPromotion($promotionModel);

        if($result){
            ResponseAssemblerSuccess::response(200, $result, "Promoção atualizada com sucesso");
        }

        ResponseAssemblerError::responseDelete(404, "Erro ao atualizar a promoção");
    }

    public function getAllPromotion()
    {
        $result = $this->promotionRepository->getAllPromotion();
        echo $result;
    }

    public function searchById($id)
    {
        $result = $this->promotionRepository->searchByIdPromotion($id);
    }

    public function delete($id)
    {
        $result = $this->promotionRepository->deleteByIdPromotion($id);

        if($result){
            ResponseAssemblerSuccess::response(200, $result, "Promoção excluída com sucesso");
        }

        ResponseAssemblerError::responseDelete(404, "Erro ao excluir promoção");
    }

    public function addProductsInPromotion($data)
    {
        $promotion = $data->promotion;
        $products = $data->products;

        $result = $this->promotionRepository->insertProductInPromotion($promotion, $products);
        
        if($result){
            ResponseAssemblerSuccess::response(200, $result, "Produto adicionado a promoção com sucesso");
        }

        ResponseAssemblerError::responseDelete(404, "Erro ao adicionar o produto a promoção");
    }

    public function updateProductsInPromotion($data)
    {
        $promotion = $data->promotion;
        $products = $data->products;

        $result = $this->promotionRepository->updateProductPromotion($promotion, $products);

        if($result){
            ResponseAssemblerSuccess::response(200, $result, "Produto da promoção atualizado com sucesso");
        }

        ResponseAssemblerError::responseDelete(404, "Erro ao atualizar o produto da promoção");

    }

    public function getAllProductsInPromotion()
    {
        $result = $this->promotionRepository->getAllProductPromotion();
    }

    public function delteProductInPromotion($data, $result)
    {   
        $promotion = $data->promotion;
        $products = $data->products;
        $result = $this->promotionRepository->deleteProductPromotion($products, $promotion);

        if($result){
           ResponseAssemblerSuccess::response(200, $result, "Produto da promoção deletado com sucesso");

        }

        ResponseAssemblerError::responseDelete(404, "Erro ao deletar o produto de promoção");

    }

}
