import { getOrCreateMainElement } from "../../components/main";

export function cartHtml () {
    const cart = `
        <div class="container my-5">
            <h1 class="text-center mb-4">Carrinho de Compras</h1>

            <div class="row">
                <div class="col-lg-8">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Produtos no Carrinho</h5>
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">Imagem</th>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Preço</th>
                                        <th scope="col">Ação</th>
                                    </tr>
                                    </thead>

                                <tbody id="cartItems">
                            
                                </tbody>
                                </table>
                        </div>
                    </div>
                </div>

        <div class="col-lg-4">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Resumo do Carrinho</h5>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Subtotal
                            <span id="subtotal" class="badge bg-success">R$ 0,00</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Frete
                            <span id="frete" class="badge bg-secondary">R$ 0,00</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Total
                            <span id="total" class="badge bg-success">R$ 0,00</span>
                        </li>
                    </ul>
                    <button class="btn btn-verde w-100" onclick="concluirCompra()">Concluir Compra</button>
                </div>
            </div>
        </div>
    </div>
</div>
    `

    let carrinho = [
        { nome: 'Produto 1', preco: 50, imagem: 'https://via.placeholder.com/100' },
        { nome: 'Produto 2', preco: 100, imagem: 'https://via.placeholder.com/100' },
        { nome: 'Produto 3', preco: 75, imagem: 'https://via.placeholder.com/100' }
    ];
    
    let frete = 20; // Custo de frete fixo para o exemplo
    
    // Função para renderizar os itens do carrinho
    function atualizarCarrinho() {
        const cartItems = document.getElementById('cartItems');
        const subtotalElem = document.getElementById('subtotal');
        const freteElem = document.getElementById('frete');
        const totalElem = document.getElementById('total');
    
    cartItems.innerHTML = ''; // Limpa os itens anteriores
    
    let subtotal = 0;
        
        // Adiciona cada item ao carrinho
    carrinho.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.imagem}" alt="${item.nome}" class="cart-item-img"></td>
            <td>${item.nome}</td>
            <td>R$ ${item.preco.toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removerItem(${index})">Remover</button></td>
            `;
        cartItems.appendChild(row);
    
        subtotal += item.preco;
    });
    
        // Atualiza o subtotal, frete e total  
    subtotalElem.textContent = `R$ ${subtotal.toFixed(2)}`;
    freteElem.textContent = `R$ ${frete.toFixed(2)}`;
    totalElem.textContent = `R$ ${(subtotal + frete).toFixed(2)}`;
    }
    
    // Função para remover item do carrinho
    function removerItem(index) {
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }
    
    // Função para concluir a compra (apenas uma mensagem de exemplo)
    function concluirCompra() {
        alert("Compra concluída com sucesso! Você será redirecionado para o pagamento.");
    }
    
    // Inicializa o carrinho ao carregar a página
    atualizarCarrinho();

    const main = getOrCreateMainElement();
    main.innerHTML = cart;
}