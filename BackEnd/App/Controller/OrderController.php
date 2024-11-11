<?php
namespace Pi\Visgo\Controller;

use Pi\Visgo\Common\ProblemAndFiledError;
use Pi\Visgo\Common\ResponseAssemblerError;
use Pi\Visgo\Common\ResponseAssemblerSuccess;
use Pi\Visgo\Common\Validator;
use Pi\Visgo\Model\Order;
use Pi\Visgo\Repository\OrderRepository;

class OrderController {

    private $orderRepository;

    public function __construct(OrderRepository $orderRepository) {
        $this->orderRepository = $orderRepository;
    }

    public function create($data) {
        $isValid = Validator::validationOrder($data);
        $id_user = isset($data->id_user) ? $data->id_user : 1;

        if (!$isValid) {
            ResponseAssemblerError::response(400, ProblemAndFiledError::getFieldsError());
            return;
        }

        $orderModel = new Order($data->date_time_order, $data->description, $data->is_finished, $id_user);
        $result = $this->orderRepository->createOrder($orderModel);
        $orderId = $this->orderRepository->createOrder($orderModel);

        if ($orderId) {

            if (isset($data->art_ids) && is_array($data->art_ids)) {
                foreach ($data->art_ids as $artId) {
                    $this->orderRepository->insertArtinOrder($orderId, $artId);
                }
            }
            ResponseAssemblerSuccess::response(201, "Pedido criado com sucesso.");

        } else {
            ResponseAssemblerError::response(500, "Erro ao criar o pedido.");
        }
    }

    public function update($id, $data) {
        $isValid = Validator::validationOrder($data);

        if (!$isValid) {
            ResponseAssemblerError::response(400, ProblemAndFiledError::getFieldsError());
            return;
        }

        $orderModel = new Order(
            $data->date_time_order,
            $data->description,
            $data->is_finished,
            $data->id_user
        );

        $result = $this->orderRepository->updateOrder($id, $orderModel);

        if ($result) {
            ResponseAssemblerSuccess::response(200, $result);
        } else {
            ResponseAssemblerError::response(500, "Erro ao atualizar o pedido.");
        }
    }

    public function getAll() {
        $result = $this->orderRepository->getAllOrder();
        ResponseAssemblerSuccess::response(200, $result);
    }

    public function searchById($id) {
        $result = $this->orderRepository->getOrderById($id);

        if (!$result) {
            ResponseAssemblerError::response(404, "Pedido não encontrado.");
            return;
        }

        ResponseAssemblerSuccess::response(200, $result);
    }

    public function delete($id) {
        $result = $this->orderRepository->deleteOrderById($id);

        if ($result) {
            ResponseAssemblerSuccess::responseDelete(200);
        } else {
            ResponseAssemblerError::responseDelete(500);
        }
    }

    public function finishOrder($id) {

        $result = $this->orderRepository->finishOrderById($id);

        if ($result) {
            ResponseAssemblerSuccess::response(200, "Pedido finalizado com sucesso.");
        } else {
            ResponseAssemblerError::response(500, "Erro ao finalizar o pedido.");
        }
    }

    public function reopenOrder($id) {
        $result = $this->orderRepository->openOrderById($id);

        if ($result) {
            ResponseAssemblerSuccess::response(200, "Pedido reaberto com sucesso.");
        } else {
            ResponseAssemblerError::response(500, "Erro ao reabrir o pedido.");
        }
    }

    public function getAllOrderFromArt() {
        $result = $this->orderRepository->getAllOrderArts();
    
        if (!$result) {
            ResponseAssemblerError::response(404, "Nenhuma associação de arte encontrada.");
            return;
        }
    
        ResponseAssemblerSuccess::response(200, $result);
    }
    

    public function addArtToOrder($order, $arts) {
        $result = $this->orderRepository->insertArtInOrder($order, $arts);
    
        if ($result) {
            ResponseAssemblerSuccess::response(200, "Arte(s) adicionada(s) ao pedido.");
        } else {
            ResponseAssemblerError::response(500, "Erro ao adicionar arte(s) ao pedido.");
        }
    }
    
    

    public function removeArtFromOrder($order, $art) {
        $result = $this->orderRepository->deleteArtFromOrder($order, $art);

        if ($result) {
            ResponseAssemblerSuccess::response(200, "Arte removida do pedido.");
        } else {
            ResponseAssemblerError::response(500, "Erro ao remover arte do pedido.");
        }
    }
}
