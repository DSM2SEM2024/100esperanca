import { getOrCreateMainElement } from "../../components/main";
import { renderProductDetails } from "../productDetails/productDetails";
import { renderProducts } from "./components/renderProducts";


export async function telaProdutosHtml() {
    const telaProdutos = `
        <nav class="navbar navbar-expand-lg d-flex bg-body-tertiary bg-opacity-75" id="navFiltros">
            <section class="container-fluid d-flex justify-content-evenly">
                <div class="">
                    <h2 class="text-success fs-1">
                        Produtos
                    </h2>
                </div>
                <div class="row gap-3" id="navDrop">
                    <select class="form-select form-select-sm col selectWidth" id="filterSelect">
                        <option selected value="all">
                            Todos
                        </option>
                        <option value="Camisetas">
                            Camisetas
                        </option>
                        <option value="Bolsas">
                            Bolsas
                        </option>
                        <option value="Cadernos">
                            Cadernos
                        </option>
                    </select>
                </div>
            </section> 
        </nav>

        <section class="container" id="productContainer">
            <div class="row row-cols-1 row-cols-md-3 g-4 p-4 justify-content-evenly">
                <!-- Cards de produtos serão renderizados aqui -->
            </div>
        </section>

         <div class="modal fade" id="modalCarrinho" tabindex="-1" aria-labelledby="modalCarrinhoLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-success" id="modalCarrinhoLabel">
                            Produto Adicionado ao Carrinho
                        </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        O produto foi adicionado ao seu carrinho.
                        <br>
                        Deseja ir para o carrinho ou continuar comprando?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Voltar a Navegação
                        </button>
                        <button type="button" class="btn btn-success" onclick="window.location.href = '/#cart';">
                            Ir para o Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const main = getOrCreateMainElement();
    main.classList = null;
    main.innerHTML = telaProdutos;

    const productContainer = document.querySelector("#productContainer .row");

    if (productContainer) {
        productContainer.innerHTML = await renderProducts();
    } else {
        console.error("Container de produtos não encontrado");
    }

    document.querySelectorAll('.card-container').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.getAttribute('product-id');
            navegarParaDetalhes(productId);
        });
    });

    function navegarParaDetalhes(id) {
        window.location.hash = `#productDetails/${id}`;
        renderProductDetails(id);
    }
}
