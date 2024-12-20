<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use Pi\Visgo\Common\Responses\ProblemAndFieldError;
use Pi\Visgo\Common\Responses\Response;
use Pi\Visgo\Common\Validator;
use Pi\Visgo\Model\Sale;
use Pi\Visgo\Repository\SaleRepository;

class SaleController {

    private $saleRepository;

    public function __construct()
    {
        $this->saleRepository = new SaleRepository('mysql');
    }

    public function create($data) {

        $isValid = Validator::validatorObjectInput($data);

        if (!empty($isValid)) {
            Response::error(ProblemAndFieldError::getFieldsError(), "Verifique seus dados de entrada", 400);
        }

        $saleModel = $this->assemblerSale($data);

        $result = $this->saleRepository->createSale($saleModel);

        Response::success($result , "Venda cadastrada com sucesso", 201);
    }


    public function update($id, $data) {

        $isValid = Validator::validatorObjectInput($data);

        if (!empty($isValid)) {
            Response::error(ProblemAndFieldError::getFieldsError(), "Verifique seus dados de entrada", 400);
        }

        $saleModel = $this->assemblerSale($data);
        $saleModel->setId($id);

        $result = $this->saleRepository->updateSale($id,$saleModel);

        if (!$result) {
            Response::error($result, "Erro ao atualizar venda.", 500);
        }

        Response::success($result , "Venda atualizada com sucesso", 200);
    }


    public function getAll() 
    {
        $result = $this->saleRepository->getallSale();
        
        if(!$result)
        {
            Response::error($result, "Vendas não encontradas", 404);
        }

        Response::success($result, "Requisição feita com sucesso", 200);
    }

    public function getAllProductFromSale() 
    {

        $result = $this->saleRepository->getAllProductsFromSale();

        if (!$result) {
            Response::error(false, "Nenhuma associação de venda encontrada.", 404);
            return;
        }
        Response::success( $result, "Requisição realizada com sucesso",200);
    }

    public function getById($id) 
    {
    
        try {
            $result = $this->saleRepository->getSaleById($id);
        } catch (ResourceNotFoundException $e) {
            Response::error($e->getMessage(), 404);
        }
    
        Response::success($result, "Requisição realizada com sucesso", 200);
    }

    public function finish($id) 
    {
        $result = $this->saleRepository->IsFinishedSale($id);

        if (!$result) {
            Response::error("Erro ao deletar venda", 400);
        }

        Response::noContent();
    }

    public function reOpen($id) 
    {
        $result = $this->saleRepository->isNotFinishedSale($id);

     
        if (!$result) {
            Response::error("Erro ao reativar venda", 400);
        }

        Response::noContent();
    }

    public function addProductsToSale($data, $sale) {

        if (!isset($data->products) || empty($data->products)) {
            Response::error(false, "Nenhum produto fornecido.", 400);
            return;
        }
    
        $products = $data->products;
    
        $result = $this->saleRepository->insertSaleProduct($sale, $products);
    
        if (!$result) {
            Response::error(false, "Erro ao adicionar produto(s) a venda.", 500);
            return;
        }
    
        Response::success(true, "Produto(s) adicionado(s) a venda.", 200);
    }

    private function assemblerSale(object $data): Sale 
    {
        
        $sale = new Sale();

        return $sale->setdateTimeSale($data->date_time_sale)
            ->setIdUser($data->id_user);
    }
    
}