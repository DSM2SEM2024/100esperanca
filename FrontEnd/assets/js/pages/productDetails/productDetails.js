import { getOrCreateMainElement } from "../../components/main";
import { addToCarrinho, atualizarCarrinho, concluirCompra, getCarrinho, setCarrinho } from "../../functions/cartManagement";
import { cadernos, camisetas, bolsas, todosProdutos } from "../products/components/constsProdutos";

export function renderProductDetails(id) {
    const produto = [...camisetas, ...cadernos, ...bolsas].find((item) => item.id === parseInt(id));
    if (!produto) {
        document.getElementById("main").innerHTML = `
            <div class="alert alert-danger text-center">
                Produto não encontrado.
            </div>
        `;
        return;
    }

    document.getElementById("main").innerHTML = `
        <div class="product-details container my-5">
            <div class="row justify-content-between align-items-center">
                <!-- Imagens do Produto -->
                <div class="col-md-6">
                    <img src="${produto.img}" alt="${produto.nome}" class="img-fluid rounded mb-3 shadow">
                </div>

                <!-- Detalhes do Produto -->
                <div class="col-md-5 bg-white p-4 rounded shadow">
                    <h2 class="fw-bold">${produto.nome}</h2>
                    <p class="text-success fs-3 fw-bold">${produto.preco} <small class="text-muted text-decoration-line-through"></small></p>
                    <p class="text-secondary">${produto.descricao}</p>

                    <button class="btn btn-success w-100 fw-bold mb-4" addToCarrinho(${JSON.stringify(produto)})">Adicionar ao Carrinho</button>

                    <!-- Simulação de Frete -->
                    <h5>Simule o Frete</h5>
                    <div class="mb-3">
                        <label for="cep" class="form-label">Digite seu CEP:</label>
                        <input type="text" class="form-control" id="cep" placeholder="Ex: 12345-678">
                    </div>
                    <button class="btn btn-outline-success w-100" onclick="calculateFrete()">Calcular Frete</button>
                    <div id="freteResult" class="mt-3"></div>

                    <!-- Cupom de Desconto -->
                    <h5 class="mt-4">Cupom de Desconto</h5>
                    <div class="mb-3">
                        <label for="coupon" class="form-label">Digite o código do cupom:</label>
                        <input type="text" class="form-control" id="coupon" placeholder="Ex: DESCONTO10">
                    </div>
                    <button class="btn btn-outline-success w-100" onclick="applyCoupon()">Aplicar Cupom</button>
                    <div id="couponResult" class="mt-3"></div>
                </div>
            </div>
        </div>
    `;
}

window.addToCarrinho = function() {
    const produto = JSON.parse(localStorage.getItem('produtoSelecionado'));
    addToCarrinho(produto);
};

export function render_produtos() {
    renderProductDetails();
}

window.renderProductDetails = renderProductDetails;
