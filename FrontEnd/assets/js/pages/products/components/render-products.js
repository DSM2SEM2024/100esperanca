
export function renderProducts(produtos) {
    return produtos.map((produto) => `
        <div class="col" onclick='navegarParaDetalhes(${produto.id})'>
            <div class="card product-card shadow-sm hover-card border-0">
                <img src="${produto.img}" class="card-img-top card-img-custom" alt="${produto.name}">
                <div class="card-body border rounded-bottom border-success">
                    <h5 class="card-title text-success">${produto.name}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text fs-5 mb-0">${produto.type_product}</p>
                        <span class="fw-bold text-end">${produto.price}</span>
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


function navegarParaDetalhes(id) {
    localStorage.setItem("produtoId", id);
    window.location.hash = `#productDetails/${id}`;
}

