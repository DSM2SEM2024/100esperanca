import { getOrCreateMainElement } from "../components/main";
export function produtoscompra() {
    const produtoshtml=
`<body class="bg-light">

    <!-- Parte de comprar produto -->
    <div class="container my-5">
        <div class="row justify-content-between align-items-center">
            <!-- Imagens do Produto -->
            <div class="col-md-6">
                <img src="../../imgs/camisachave.jpg" alt="Produto Principal" class="img-fluid rounded mb-3 shadow">
                <div class="d-flex gap-3">
                    <img src="https://via.placeholder.com/200x200/28a745/fff?text=Imagem+1" alt="Imagem 1" class="img-fluid rounded">
                    <img src="https://via.placeholder.com/200x200/28a745/fff?text=Imagem+2" alt="Imagem 2" class="img-fluid rounded">
                </div>
            </div>

            <!-- Detalhes do Produto -->
            <div class="col-md-5 bg-white p-4 rounded shadow">
                <h2 class="fw-bold">Camisa Bala</h2>
                <p class="text-success fs-3 fw-bold">R$ 79,00 <small class="text-muted text-decoration-line-through">R$ 129,00</small></p>
                <p class="text-secondary">Essa camisa de maloqueiro original é muito boa, produto de qualidade, só não conhece quem está sem internet.</p>

                <!-- Quantidade e Adicionar ao Carrinho -->
                <div class="mb-3">
                    <label for="quantity" class="form-label">Quantidade:</label>
                    <input type="number" class="form-control" id="quantity" value="1" min="1">
                </div>

                <button class="btn btn-success w-100 fw-bold mb-4" onclick="addToCart()">Adicionar ao Carrinho</button>

                <!-- Formas de Pagamento -->
                <h5>Formas de Pagamento</h5>
                <div class="d-flex gap-2 mb-3">
                    <img src="../../imgs/Paypal.jpg" alt="Paypal" class="img-fluid" style="width: 40px;">
                    <img src="../../imgs/mastercard-og-image.png" alt="MasterCard" class="img-fluid" style="width: 40px;">
                    <img src="../../imgs/visa.png" alt="Visa" class="img-fluid" style="width: 40px;">
                    <img src="../../imgs/boleto.jpg" alt="Boleto" class="img-fluid" style="width: 40px;">
                </div>

                <!-- Simulação de Frete -->
                <h5>Simule o Frete</h5>
                <div class="mb-3">
                    <label for="cep" class="form-label">Digite seu CEP:</label>
                    <input type="text" class="form-control" id="cep" placeholder="Ex: 12345-678">
                </div>
                <button class="btn btn-outline-success w-100" onclick="calculateFrete()">Calcular Frete</button>
                <div id="freteResult" class="mt-3"></div>
            </div>
        </div>
    </div>
`
}
const main = produtoscompra();
    main.classList = "d-flex flex-column align-items-center h-100 "
    main.innerHTML = criarUsuario