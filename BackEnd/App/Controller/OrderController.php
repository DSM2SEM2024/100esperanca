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

        if (!$isValid) {
            ResponseAssemblerError::response(400, ProblemAndFiledError::getFieldsError());
            return;
        }

        $orderModel = new Order(
            $data->date_time_order,
            $data->description
        );

        $result = $this->orderRepository->createOrder($orderModel);

        ResponseAssemblerSuccess::response(201, $result);
    }

    public function update($id, $data) {
        $isValid = Validator::validationOrder($data);

        if (!$isValid) {
            ResponseAssemblerError::response(400, ProblemAndFiledError::getFieldsError());
            return;
        }

        $orderModel = new Order(
            $data->date_time_order,
            $data->description
        );

        $result = $this->orderRepository->updateOrder($id, $orderModel);

        ResponseAssemblerSuccess::response(200, $result);
    }

    public function getAll() {
        $result = $this->orderRepository->getAllOrder();
        ResponseAssemblerSuccess::response(200, $result);
    }

    public function searchById($id) {
        $result = $this->orderRepository->getOrderById($id);
        ResponseAssemblerSuccess::response(200, $result);
    }

    public function delete($id) {
        if ($this->orderRepository->deleteOrderById($id)) {
            ResponseAssemblerSuccess::responseDelete(200);
        } else {
            ResponseAssemblerError::responseDelete(500);
        }
    }
}
