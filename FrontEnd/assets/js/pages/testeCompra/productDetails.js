function renderProductDetails(id) {
    const produto = camisetas.find((item) => item.id === parseInt(id));
    if (!produto) {
        document.getElementById("root").innerHTML = `
            <div class="alert alert-danger text-center">
                Produto não encontrado.
            </div>
        `;
        return;
    }

    document.getElementById("root").innerHTML = `
        <div class="product-details">
            <h1 class="text-success">${produto.nome}</h1>
            <img src="${produto.img}" alt="${produto.nome}" class="img-fluid">
            <p>${produto.descricao}</p>
            <span class="fw-bold fs-4">${produto.preco}</span>
        </div>
    `;

}
function navegarParaDetalhes(id) {
    location.hash = `#productDetails/${id}`;
}
