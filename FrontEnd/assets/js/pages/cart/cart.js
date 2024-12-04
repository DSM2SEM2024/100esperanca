import { getOrCreateMainElement } from "../../components/main";
import { atualizarCarrinho, concluirCompra } from "../../functions/cartManagement";

export function cartHtml() {
    const cart = `
        <section class="container my-5">
            <h1 class="text-center text-success mb-4">Carrinho de Compras</h1>
            <div class="row">
                <div class="col-lg-8">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Produtos no Carrinho</h5>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Imagem</th>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Preço</th>
                                        <th scope="col">Ação</th>
                                    </tr>
                                </thead>
                                <tbody id="cartItems">
                                    <!-- Itens serão inseridos aqui dinamicamente -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Resumo</h5>
                                <ul class="list-group mb-3">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>Subtotal: </strong>
                                        <span id="subtotal" class="badge bg-success">
                                            R$ 0,00
                                        </span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>Frete: </strong>
                                        <span id="frete">R$ 20,00</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>Total: </strong>
                                        <span id="total" class="badge bg-success">
                                            R$ 20,00
                                        </span>
                                    </li>
                                </ul>
                            <button class="btn btn-success w-100 mt-3" onclick="concluirCompra()">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="modal fade" id="modalConfirmacaoCompra" tabindex="-1" aria-labelledby="modalConfirmacaoCompraLabel" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalConfirmacaoCompraLabel">
                            Compra Concluída
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        Sua compra foi encaminhada com sucesso! Você será redirecionado para a página de pagamento.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="okButton">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const main = getOrCreateMainElement();
    main.classList = null;
    main.innerHTML = cart;

    atualizarCarrinho();

    window.concluirCompra = concluirCompra;
}