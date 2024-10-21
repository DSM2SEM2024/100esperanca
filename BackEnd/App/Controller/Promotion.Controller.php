<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Model\Promotion;
use Pi\Visgo\Repository\PromotionRepository;
use Pi\Visgo\Common\PromotionCommon\Validator;
use Pi\Visgo\Common\PromotionCommon\ResponseAssemblerSucess;
use Pi\Visgo\Common\PromotionCommon\ResponseAssemblerError;


class ControllerPromotion {

    private $promotionRepository;

     public function __construct(PromotionRepository $repositoryPromotion) {
            $this->promotionRepository = $repositoryPromotion;
     }

     public function create($data) {
        $promotionModel = new Promotion();
        $promotionModel->setStartDatePromotion($data);

        $result = $this->promotionRepository->createPromotion($promotionModel);
        //Incluir Resposta de Sucesso
        //Incluir Resposta de Erro
     }

     public function update($id, $data){
        $promotionModel = new Promotion(
            $data->id_product,
            $data->start_date_promotion,
            $data->end_date_promotion,
            $data->cod_promotion,
        );

        $result = $this->promotionRepository->createPromotion($promotionModel);
         //Incluir Resposta de Sucesso
        //Incluir Resposta de Erro
     }

     public function getAll() {
        $result = $this->promotionRepository->getAllPromotion();
         //Incluir Resposta de Sucesso
        //Incluir Resposta de Erro
    }

    public function searchById($id) {
        $result = $this->promotionRepository->searchByIdPromotion($id);
        //Incluir Resposta de Sucesso
        //Incluir Resposta de Erro
    }

    public function delete($id) {
        if ($this->promotionRepository->deleteByIdPromotion($id)) {
            //Incluir Resposta de Sucesso
        //Incluir Resposta de Erro
    }
    
}

}
