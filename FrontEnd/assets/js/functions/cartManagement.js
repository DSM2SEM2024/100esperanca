import { bolsas, cadernos, camisetas } from "../pages/products/components/constsProdutos";

export function getCarrinho() {
    const carrinho = localStorage.getItem("carrinho");
    return carrinho ? JSON.parse(carrinho) : [];
}

export function setCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

export function addToCarrinho(produto) {
    console.log(produto);
    
    const carrinho = getCarrinho();
    carrinho.push(produto);
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

    const carrinho = getCarrinho().filter(item => item);  // Filtra itens indefinidos

    carrinho.forEach((produto, index) => {
        if (!produto) {
            console.error(`Item at index ${index} is null or undefined`);
            return;
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${produto.img}" alt="${produto.nome}" class="cart-item-img"></td>
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td><button class="btn btn-danger btn-sm remove-item-btn" data-index="${index}">Remover</button></td>
        `;
        cartItems.appendChild(row);
        subtotal += parseFloat(produto.preco);
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
        window.location.href = '/#pagamento';
    };
}

window.addToCarrinho = addToCarrinho;