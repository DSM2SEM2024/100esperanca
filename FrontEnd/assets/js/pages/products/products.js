import { getOrCreateMainElement } from "../../components/main";
import { getAllProducts } from "../../services/products";
import { renderProducts } from "./components/render-products";

let products;

async function fetchProducts() {
    try {
        products = await getAllProducts();
        console.log(products);
        
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

fetchProducts();



// Dados simulados localmente
export const produtosLocais = [
    {
        id: 1,
        nome: "Camiseta Branca",
        descricao: "Camiseta básica",
        preco: "R$59,99",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        nome: "Bolsa de Couro",
        descricao: "Bolsa estilosa",
        preco: "R$89,99",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        nome: "Caderno",
        descricao: "Caderno de 200 folhas",
        preco: "R$39,99",
        img: "https://via.placeholder.com/150"
    }
];

// Função principal para renderizar a tela de produtos
export function telaProdutosHtml() {

    fetchProducts();
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
                <!-- Produtos serão renderizados aqui -->
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

    function navegarParaDetalhes(id) {
        localStorage.setItem("produtoId", id);
        window.location.hash = `#productDetails/${id}`;
    }

    const productContainer = document.querySelector("#productContainer .row");
    if (productContainer) {
        productContainer.innerHTML = renderProducts(products);
    } else {
        console.error("Container de produtos não encontrado");
    }
}
