import { addToCarrinho } from "../../../functions/cartManagement";
import { getAllProducts } from "../../../services/products-backend";

function navegarParaDetalhes(id) {
    localStorage.setItem("produtoId", id);
    window.location.hash = `#productDetails/${id}`;
    }
    

export function renderProducts(produtos) {
    
    return produtos.map((produto) => `
        <div class="col" onclick='navegarParaDetalhes(${produto.id})'>
            <div class="card product-card shadow-sm hover-card border-0">
                <img src="${produto.img}" class="card-img-top card-img-custom" alt="${produto.nome}">
                <div class="card-body border rounded-bottom border-success">
                    <h5 class="card-title text-success">${produto.nome}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text fs-5 mb-0">${produto.descricao}</p>
                        <span class="fw-bold text-end">${produto.preco}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-success w-75 mt-2" onclick='event.stopPropagation(); addToCarrinho(${JSON.stringify(produto)})'>
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join(''); 
    
}
