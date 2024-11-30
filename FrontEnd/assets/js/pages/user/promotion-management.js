import { footerHtml } from "../../components/footer";
import { getOrCreateMainElement } from "../../components/main";

const main = getOrCreateMainElement();

export function telaGerenciarPromocoes() {
  const gerenciarPromocoes = `
    <div class="container mt-4">
      <h2 class="text-center mb-4">Gerenciar Promoções</h2>


      <div class="row mb-4">
        <div class="col-12">
          <div class="input-group">
            <input 
              type="text" 
              class="form-control" 
              id="barraPesquisaPromocoes" 
              placeholder="Pesquisar promoções" 
              aria-label="Pesquisar promoções">
            <button class="btn btn-primary" id="botaoPesquisarPromocoes">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Row para organizar os forms -->
      <div class="row">
        <!-- Coluna 1: Formulário para adicionar promoção -->
        <div class="col-md-6 pb-3">
          <form id="formAdicionarPromocao" class="border p-4 rounded shadow">
            <h4 class="mb-3">Adicionar Promoção</h4>
            <div class="mb-3">
              <label for="idPromocao" class="form-label">ID da Promoção</label>
              <input 
                type="text" 
                class="form-control" 
                id="idPromocao" 
                placeholder="Digite o ID da promoção" 
                required>
            </div>
            <div class="mb-3">
              <label for="codPromocao" class="form-label">Código da Promoção</label>
              <input 
                type="text" 
                class="form-control" 
                id="codPromocao" 
                placeholder="Digite o código da promoção" 
                required>
            </div>
            <div class="mb-3">
              <label for="startDatePromocao" class="form-label">Data de Início</label>
              <input 
                type="date" 
                class="form-control" 
                id="startDatePromocao" 
                required>
            </div>
            <div class="mb-3">
              <label for="endDatePromocao" class="form-label">Data de Término</label>
              <input 
                type="date" 
                class="form-control" 
                id="endDatePromocao" 
                required>
            </div>
            <div class="mb-3 form-check">
              <input 
                type="checkbox" 
                class="form-check-input" 
                id="isClosed">
              <label for="isClosed" class="form-check-label">Encerrada</label>
            </div>
            <div class="mb-3">
              <label for="descontoPromocao" class="form-label">Desconto (%)</label>
              <input 
                type="number" 
                class="form-control" 
                id="descontoPromocao" 
                placeholder="Digite o percentual de desconto" 
                required>
            </div>
            <div class="mb-3">
              <label for="selecionarProdutos" class="form-label">Selecionar Produtos</label>
              <select multiple class="form-select" id="selecionarProdutos" required>
                <option value="1">Produto 1 - ID: 001</option>
                <option value="2">Produto 2 - ID: 002</option>
              </select>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-success">Adicionar Promoção</button>
            </div>
          </form>
        </div>

        <!-- Coluna 2: Formulário para gerenciar produtos em promoções -->
        <div class="col-md-6">
          <form id="formGerenciarProdutos" class="border p-4 rounded shadow">
            <h4 class="mb-3">Gerenciar Produtos em Promoções</h4>
            <div class="mb-3">
              <label for="selecionarPromocao" class="form-label">Selecionar Promoção</label>
              <select class="form-select" id="selecionarPromocao" required>
                <option value="promo1">Promoção 1</option>
                <option value="promo2">Promoção 2</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="adicionarProduto" class="form-label">Adicionar Produto</label>
              <input 
                type="text" 
                class="form-control mb-2" 
                id="nomeProduto" 
                placeholder="Nome do Produto">
              <div class="input-group mb-2 w-75">
                <input 
                  type="text" 
                  class="form-control" 
                  id="idProduto" 
                  placeholder="ID do Produto">
                <button class="btn bg-success">
                  <span class="input-group-text bg-success border-0">
                    <i class="bi bi-search text-white"></i>
                  </span>
                </button>
              </div>
            </div>
            <div class="d-grid gap-2 justify-content-center">
              <button type="button" class="btn btn-success">Adicionar Produto</button>
              <button type="button" class="btn btn-danger">Remover Produto</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  main.innerHTML = gerenciarPromocoes;
}
