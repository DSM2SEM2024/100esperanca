import { getOrCreateMainElement } from "../../components/main";

function getCarrinho() {
    const carrinho = localStorage.getItem("carrinho");
    return carrinho ? JSON.parse(carrinho) : [];
}

function atualizarCarrinho() {
    const cartItems = document.getElementById('cartItems');
    const subtotalElem = document.getElementById('subtotal');
    const freteElem = document.getElementById('frete');
    const totalElem = document.getElementById('total');

    cartItems.innerHTML = '';
    let subtotal = 0;
    const frete = 20;

    const carrinho = getCarrinho();

    carrinho.forEach((item, index) => {
        if (!item) {
            return;
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.img}" alt="${item.nome}" class="cart-item-img"></td>
            <td>${item.nome}</td>
            <td>${item.preco}</td>
            <td><button class="btn btn-danger btn-sm remove-item-btn" data-index="${index}">Remover</button></td>
        `;
        cartItems.appendChild(row);
        subtotal += parseFloat(item.preco.replace(",", "."));
    });

    subtotalElem.textContent = `R$ ${subtotal.toFixed(2)}`;
    freteElem.textContent = `R$ ${frete.toFixed(2)}`;
    totalElem.textContent = `R$ ${(subtotal + frete).toFixed(2)}`;

    document.querySelectorAll('.remove-item-btn').forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const carrinho = getCarrinho();
            carrinho.splice(index, 1);
            setCarrinho(carrinho);
            atualizarCarrinho();
        });
    });
}

function setCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function concluirCompra() {
    const modal = new bootstrap.Modal(document.getElementById('modalConfirmacaoCompra'));
    modal.show();

    document.getElementById('okButton').onclick = function() {
        localStorage.removeItem('carrinho');
        modal.hide();
        // Redireciona para a página de conclusão de pagamento
        window.location.href = '/#pagamento';
    };
}

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