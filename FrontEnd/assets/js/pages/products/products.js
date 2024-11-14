import { getOrCreateMainElement } from "../../components/main";
import camisetaImg from "./imgs/camiseta.jpg";
import bolsaImg from "./imgs/bolsa.jpg";
import cadernoImg from "./imgs/caderno.jpg";

// Definir os produtos
const cadernos = [
    { nome: "Caderno 1", descricao: "Caderno com a arte X", img: cadernoImg, preco: "50,00 R$" },
    { nome: "Caderno 2", descricao: "Caderno com a arte Y", img: cadernoImg, preco: "50,00 R$" },
    { nome: "Caderno 3", descricao: "Caderno com a arte Z", img: cadernoImg, preco: "50,00 R$" }
];

const camisetas = [
    { nome: "Estampa Camisa A", descricao: "Camiseta 1", img: camisetaImg, preco: "45,00 R$" },
    { nome: "Estampa Camisa B", descricao: "Camiseta 2", img: camisetaImg, preco: "45,00 R$" },
    { nome: "Estampa Camisa C", descricao: "Camiseta 3", img: camisetaImg, preco: "45,00 R$" },
    { nome: "Estampa Camisa D", descricao: "Camiseta 4", img: camisetaImg, preco: "45,00 R$" },
    { nome: "Estampa Camisa E", descricao: "Camiseta 5", img: camisetaImg, preco: "45,00 R$" }
];

const bolsas = [
    { nome: "Estampa Bolsa A", descricao: "Bolsa 1", img: bolsaImg, preco: "75,00 R$" },
    { nome: "Estampa Bolsa B", descricao: "Bolsa 2", img: bolsaImg, preco: "75,00 R$" },
    { nome: "Estampa Bolsa C", descricao: "Bolsa 3", img: bolsaImg, preco: "75,00 R$" },
    { nome: "Estampa Bolsa D", descricao: "Bolsa 4", img: bolsaImg, preco: "75,00 R$" }
];

const todosProdutos = [...camisetas, ...bolsas, ...cadernos];

const PRODUTOS_POR_PAGINA = 6; // Define quantos produtos por página

// Variáveis globais para o controle da navegação
let paginas = []; 
let totalDePaginas = 0;
let paginaAtual = 0;

// Função para dividir os produtos em páginas
function dividirProdutosEmPaginas(produtos) {
    const paginas = [];
    for (let i = 0; i < produtos.length; i += PRODUTOS_POR_PAGINA) {
        paginas.push(produtos.slice(i, i + PRODUTOS_POR_PAGINA));
    }
    return paginas;
}

// Função para renderizar os produtos em HTML
function renderProducts(products) {
    return products.map(product => `
        <div class="col">
            <div class="card shadow-sm hover-card border-0">
                <img src="${product.img}" class="card-img-top card-img-custom" alt="${product.nome}">
                <div class="card-body border rounded-bottom border-success">
                    <h5 class="card-title text-success">${product.nome}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text fs-5 mb-0">${product.descricao}</p>
                        <span class="fw-bold text-end">${product.preco}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-success w-75 mt-2" onclick='adicionarAoCarrinho(${JSON.stringify(product)})'>
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Função para atualizar o carrinho no localStorage
function getCarrinho() {
    const carrinho = localStorage.getItem("carrinho");
    return carrinho ? JSON.parse(carrinho) : [];
}

function setCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarAoCarrinho(product) {
    const carrinho = getCarrinho();
    carrinho.push(product);
    setCarrinho(carrinho);
    alert("Produto adicionado ao carrinho!");
}

// Função para renderizar a página de produtos
function renderizarPagina(produtosDaPagina) {
    const productContainer = document.querySelector("#productContainer .row");
    if (productContainer) {
        productContainer.innerHTML = renderProducts(produtosDaPagina);
    } else {
        console.error("Container de produtos não encontrado");
    }
}

// Função para atualizar a navegação
function atualizarPaginacao() {
    const paginationContainer = document.querySelector(".pagination");
    let paginasHtml = '';

    // Adiciona o botão "Previous"
    paginasHtml += `
        <li class="page-item ${paginaAtual === 0 ? 'disabled' : ''}">
            <a class="page-link text-success" href="#" onclick="irParaPagina(${paginaAtual - 1})">Previous</a>
        </li>
    `;

    // Adiciona os links das páginas
    for (let i = 0; i < totalDePaginas; i++) {
        paginasHtml += `
            <li class="page-item ${i === paginaAtual ? 'active' : ''}">
                <a class="page-link text-success" href="#" onclick="irParaPagina(${i})">${i + 1}</a>
            </li>
        `;
    }

    // Adiciona o botão "Next"
    paginasHtml += `
        <li class="page-item ${paginaAtual === totalDePaginas - 1 ? 'disabled' : ''}">
            <a class="page-link text-success" href="#" onclick="irParaPagina(${paginaAtual + 1})">Next</a>
        </li>
    `;

    // Atualiza a navegação
    if (paginationContainer) {
        paginationContainer.innerHTML = paginasHtml;
    } else {
        console.error("Container de navegação não encontrado");
    }
}

// Função de navegação entre as páginas
window.irParaPagina = function (numeroPagina) {
    if (numeroPagina < 0 || numeroPagina >= totalDePaginas) return;

    paginaAtual = numeroPagina;
    const produtosDaPagina = paginas[paginaAtual];
    renderizarPagina(produtosDaPagina);
    atualizarPaginacao();
}

// Função principal da tela de produtos
export function telaProdutosHtml2() {
    // Monta a estrutura HTML
    const telaProdutos2 = `
        <nav class="navbar navbar-expand-lg d-flex bg-body-tertiary bg-opacity-75" id="navFiltros">
            <section class="container-fluid d-flex justify-content-evenly">
                <div class="">
                    <h2 class="text-success fs-1">Produtos</h2>
                </div>
                <div class="row gap-3" id="navDrop">
                    <select class="form-select form-select-sm col selectWidth" id="filterSelect">
                        <option selected value="all">Todos</option>
                        <option value="Camisetas">Camisetas</option>
                        <option value="Bolsas">Bolsas</option>
                        <option value="Cadernos">Cadernos</option>
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
            <ul class="pagination justify-content-end">
                <!-- A navegação será renderizada aqui -->
            </ul>
        </nav>
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

    // Adiciona o filtro de categorias
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

window.adicionarAoCarrinho = adicionarAoCarrinho;