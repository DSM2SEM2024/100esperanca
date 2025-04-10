<?php
namespace Pi\Visgo\Router;

use Pi\Visgo\Controller\ProductController;
use Pi\Visgo\Controller\UserController;
use Pi\Visgo\Controller\OrderController;
use Pi\Visgo\Controller\PromotionController;
use Pi\Visgo\Controller\CartController;
use Pi\Visgo\Controller\ArtController;
use Pi\Visgo\Controller\SaleController;
use Pi\Visgo\Controller\AuthController;

class Routes
{
    public static function getRoutes(): array
    {
        return [
            'GET' => [
                '/users' => [UserController::class, 'getAll', 'full_admin'],
                '/users/with-roles' => [UserController::class, 'getAllWithRoles', 'full_admin'],
                '/users/{id}' => [UserController::class, 'getById', 'full_admin'],

                '/products' => [ProductController::class, 'getAll'], // pública
                '/products/images' => [ProductController::class, 'getAllImages', 'admin'],
                '/products/{id}' => [ProductController::class, 'getById', 'admin'],
                '/products/{id}/images' => [ProductController::class, 'getImageById', 'admin'],

                '/orders/art' => [OrderController::class, 'getAllOrderFromArt', 'admin'],
                '/orders/{id}' => [OrderController::class, 'getById', 'admin'],
                '/orders' => [OrderController::class, 'getAll', 'admin'],

                '/promotions' => [PromotionController::class, 'getAllPromotion', 'client'],
                '/promotions/{id}' => [PromotionController::class, 'searchById', 'client'],
                '/promotions/products' => [PromotionController::class, 'getAllProductsInPromotion', 'client'],

                '/carts' => [CartController::class, 'getAll', 'admin'],
                '/carts/assoc' => [CartController::class, 'getAllCartsAssoc', 'admin'],
                '/carts/{id}' => [CartController::class, 'getById', 'client'],
                '/carts/{id}/products' => [CartController::class, 'getProductInCartById', 'client'],

                '/arts' => [ArtController::class, 'getAll', 'admin'],
                '/arts/{id}' => [ArtController::class, 'getById', 'admin'],

                '/sales/product' => [SaleController::class, 'getAllProductFromSale', 'admin'],
                '/sales/{id}' => [SaleController::class, 'getById', 'admin'],
                '/sales' => [SaleController::class, 'getAll', 'admin'],

                '/client' => [AuthController::class, 'clientRoute', 'client'],
                '/admin' => [AuthController::class, 'adminRoute', 'admin'],
                '/full_admin' => [AuthController::class, 'fullAdminRoute', 'full_admin'],
            ],

            'POST' => [
                '/users' => [UserController::class, 'create', 'full_admin'],

                '/orders' => [OrderController::class, 'create', 'client'],
                '/orders/{order}/arts' => [OrderController::class, 'addArtToOrder', 'admin'],

                '/promotions' => [PromotionController::class, 'create', 'admin'],
                '/promotions/products' => [PromotionController::class, 'addProductsInPromotion', 'admin'],

                '/carts' => [CartController::class, 'create', 'client'],
                '/carts/products' => [CartController::class, 'InsertProductInCart', 'client'],

                '/products' => [ProductController::class, 'create', 'admin'],
                '/products/{id}/images' => [ProductController::class, 'insertImage', 'admin'],

                '/arts' => [ArtController::class, 'create', 'admin'],

                '/sales' => [SaleController::class, 'create', 'admin'],
                '/sales/{sale}/products' => [SaleController::class, 'addProductsToSale', 'admin'],

                '/login' => [AuthController::class, 'login'], // pública
            ],

            'PUT' => [
                '/users' => [UserController::class, 'update', 'admin'],

                '/orders/{id}' => [OrderController::class, 'update', 'admin'],
                '/orders/{id}/finish' => [OrderController::class, 'finishOrder', 'full_admin'],
                '/orders/{id}/reopen' => [OrderController::class, 'reopenOrder', 'full_admin'],

                '/promotions/{id}' => [PromotionController::class, 'update', 'admin'],
                '/promotions/{id}/close' => [PromotionController::class, 'ClosingPromotion', 'admin'],
                '/promotions/{id}/open' => [PromotionController::class, 'OpeningPromotion', 'admin'],

                '/products/{id}' => [ProductController::class, 'update', 'admin'],
                '/products/{id}/images' => [ProductController::class, 'updateImage', 'admin'],

                '/arts/{id}' => [ArtController::class, 'update', 'admin'],
                '/arts/{id}/delete' => [ArtController::class, 'isDeleteArt', 'full_admin'],
                '/arts/{id}/undelete' => [ArtController::class, 'isNotDelete', 'full_admin'],

                '/sales/{id}' => [SaleController::class, 'update', 'admin'],
                '/sales/{id}/finish' => [SaleController::class, 'finish', 'admin'],
                '/sales/{id}/reopen' => [SaleController::class, 'reOpen', 'admin'],
            ],

            'DELETE' => [
                '/users/{id}' => [UserController::class, 'delete', 'full_admin'],

                '/orders/{order}/art/{art}' => [OrderController::class, 'removeArtFromOrder', 'admin'],

                '/promotions/products' => [PromotionController::class, 'deleteProductInPromotion', 'admin'],

                '/carts/{id}' => [CartController::class, 'delete', 'client'],
                '/carts/products' => [CartController::class, 'deleteProductFromACart', 'client'],

                '/products/{id}' => [ProductController::class, 'discontinue', 'admin'],
                '/products/{id}/images' => [ProductController::class, 'deleteImageById', 'admin'],
            ],
        ];
    }
}