import { getOrCreateMainElement } from "../../components/main";
import { getCarrinho, setCarrinho, addToCarrinho } from "../../functions/cartManagement";
import { renderProducts } from "./components/card";
import { cadernos, camisetas, bolsas, todosProdutos } from "./components/constsProdutos";

const produtosPorPagina = 6;

let paginas = []; 
let totalDePaginas = 0;
let paginaAtual = 0;

function dividirProdutosEmPaginas(produtos) {
    const paginas = [];
    for (let i = 0; i < produtos.length; i += produtosPorPagina) {
        paginas.push(produtos.slice(i, i + produtosPorPagina));
    }
    return paginas;
}



function renderizarPagina(produtosDaPagina) {
    const productContainer = document.querySelector("#productContainer .row");
    if (productContainer) {
        productContainer.innerHTML = renderProducts(produtosDaPagina);
    } else {
        console.error("Container de produtos não encontrado");
    }
}

function atualizarPaginacao() {
    const paginationContainer = document.querySelector(".pagination");
    let paginasHtml = '';

    paginasHtml += `
        <li class="page-item ${paginaAtual === 0 ? 'disabled' : ''}">
            <a class="page-link text-success" href="#produtos" onclick="irParaPagina(${paginaAtual - 1})">Anterior</a>
        </li>
    `;

    for (let i = 0; i < totalDePaginas; i++) {
        paginasHtml += `
            <li class="page-item ${i === paginaAtual ? 'active' : ''}">
                <a class="page-link text-success" href="#produtos" onclick="irParaPagina(${i})">${i + 1}</a>
            </li>
        `;
    }

    paginasHtml += `
        <li class="page-item ${paginaAtual === totalDePaginas - 1 ? 'disabled' : ''}">
            <a class="page-link text-success" href="#produtos" onclick="irParaPagina(${paginaAtual + 1})">Próxima</a>
        </li>
    `;

    if (paginationContainer) {
        paginationContainer.innerHTML = paginasHtml;
    } else {
        console.error("Container de navegação não encontrado");
    }
}

window.irParaPagina = function (numeroPagina) {
    if (numeroPagina < 0 || numeroPagina >= totalDePaginas) return;

    paginaAtual = numeroPagina;
    const produtosDaPagina = paginas[paginaAtual];
    renderizarPagina(produtosDaPagina);
    atualizarPaginacao();

    const productContainer = document.querySelector("h2.text-success");
    if (productContainer) {
        productContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

export function telaProdutosHtml() {
    const telaProdutos2 = `
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

        <nav aria-label="Page navigation example">
            <ul class="pagination pe-3 justify-content-center">
                <!-- A navegação será renderizada aqui -->
            </ul>
        </nav>

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
main.innerHTML = telaProdutos2;

// Inicializa e divide os produtos em páginas
paginas = dividirProdutosEmPaginas(todosProdutos);  // Inicializa as páginas com todos os produtos
totalDePaginas = paginas.length;
paginaAtual = 0;

// Renderiza a primeira página de produtos e a navegação
renderizarPagina(paginas[paginaAtual]);
atualizarPaginacao();

const filterSelect = document.getElementById("filterSelect");
filterSelect.addEventListener("change", (event) => {
    let filteredProducts;
    const selectedCategory = event.target.value;

    if (selectedCategory === "Camisetas") {
        filteredProducts = camisetas;
    } else if (selectedCategory === "Bolsas") {
        filteredProducts = bolsas;
    } else if (selectedCategory === "Cadernos") {
        filteredProducts = cadernos;
    } else {
        filteredProducts = todosProdutos;
    }

    // Atualiza os produtos e a navegação
    paginas = dividirProdutosEmPaginas(filteredProducts);
    totalDePaginas = paginas.length;
    paginaAtual = 0; // Resetar para a primeira página após o filtro
    renderizarPagina(paginas[paginaAtual]);
    atualizarPaginacao();
});
}

function navegarParaDetalhes(id) {
localStorage.setItem("produtoId", id);
window.location.hash = `#productDetails/${id}`;
}

window.addToCarrinho = addToCarrinho;
window.navegarParaDetalhes = navegarParaDetalhes;