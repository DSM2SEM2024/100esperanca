<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\Responses\Response;
use Pi\Visgo\Common\Validator;
use Pi\Visgo\Model\Order;
use Pi\Visgo\Repository\OrderRepository;

class OrderController
{

    private $orderRepository;

    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    public function create($data)
    {
        $isValid = Validator::validatorObjectInput($data);
        $id_user = isset($data->id_user) ? $data->id_user : 1;

        if (!$isValid) {
            Response::error($isValid, "Erro ao cadastras encomenda. Verifique seus dados de entrada", 400);
        }

        $orderModel = $this->assemblerOrder($data);


        $result = $this->orderRepository->createOrder($orderModel);
        $orderId = $this->orderRepository->createOrder($orderModel);

        if ($orderId) {

            if (isset($data->art_ids) && is_array($data->art_ids)) {
                foreach ($data->art_ids as $artId) {
                    $this->orderRepository->insertArtinOrder($orderId, $artId);
                }
            }
            Response::success($result, "Encomenda criado com sucesso.", 201);

        } else {
            Response::error($result, "Erro ao criar o pedido.", 500);
        }
    }

    public function update($id, $data)
    {
        $isValid = Validator::validatorObjectInput($data);

        if (!$isValid) {
            Response::error($isValid, "Erro ao atualziar a encomenda. Verifique seus dados de entrada", 400);
        }

        $orderModel = $this->assemblerOrder($data);

        $result = $this->orderRepository->updateOrder($id, $orderModel);

        if (!$result) {
            Response::error($result, "Erro ao atualizar o pedido.", 500);
        }

        Response::success($result, "Encomenda atualizada com sucesso", 200);
    }

    public function getAll()
    {
        $result = $this->orderRepository->getAllOrder();
        Response::success($result, "Requisição realizada com sucesso", 200);
    }

    public function getById($id)
    {
        $result = $this->orderRepository->getOrderById($id);

        if (!$result) {
            Response::error($result, "Pedido não encontrado.", 404);
        }

        Response::success($result, "Resquisição realizada com sucesso", 200);
    }

    public function finishOrder($id)
    {

        $result = $this->orderRepository->finishOrderById($id);

        if (!$result) {
            Response::error($result, "Erro ao finalizar o pedido.", 500);
        }

        Response::success($result, "Pedido finalizado com sucesso.", 200);
    }

    public function reopenOrder($id)
    {
        $result = $this->orderRepository->openOrderById($id);

        if (!$result) {
            Response::error($result, "Erro ao reabrir o pedido.", 500);
        }

        Response::success($result, "Pedido reaberto com sucesso.", 200);
    }

    public function getAllOrderFromArt()
    {
        $result = $this->orderRepository->getAllOrderArts();

        if (!$result) {
            Response::error($result, "Nenhuma associação de arte encontrada.", 404);
        }

        Response::success($result, "Requisição realizada com sucesso", 200);
    }


    public function addArtToOrder($order, $arts)
    {
        $result = $this->orderRepository->insertArtInOrder($order, $arts);

        if (!$result) {
            Response::error($result, "Erro ao adicionar arte(s) ao pedido.", 500);
        }

        Response::success($result, "Arte(s) adicionada(s) ao pedido.", 200);
    }



    public function removeArtFromOrder($order, $art)
    {
        $result = $this->orderRepository->deleteArtFromOrder($order, $art);

        if (!$result) {
            Response::error($result, "Erro ao remover arte do pedido.", 500);
        }

        Response::success($result, "Arte removida do pedido.", 200);
    }

    private function assemblerOrder(object $data): Order
    {
        $order = new Order();
        return $order->setdateTimeOrder($data->date_time_order)
            ->setDescription($data->description)
            ->setIdUser($data->id_user);
    }
}
