import { getOrCreateMainElement } from "../../components/main";

export function cartHtml () {
    const cart = `
        <div class="container my-5">
            <h1 class="text-center mb-4">Carrinho de Compras</h1>

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
                            
                                </tbody>
                                </table>
                        </div>
                    </div>
                </div>

        <div class="col-lg-4">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Resumo do Carrinho</h5>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Subtotal
                            <span id="subtotal" class="badge bg-secondary">R$ 0,00</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Frete
                            <span id="frete" class="badge bg-secondary">R$ 0,00</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Total
                            <span id="total" class="badge bg-success">R$ 0,00</span>
                        </li>
                    </ul>
                    <button class="btn btn-verde w-100" onclick="concluirCompra()">Concluir Compra</button>
                </div>
            </div>
        </div>
    </div>
</div>
    `


    const main = getOrCreateMainElement();
    main.innerHTML = cart;
}