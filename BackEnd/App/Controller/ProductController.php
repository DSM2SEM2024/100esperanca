<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use Pi\Visgo\Common\Responses\ResponseAssemblerError;
use Pi\Visgo\Common\Responses\ResponseAssemblerSuccess;
use Pi\Visgo\Model\Art;
use Pi\Visgo\Model\Product;
use Pi\Visgo\Repository\ProductRepository;

class ProductController
{
    private ProductRepository $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function create(object $data)
    {
        $product = $this->assamblerProduct($data);

        $result = $this->productRepository->createProduct($product);

        if (!$result) {
            ResponseAssemblerError::response(400, "");
        }

        ResponseAssemblerSuccess::response(201, $result, "Produto cadastrados com sucesso");
    }

    public function getAll()
    {
        $result = $this->productRepository->getAllProducts();

        ResponseAssemblerSuccess::response(200, $result, "Requisição realizada com sucesso");
    }

    public function getById(int $idProduct)
    {
        try {

            $result = $this->productRepository->getProductById($idProduct);
            
            ResponseAssemblerSuccess::response(200, $result, "Requisição realizada com sucesso");
            
        } catch (ResourceNotFoundException $e) {
            
            ResponseAssemblerError::response(404, $e->getMessage());
            
        }
        
    }

    public function update(int $idProduct, object $data)
    {
        $product = $this->assamblerProduct($data);
        $product->setId($idProduct);

        $result = $this->productRepository->updateProduct($product);

        if (!$result) {
            ResponseAssemblerError::response(404, "");
        }

        ResponseAssemblerSuccess::response(200, $result, "Produto atualiado com sucesso");
    }

    public function discontinue(int $idProduct)
    {
        $result = $this->productRepository->discontinueProduct($idProduct);

        if (!$result) {
            ResponseAssemblerError::response(404, "");
        }

        ResponseAssemblerSuccess::response(204, $result, "Produto descontinuado com sucesso");
    }

    private function assamblerProduct(object $data): Product
    {
        $art = new Art();
        $art->setId($data->art);

        $product = new Product();
        $product->setName($data->name);
        $product->setTypeProduct($data->typeProduct);
        $product->setCodProduct($data->codProduct);
        $product->setPrice($data->price);
        $product->setIsDiscontinued(0);
        $product->setArt($art);

        return $product;
    }

}
