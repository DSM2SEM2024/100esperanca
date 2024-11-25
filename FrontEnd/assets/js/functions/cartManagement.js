export function getCarrinho() {
    const carrinho = localStorage.getItem("carrinho");
    return carrinho ? JSON.parse(carrinho) : [];
}

export function setCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

export function addToCarrinho(product) {
    const carrinho = getCarrinho();
    carrinho.push(product);
    setCarrinho(carrinho);

    const modal = new bootstrap.Modal(document.getElementById('modalCarrinho'));
    modal.show();


    const goToCartButton = document.querySelector(".modal-footer .btn-success");
    goToCartButton.onclick = function() {
        modal.hide();

        window.location.href = '/#cart';
    };
}
export function atualizarCarrinho() {
    const cartItems = document.getElementById('cartItems');
    const subtotalElem = document.getElementById('subtotal');
    const freteElem = document.getElementById('frete');
    const totalElem = document.getElementById('total');

    cartItems.innerHTML = '';
    let subtotal = 0;
    const frete = 20;

    const carrinho = getCarrinho();

    carrinho.forEach((item, index) => {
        if (!item) {
            return;
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.img}" alt="${item.nome}" class="cart-item-img"></td>
            <td>${item.nome}</td>
            <td>${item.preco}</td>
            <td><button class="btn btn-danger btn-sm remove-item-btn" data-index="${index}">Remover</button></td>
        `;
        cartItems.appendChild(row);
        subtotal += parseFloat(item.preco.replace(",", "."));
    });

    subtotalElem.textContent = `R$ ${subtotal.toFixed(2)}`;
    freteElem.textContent = `R$ ${frete.toFixed(2)}`;
    totalElem.textContent = `R$ ${(subtotal + frete).toFixed(2)}`;

    document.querySelectorAll('.remove-item-btn').forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const carrinho = getCarrinho();
            carrinho.splice(index, 1);
            setCarrinho(carrinho);
            atualizarCarrinho();
        });
    });
}
export function concluirCompra() {
    const modal = new bootstrap.Modal(document.getElementById('modalConfirmacaoCompra'));
    modal.show();

    document.getElementById('okButton').onclick = function() {
        localStorage.removeItem('carrinho');
        modal.hide();
        // Redireciona para a página de conclusão de pagamento
        window.location.href = '/#pagamento';
    };
}
