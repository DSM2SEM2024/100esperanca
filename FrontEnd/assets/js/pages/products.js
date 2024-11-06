import { getOrCreateMainElement } from "../components/main";

import camiseta from "/assets/imgs/camiseta.jpg";


export function telaProdutosHtml () {
    const telaProdutos = `
    <nav class="navbar navbar-expand-lg d-flex bg-body-tertiary bg-opacity-75" id="navFiltros">
        <section class="container-fluid d-flex justify-content-evenly">
            <form class="d-flex" role="search">
                <div class="input-group">
                    <input class="form-control form-control-sm" type="search" placeholder="Busca" aria-label="Search">
                        <span class="btn-success">   
                            <button class="btn btn-secundary" type="submit">
                                <i class="bi bi-search"></i>
                            </button>
                        </span>
                </div>
            </form>
            
        <div class="row gap-3" id="navDrop">
            <select class="form-select form-select-sm col selectWidth">
                <option selected>Filtros</option>
                <option value="1">Camisetas</option>
                <option value="2">Bolsas</option>
                <option value="3">Cadernos</option>
            </select>
            <select class="form-select form-select-sm col h-50 t-3 selectWidth">
                <option selected>Artes</option>
                <option value="1">Camisetas</option>
                <option value="2">Bolsas</option>
                <option value="3">Cadernos</option>
            </select>
            <select class="form-select form-select-sm col h-50 selectWidth">
                <option selected>Tamanho</option>
                <option value="1">Camisetas</option>
                <option value="2">Bolsas</option>
                <option value="3">Cadernos</option>
            </select>
        </section> 
    </nav>    
    
    <div class="ms-5 pt-2">
        <h2 class="text-success">Produtos</h2>
    </div>

<section class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4  p-4 justify-content-evenly">
        <div class="col">
            <div class="card">
                <img src="${camiseta}" class="card-img-top" alt="">
                    <div class="card-body border-top">
                        <h5 class="card-title text-success">Estampa A</h5>
                        <p class="card-text">Camiseta 1</p>
                    </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="${camiseta}" class="card-img-top" alt="">
                    <div class="card-body border-top">
                        <h5 class="card-title text-success">Estampa B</h5>
                        <p class="card-text">Camiseta 2</p>
                    </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="${camiseta}" class="card-img-top" alt="">
                    <div class="card-body border-top">
                        <h5 class="card-title text-success">Estampa C</h5>
                        <p class="card-text">Camiseta 3 </p>
                    </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="${camiseta}" class="card-img-top" alt="">
                    <div class="card-body border-top">
                        <h5 class="card-title text-success">Estampa D</h5>
                        <p class="card-text">Camiseta 4</p>
                    </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="${camiseta}" class="card-img-top" alt="">
                    <div class="card-body border-top">
                        <h5 class="card-title text-success">Estampa E</h5>
                        <p class="card-text">Camiseta 5</p>
                    </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="${camiseta}" class="card-img-top" alt="">
                    <div class="card-body border-top">
                        <h5 class="card-title text-success">Estampa F</h5>
                        <p class="card-text">Camiseta 6</p>
                    </div>
            </div>
        </div>
        
    </div>
</section>
`;
const main = getOrCreateMainElement();
main.innerHTML = telaProdutos;
main.classList = null;

navFiltros.style.setProperty('background-color', '#5ABC49', 'important');
navFiltros.style.setProperty('opacity', '75%', 'important');
navFiltros.style.setProperty('justify-content', 'between')
navDrop.style.setProperty('margin-right', '5px', 'important');
navDrop.style.setProperty('margin-top', '5px', 'important');


}