<?php
namespace Pi\Visgo\Router;

use Pi\Visgo\Controller\ProductController;
use Pi\Visgo\Controller\UserController;
use Pi\Visgo\Controller\OrderController;
use Pi\Visgo\Controller\PromotionController;
use Pi\Visgo\Controller\CartController;
use Pi\Visgo\Controller\ArtController;
use Pi\Visgo\Controller\SaleController;

class Routes
{
    public static function getRoutes(): array
    {
        return [
            'GET' => [
                '/users' => [UserController::class, 'getAll'],
                '/users/with-roles' => [UserController::class, 'getAllWithRoles'],
                '/users/{id}' => [UserController::class, 'getById'],

                '/products' => [ProductController::class, 'getAll'],
                '/products/images' => [ProductController::class, 'getAllImages'],
                '/products/{id}' => [ProductController::class, 'getById'],
                '/products/{id}/images' => [ProductController::class, 'getImageById'],

                '/orders/art' => [OrderController::class, 'getAllOrderFromArt'],
                '/orders/{id}' => [OrderController::class, 'getById'],
                '/orders' => [OrderController::class, 'getAll'], 

                '/promotions' => [PromotionController::class, 'getAllPromotion'],
                '/promotions/{id}' => [PromotionController::class, 'searchById'],
                '/promotions/products' => [PromotionController::class, 'getAllProductsInPromotion'],

                '/carts' => [CartController::class, 'getAll'],
                '/carts/assoc' => [CartController::class, 'getAllCartsAssoc'],
                '/carts/{id}' => [CartController::class, 'getById'],
                '/carts/{id}/products' => [CartController::class, 'getProductInCartById'],

                '/arts' => [ArtController::class, 'getAll'],
                '/arts/{id}' => [ArtController::class, 'getById'],

                '/sales/product' => [SaleController::class, 'getAllProductFromSale'],
                '/sales/{id}' => [saleController::class, 'getById'],
                '/sales' => [saleController::class, 'getAll'], 

            ],
            'POST' => [
                '/users' => [UserController::class, 'create'],

                '/orders' => [OrderController::class, 'create'],
                '/orders/{order}/arts' => [OrderController::class, 'addArtToOrder'],

                '/promotions' => [PromotionController::class, 'create'],
                '/promotions/products' => [PromotionController::class, 'addProductsInPromotion'],

                '/carts' => [CartController::class, 'create'],
                '/carts/products' => [CartController::class, 'InsertProductInCart'],

                '/products' => [ProductController::class, 'create'],
                '/products/{id}/images' => [ProductController::class, 'insertImage'],

                '/arts' => [ArtController::class, 'create'],

                '/sales' => [SaleController::class, 'create'],
                '/sales/{sale}/products' => [SaleController::class, 'addProductsToSale'],
            ],
            'PUT' => [
                '/users' => [UserController::class, 'update'],

                '/orders/{id}' => [OrderController::class, 'update'],
                '/orders/{id}/finish' => [OrderController::class, 'finishOrder'],
                '/orders/{id}/reopen' => [OrderController::class, 'reopenOrder'],

                '/promotions/{id}' => [PromotionController::class, 'update'],
                '/promotions/{id}/close' => [PromotionController::class, 'ClosingPromotion'],
                '/promotions/{id}/open' => [PromotionController::class, 'OpeningPromotion'],

                '/products/{id}' => [ProductController::class, 'update'],
                '/products/{id}/images' => [ProductController::class, 'updateImage'],

                '/arts/{id}' => [ArtController::class, 'update'],
                '/arts/{id}/delete' => [ArtController::class, 'isDeleteArt'],
                '/arts/{id}/undelete' => [ArtController::class, 'isNotDelete'],

                '/sales/{id}' => [SaleController::class, 'update'],
                '/sales/{id}/finish' => [saleController::class, 'finish'],
                '/sales/{id}/reopen' => [saleController::class, 'reOpen'],
            ],
            'DELETE' => [
                '/users/{id}' => [UserController::class, 'delete'],

                '/orders/{order}/art/{art}' => [OrderController::class, 'removeArtFromOrder'],

                '/promotions/products' => [PromotionController::class, 'deleteProductInPromotion'],

                '/carts/{id}' => [CartController::class, 'delete'],
                '/carts/products' => [CartController::class, 'deleteProductFromACart'],

                '/products/{id}' => [ProductController::class, 'discontinue'],
                '/products/{id}/images' => [ProductController::class, 'deleteImageById'],
            ],
        ];
    }
}
