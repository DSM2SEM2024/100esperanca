<?php

namespace Pi\Visgo\Controller;

use Exception;
use Pi\Visgo\Common\ResponseAssemblerError;
use Pi\Visgo\Common\ResponseAssemblerSuccess;
use Pi\Visgo\Model\Cart;
use Pi\Visgo\Repository\CartRepository;
use Pi\Visgo\Common\Validator;

class CartController {

    private $CartRepository;

    public function __construct(CartRepository $CartRepository)
    {
        $this->CartRepository = $CartRepository;
    }

    public function create($data){

        $cartModel = new Cart();
        $cartModel->setIdUser($data->id_user);

        $result = $this->CartRepository->createCart($cartModel);

        if(!$result){
            ResponseAssemblerError::response(404, "Erro ao criar Promoção");
        }
        
        ResponseAssemblerSuccess::response(200, $result, "Promoção criada com sucesso");

    }

    public function Close($id){

        $result = $this->CartRepository->DeleteCart($id);
        ResponseAssemblerSuccess::response(200, $result, "Requisição realizada com sucesso!");

    }

    public function InsertProductInCart($data){

        $id_cart = $data->id_cart;
        $id_products = $data->id_products;


        $result = $this->CartRepository->addProductinCart($id_cart, $id_products);
        ResponseAssemblerSuccess::response(200, $result, "Requisição realizada com sucesso!");

    }

    public function getAll(){

        $result = $this->CartRepository->getAllCarts();
        ResponseAssemblerSuccess::response(200, $result, "Requisição realizada com sucesso!");

    }

    public function getAllCarts(){

        $result = $this->CartRepository->getAllCartsAssoc();
        ResponseAssemblerSuccess::response(200, $result, "Requisição bem sucedida");

    }

    public function searchById($id){

        $result = $this->CartRepository->searchByIdCart($id);
        ResponseAssemblerSuccess::response(200, $result, "Requisição realizada com sucesso!");
    }

    public function serachByIdProductInCart($id){

        $id_product = $id;

        $result = $this->CartRepository->getProductInCarts($id_product);
        ResponseAssemblerSuccess::response(200, $result, "Requisição realizada com sucesso!");
    }

    public function Delete($data){

        $id_cart = $data->id_cart;
        $id_product = $data->id_product;

        $result = $this->CartRepository->DeleteProductInCart($id_cart, $id_product);
        ResponseAssemblerSuccess::response(200, $result, "Requisição realizada com sucesso!");
    }


}