import { getOrCreateMainElement } from "../../components/main";

function getImagePath(nomeImagem) {
    return `/pages/teste/imgs/${nomeImagem}`;
}


const camisetas = [
    { nome: "Estampa A", descricao: "Camiseta 1", img: getImagePath("camiseta.jpg") },
    { nome: "Estampa B", descricao: "Camiseta 2", img: "" },
    { nome: "Estampa C", descricao: "Camiseta 3", img: "" },
    { nome: "Estampa D", descricao: "Camiseta 4", img: "" },
    { nome: "Estampa E", descricao: "Camiseta 5", img: "" },
    { nome: "Estampa F", descricao: "Camiseta 6", img: "" }
];

export function telaProdutosHtml2() {
    const telaProdutos2 = `
    <nav class="navbar navbar-expand-lg d-flex bg-body-tertiary bg-opacity-75" id="navFiltros">
        <section class="container-fluid d-flex justify-content-evenly">
            <div class="ms-5 pt-2">
                <h2 class="text-success">Produtos</h2>
            </div>
            <div class="row gap-3" id="navDrop">
                <select class="form-select form-select-sm col selectWidth" id="filterSelect">
                    <option selected value="all">Todos</option>
                    <option value="Camisetas">Camisetas</option>
                    <option value="Bolsas">Bolsas</option>
                </select>
            </div>
        </section> 
    </nav>
    <section class="container" id="productContainer">
        <div class="row row-cols-1 row-cols-md-3 g-4 p-4 justify-content-evenly">
            ${renderProducts(camisetas)}
        </div>
    </section>`;

    const main = getOrCreateMainElement();
    main.classList = null;
    main.innerHTML = telaProdutos2;

navFiltros.style.setProperty('background-color', '#5ABC49', 'important');
navFiltros.style.setProperty('opacity', '75%', 'important');
navFiltros.style.setProperty('justify-content', 'between')
navDrop.style.setProperty('margin-right', '5px', 'important');
navDrop.style.setProperty('margin-top', '5px', 'important');

const filterSelect = document.getElementById("filterSelect");
    filterSelect.addEventListener("change", (event) => {
        const selectedCategory = event.target.value;
        const filteredProducts = selectedCategory === "Camisetas" ? camisetas : [];
        document.querySelector("#productContainer .row").innerHTML = renderProducts(filteredProducts);
    });
}

function renderProducts(products) {
    return products.map(product => `
        <div class="col">
            <div class="card">
                <img src="${product.img}" class="card-img-top" alt="${product.nome}">
                <div class="card-body border-top">
                    <h5 class="card-title text-success">${product.nome}</h5>
                    <p class="card-text">${product.descricao}</p>
                </div>
            </div>
        </div>
    `).join('');
}
