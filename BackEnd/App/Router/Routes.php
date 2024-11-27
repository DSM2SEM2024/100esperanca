<?php
namespace Pi\Visgo\Router;

use Pi\Visgo\Controller\ProductController;
use Pi\Visgo\Controller\UserController;
use Pi\Visgo\Controller\OrderController;
use Pi\Visgo\Controller\PromotionController;
use Pi\Visgo\Controller\CartController;
use Pi\Visgo\Controller\ArtController;

class Routes
{
    public static function getRoutes(): array
    {
        return [
            'GET' => [
                '/users' => [UserController::class, 'getAll'],
                '/users/{id}' => [UserController::class, 'getById'],

                '/products' => [ProductController::class, 'getAll'],
                '/products/{id}' => [ProductController::class, 'getById'],

                '/orders' => [OrderController::class, 'getAll'],
                '/orders/{id}' => [OrderController::class, 'getById'],
                '/orders/art' => [OrderController::class, 'getAllOrderFromArt'],

                '/promotions' => [PromotionController::class, 'getAllPromotion'],
                '/promotions/{id}' => [PromotionController::class, 'searchById'],
                '/promotions/products' => [PromotionController::class, 'getAllProductsInPromotion'],

                '/carts' => [CartController::class, 'getAll'],
                '/carts/assoc' => [CartController::class, 'getAllCartsAssoc'],
                '/carts/{id}' => [CartController::class, 'getById'],
                '/carts/{id}/products' => [CartController::class, 'getProductInCartById'],

                '/arts' => [ArtController::class, 'getAll'],
                '/arts/{id}' => [ArtController::class, 'getById'],
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

                '/arts' => [ArtController::class, 'create'],
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

                '/arts/{id}' => [ArtController::class, 'update'],
                '/arts/{id}/delete' => [ArtController::class, 'isDeleteArt'],
                '/arts/{id}/undelete' => [ArtController::class, 'isNotDelete'],
            ],
            'DELETE' => [
                '/users/{id}' => [UserController::class, 'delete'],

                '/orders/{order}/art/{art}' => [OrderController::class, 'removeArtFromOrder'],

                '/promotions/products' => [PromotionController::class, 'deleteProductInPromotion'],

                '/carts/{id}' => [CartController::class, 'delete'],
                '/carts/products' => [CartController::class, 'deleteProductFromACart'],

                '/products/{id}' => [ProductController::class, 'discontinue'],
            ],
        ];
    }
}
