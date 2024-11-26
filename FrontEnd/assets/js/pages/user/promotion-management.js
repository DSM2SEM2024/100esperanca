import { footerHtml } from "../../components/footer";
import { getOrCreateMainElement } from "../../components/main";


export function telaGerenciarPromocoes() {
    const gerenciarPromocoes = `
      <div class="container mt-4">
        <h2 class="text-center mb-4">Gerenciar Promoções</h2>
        
        <!-- Formulário para adicionar promoção -->
        <form id="formAdicionarPromocao" class="border p-4 rounded shadow mb-4">
          <h4 class="mb-3">Adicionar Promoção</h4>
          <div class="mb-3">
            <label for="nomePromocao" class="form-label">Nome da Promoção</label>
            <input type="text" class="form-control" id="nomePromocao" placeholder="Digite o nome da promoção" required>
          </div>
          <div class="mb-3">
            <label for="descontoPromocao" class="form-label">Desconto (%)</label>
            <input type="number" class="form-control" id="descontoPromocao" placeholder="Digite o percentual de desconto" required>
          </div>
          <div class="mb-3">
            <label for="selecionarProdutos" class="form-label">Selecionar Produtos</label>
            <select multiple class="form-select" id="selecionarProdutos" required>
              <!-- Produtos serão adicionados dinamicamente do backend -->
              <option value="1">Camiseta 1 - ID: 01</option>
              <option value="2">Camiseta 2 - ID: 02</option>
            </select>
            <small class="text-muted">Segure Ctrl para selecionar múltiplos produtos.</small>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-success">Adicionar Promoção</button>
          </div>
        </form>
  
        <!-- Formulário para gerenciar produtos em promoções -->
        <form id="formGerenciarProdutos" class="border p-4 rounded shadow">
          <h4 class="mb-3">Gerenciar Produtos em Promoções</h4>
          <div class="mb-3">
            <label for="selecionarPromocao" class="form-label">Selecionar Promoção</label>
            <select class="form-select" id="selecionarPromocao" required>
              <!-- Promoções serão adicionadas dinamicamente do backend -->
              <option value="promo1">Promoção 1</option>
              <option value="promo2">Promoção 2</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="adicionarProduto" class="form-label">Adicionar Produto</label>
            <input type="text" class="form-control mb-2" id="nomeProduto" placeholder="Nome do Produto" readonly>
            <input type="text" class="form-control mb-2" id="idProduto" placeholder="ID do Produto" readonly>
            <img id="imagemProduto" class="img-thumbnail" src="#" alt="Arte do Produto" style="display: none; width: 100px;">
            <button type="button" class="btn btn-success mt-2">Buscar Produto</button>
          </div>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-success">Adicionar Produto</button>
            <button type="button" class="btn btn-danger">Remover Produto</button>
          </div>
        </form>
      </div>
    `;
    
    const main = getOrCreateMainElement();
    main.classList = "d-flex p-5 justify-content-center align-items-center"
    main.innerHTML = gerenciarPromocoes;

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 0);
  }