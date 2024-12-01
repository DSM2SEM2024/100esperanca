import { getOrCreateMainElement } from "../../../components/main";
import { getProductById } from "../../../services/productsService";

export async function productDetailsScreen(id) {

    try {
        const product = await fetchProduct(id);
        if (!product) {
            document.getElementById("main").innerHTML = `
                <div class="alert alert-danger text-center">
                    Produto não encontrado.
                </div>
            `;
            return;
        }

        const details = `
            <div class="product-details container my-5">
                <div class="row justify-content-between align-items-center">
                    <!-- Imagens do Produto -->
                    <div class="col-md-6">
                        <img src="${product.img}" alt="${product.name}" class="img-fluid rounded mb-3 shadow">
                    </div>

                    <!-- Detalhes do Produto -->
                    <div class="col-md-5 bg-white p-4 rounded shadow">
                        <h2 class="fw-bold">${product.name}</h2>
                        <p class="text-success fs-3 fw-bold">${product.price} <small class="text-muted text-decoration-line-through"></small></p>
                        <p class="text-secondary">${product.description}</p>

                        <button class="btn btn-success w-100 fw-bold mb-4" onclick='addToCarrinho(${JSON.stringify(product)})'>
                            Adicionar ao Carrinho
                        </button>

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

            <!-- Modal -->
            <div class="modal fade" id="modalCarrinho" tabindex="-1" aria-labelledby="modalCarrinhoLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-success" id="modalCarrinhoLabel">Produto Adicionado ao Carrinho</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            O produto foi adicionado ao seu carrinho.
                            <br>
                            Deseja ir para o carrinho ou continuar comprando?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continuar Comprando</button>
                            <button type="button" class="btn btn-success" onclick="window.location.href = '/#cart';">Ir para o Carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const main = getOrCreateMainElement();
        main.innerHTML = details;
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
        document.getElementById("main").innerHTML = `
            <div class="alert alert-danger text-center">
                Erro ao carregar o produto.
            </div>
        `;
    }
}

async function fetchProduct(id) {
    try {
        const product = await getProductById(id);
        return product;
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
        return null;
    }
}