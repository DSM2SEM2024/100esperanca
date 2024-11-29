<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use Pi\Visgo\Common\Responses\Response;
use Pi\Visgo\Model\Art;
use Pi\Visgo\Model\Product;
use Pi\Visgo\Repository\ProductRepository;

class ProductController
{
    private ProductRepository $productRepository;

    public function __construct()
    {
        $this->productRepository = new ProductRepository('sqlite');
    }

    public function create(object $data)
    {
        $product = $this->assamblerProduct($data);

        $result = $this->productRepository->createProduct($product);

        if (!$result) {
            Response::error($result, "Erro ao cadastrar o Produto. Verifique seus dados de entrada", 400);
        }

        Response::success($result, "Produto cadastrados com sucesso", 201);
    }

    public function InsertImage($data, $files){

        var_dump($files);
        var_dump($data);

        $id = $data->id;
        
        $imageDir = 'Images/';

        $fileTmpName = $files['image']['tmp_name'];
        $fileName = $files['image']['name'];
        $image_path = ("\Pi\Visgo\Common\Images\$fileName");
        
        $result = $image_path;

        $result = $this->productRepository->ReciveImage($id, $image_path);

        $destination = $imageDir . basename($fileName);

        if(move_uploaded_file($fileTmpName, $destination)){
            Response::success(true, "Imagem movida com sucesso!", 200);
        } else  {
            Response::error(false, "Falha ao mover imagem!", 500);
        }
        
    }

    public function getAll()
    {
        $result = $this->productRepository->getAllProducts();

        Response::success($result, "Requisição realizada com sucesso", 200);
    }

    public function getById(int $idProduct)
    {
        try {

            $result = $this->productRepository->getProductById($idProduct);
            
            Response::success( $result, "Requisição realizada com sucesso", 200);
            
        } catch (ResourceNotFoundException $e) {
            
            Response::error($e,  $e->getMessage(), 404);
            
        }
        
    }

    public function update(int $idProduct, object $data)
    {
        $product = $this->assamblerProduct($data);
        $product->setId($idProduct);

        $result = $this->productRepository->updateProduct($product);

        if (!$result) {
            Response::error($result , "Erro ao atualizar o Produto. Verifique seus dados de entrada", 400);
        }

        Response::success($result, "Produto atualiado com sucesso", 200);
    }

    public function discontinue(int $idProduct)
    {
        $result = $this->productRepository->discontinueProduct($idProduct);

        if (!$result) {
            Response::error($result, "Erro ao descontinuar o Produto", 500);
        }

        Response::success($result, "Produto descontinuado com sucesso", 200);
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
