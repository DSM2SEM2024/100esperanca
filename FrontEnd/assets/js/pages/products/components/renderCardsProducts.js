import { getAllProducts } from "../../../services/productsService";

export async function renderCardsProducts() {
    const products = await getAllProducts();

    if (products.length === 0) { 
        console.log('Nenhum product encontrado.'); 
        return; 
    }

    return products.map((product) => `
         <div class="col-auto p-0 card-container" product-id="${product.id}">
            <div class="card product-card shadow-sm hover-card border-0">
                <img src="${product.img}" class="card-img-top card-img-custom" alt="${product.name}">
                <div class="card-body border rounded-bottom border-success">
                    <h5 class="card-title text-success">${product.name}</h5>
                    <div class=" d-flex justify-content-between align-items-center">
                        <p class="card-text fs-5 m-0">${product.type_product}</p>
                        <span class="fw-bold text-end">${product.price}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-success w-75 mt-2" onclick='event.stopPropagation(); addToCarrinho(${JSON.stringify(product)})'>
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}
