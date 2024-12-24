import { getOrCreateMainElement } from "../../components/main";
import { productDetailsScreen } from "./pages/productDetails";
import { renderCardsProducts } from "./components/renderCardsProducts";


export async function productScreen() {
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
    <section class="justify-content-center container d-flex" id="productContainer">
  
                <div class="row gap-2 d-flexinline">
                </div>
      
    </section>
    `;

    const main = getOrCreateMainElement();
    main.innerHTML = telaProdutos;

    const productContainer = document.querySelector("#productContainer .row");

    if (productContainer) {
        productContainer.innerHTML = await renderCardsProducts();
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
        productDetailsScreen(id);
    }
}
