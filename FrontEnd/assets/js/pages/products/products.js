import { getOrCreateMainElement } from "../../components/main";
import camisetaImg from "./imgs/camiseta.jpg";
import bolsaImg from "./imgs/bolsa.jpg";
import cadernoImg from "./imgs/caderno.jpg";

const cadernos = [
    { nome: " Caderno 1", descricao: "Caderno com a arte X", img: cadernoImg, preco: "50,00 R$" },
    { nome: " Caderno 2", descricao: "Caderno com a arte Y", img: cadernoImg, preco: "50,00 R$" },
    { nome: " Caderno 3", descricao: "Caderno com a arte Z", img: cadernoImg, preco: "50,00 R$" }
];

const camisetas = [
    { nome: " Estampa Camisa A", descricao: "Camiseta 1", img: camisetaImg, preco: "45,00 R$" },
    { nome: " Estampa Camisa B", descricao: "Camiseta 2", img: camisetaImg, preco: "45,00 R$" },
    { nome: " Estampa Camisa C", descricao: "Camiseta 3", img: camisetaImg, preco: "45,00 R$" },
    { nome: " Estampa Camisa D", descricao: "Camiseta 4", img: camisetaImg, preco: "45,00 R$" },
    { nome: " Estampa Camisa E", descricao: "Camiseta 5", img: camisetaImg, preco: "45,00 R$" }
];

const bolsas = [
    { nome: "Estampa Bolsa A", descricao: "Bolsa 1", img: bolsaImg, preco: "75,00 R$" },
    { nome: "Estampa Bolsa B", descricao: "Bolsa 2", img: bolsaImg, preco: "75,00 R$" },
    { nome: "Estampa Bolsa C", descricao: "Bolsa 3", img: bolsaImg, preco: "75,00 R$" },
    { nome: "Estampa Bolsa D", descricao: "Bolsa 4", img: bolsaImg, preco: "75,00 R$" }
];

const todosProdutos = [...camisetas, ...bolsas, ...cadernos];

// Função para obter os itens do carrinho no localStorage
function getCarrinho() {
    const carrinho = localStorage.getItem("carrinho");
    return carrinho ? JSON.parse(carrinho) : [];
}

// Função para salvar os itens no carrinho no localStorage
function setCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Função para adicionar um produto ao carrinho e salvá-lo no localStorage
function adicionarAoCarrinho(produto) {
    const carrinho = getCarrinho();
    carrinho.push(produto);
    setCarrinho(carrinho);
    alert(`${produto.nome} foi adicionado ao carrinho!`);
}

export function telaProdutosHtml2() {
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
            ${renderProducts(todosProdutos)}
        </div>
    </section>`;

    const main = getOrCreateMainElement();
    main.classList = null;
    main.innerHTML = telaProdutos2;

    // Configurações de estilo do nav
    navFiltros.style.setProperty('background-color', '#5ABC49', 'important');
    navFiltros.style.setProperty('opacity', '75%', 'important');
    navFiltros.style.setProperty('justify-content', 'between');

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

        document.querySelector("#productContainer .row").innerHTML = renderProducts(filteredProducts);
    });
}

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