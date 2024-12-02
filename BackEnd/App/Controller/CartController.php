<?php

namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\Responses\Response;
use Pi\Visgo\Model\Cart;
use Pi\Visgo\Repository\CartRepository;

class CartController
{

    private $CartRepository;

    public function __construct()
    {
        $this->CartRepository = new CartRepository('sqlite');
    }

    public function create($data)
    {

        $cartModel = new Cart();
        $cartModel->setIdUser($data->id_user);

        $result = $this->CartRepository->createCart($cartModel);

        if (!$result) {
            Response::error($result, "Erro ao criar carrinho", 400);
        }

        Response::success($result, "Carrinho criado com sucesso!", 201);

    }

    public function delete($id)
    {

        $result = $this->CartRepository->deleteCart($id);
        Response::success($result, "Requisição realizada com sucesso!", 200);

    }

    public function InsertProductInCart($data)
    {

        $id_cart = $data->id_cart;
        $id_products = $data->id_products;


        $result = $this->CartRepository->addProductinCart($id_cart, $id_products);
        Response::success($result, "Requisição realizada com sucesso!", 200);

    }

    public function getAll()
    {

        $result = $this->CartRepository->getAllCarts();
        Response::success($result, "Requisição realizada com sucesso!", 200);

    }

    public function getAllCartsAssoc()
    {

        $result = $this->CartRepository->getAllCartsAssoc();
        Response::success($result, "Requisição bem sucedida", 200);

    }

    public function getById($id)
    {

        $result = $this->CartRepository->getCartById($id);
        Response::success($result, "Requisição realizada com sucesso!", 200);
    }

    public function getProductInCartById($id)
    {
        $id_product = $id;

        $result = $this->CartRepository->getProductInCarts($id_product);

        Response::success($result, "Requisição realizada com sucesso!", 200);
    }

    public function deleteProductFromACart($data)
    {

        $id_cart = $data->id_cart;
        $id_product = $data->id_product;

        $result = $this->CartRepository->deleteProductInCart($id_cart, $id_product);

        if (!$result) {
            Response::error($result, "Erro ao deletar Produto do carrinho", 400);
        }

        Response::noContent();
    }


}