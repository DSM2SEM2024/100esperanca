<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\ResponseAssemblerSuccess;
use Pi\Visgo\Repository\ProductRepository;

class ProductController {
    
    private $productRepository;

    public function __construct(ProductRepository $productRepository) {
        $this->productRepository = $productRepository;
    }

    public function getAll() {
        $products = $this->productRepository->getAllProducts();
        ResponseAssemblerSuccess::response(200, $products);
    }

    public function getById($productId) {
        $product = $this->productRepository->getProductById($productId);
        ResponseAssemblerSuccess::response(200, $product);
    }

}
