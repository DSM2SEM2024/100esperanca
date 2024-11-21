<?php

namespace Pi\Visgo\Controller;

use Exception;
use Pi\Visgo\Common\ResponseAssemblerError;
use Pi\Visgo\Common\ResponseAssemblerSuccess;
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

    public function update($id, $data){

/*         $validator = new ValidatorId('sqlite');

        $table = 'promotion';

        $validation = $validator->ValidatorById($table, $id);
        var_dump($validation);

        if($validation){
            ResponseAssemblerError::response(404, "Promoção não encontrada.");
            throw new Exception("Id de promoção não encontrado.");
        } */

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
/* 
        $validator = new Validator('sqlite');

        $table = 'promotion';

        $validation = $validator->ValidatorById($table, $id);
        echo ($validation);

        if(!$validation){
            ResponseAssemblerError::response(404, "Promoção não encontrada.");
            throw new Exception("Id de promoção não encontrado.");
        } */

        $result = $this->promotionRepository->ClosePromotionById($id);
        
        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao fechar promoção");
        }

        ResponseAssemblerSuccess::response(200, $result, "Promoção fechada com sucesso!");
    }

    public function OpeningPromotion($id, $data){

/*         $validator = new ValidatorId('sqlite');

        $table = 'promotion';

        $ids = [$id];

        $validation = $validator->ValidatorById($table, $ids);

        if(!$validation){
            ResponseAssemblerError::response(404, "Promoção não encontrada.");
            throw new Exception("Id de promoção não encontrado.");
        }
 */
        $promotionModel = new Promotion();
        $promotionModel->setStartDatePromotion($data->start_date_promotion);
        $promotionModel->setEndDatePromotion($data->end_date_promotion);

        $result = $this->promotionRepository->OpenPromotionById($id, $promotionModel);
        
        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao fechar promoção");
        }

        ResponseAssemblerSuccess::response(200, $result, "Promoção reaberta com sucesso!");
    }


    public function getAllPromotion() {
        $result = $this->promotionRepository->getAllPromotion();
        ResponseAssemblerSuccess::response(200, $result, 'Requisição bem sucedida!');
    }

    public function searchById($id)
    {
/* 
        $ids = [$id];

        $validator = new ValidatorId('sqlite');

        $table = 'promotion';

        $validation = $validator->ValidatorById($table, $ids);

        if(!$validation){
            ResponseAssemblerError::response(404, "Promoção não encontrada.");
            throw new Exception("Id de promoção não encontrado.");
        } */

        $result = $this->promotionRepository->searchByIdPromotion($id);
        ResponseAssemblerSuccess::response(200, $result, 'Requisição bem sucedida!');
    }

    public function addProductsInPromotion($data){

        $validator = new Validator('sqlite');

        $products = $data->products;

        $validationArray = $validator->ValidatorRepetedValuesInArray($products);


        if($validationArray){
            ResponseAssemblerError::response(404, "Um produto não pode ser adicionado duas vezes na mesma promoção");
            throw new Exception("Produto de Id repetido na criação");
        }

        $promotion = $data->promotion;

        $result = $this->promotionRepository->insertProductInPromotion($promotion, $products);
        
        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao adicionar o produto a promoção");
        }
        
        ResponseAssemblerSuccess::response(200, $result, "Produto adicionado a promoção com sucesso");
    }

    public function getAllProductsInPromotion()
    {
        $result = $this->promotionRepository->getAllProductPromotion();
        ResponseAssemblerSuccess::response(200, $result, "Requisão do produto da promoção realizada com sucesso!");
    }

    public function deleteProductInPromotion($data)
    {   

/*         $validator = new ValidatorId('sqlite');

        $table = 'promotion';

        $id = $data->promotion;

        $validation = $validator->ValidatorById($table, $id);

        if(!$validation){
            ResponseAssemblerError::response(404, "Promoção não encontrada.");
            throw new Exception("Id de promoção não encontrado.");
        } */

        $promotion = $data->promotion;
        $products = $data->products;
        $result = $this->promotionRepository->deleteProductPromotion($promotion, $products);

        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao deletar o produto de promoção");
        }
        ResponseAssemblerSuccess::response(200, $result, "Produto da promoção deletado com sucesso");

    }

}