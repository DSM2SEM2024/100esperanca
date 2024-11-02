import { getOrCreateMainElement } from "../components/main";

export function telaProdutosHtml () {
    const telaProdutos = `
    <nav class="navbar bg-body-tertiary bg-opacity-75" id="navFiltros">
        <section class="container-fluid">
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
        </div>    
    </nav>    
    
`;
const main = getOrCreateMainElement();
main.classList = "h-75"
main.innerHTML = telaProdutos;


navFiltros.style.setProperty('background-color', '#5ABC49', 'important');
navFiltros.style.setProperty('opacity', '75%', 'important');
navDrop.style.setProperty('margin-right', '5px', 'important');
navDrop.style.setProperty('margin-top', '5px', 'important');
}