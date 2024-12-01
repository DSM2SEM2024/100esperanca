import { getOrCreateMainElement } from "../../components/main";
import { telaAdminHtml } from "./userAdminScreen";

const main = getOrCreateMainElement();

export function telaGerenciarPromocoes() {
  const gerenciarPromocoes = `
    <div class="container mt-4">
      <h2 class="text-center mb-4">Gerenciar Promoções</h2>
      <!-- Row para organizar os forms -->
      <div class="row">
        <!-- Coluna 1: Formulário para adicionar promoção -->
        <div class="col-md-6 pb-3">
          <form id="formAdicionarPromocao" class="border p-4 rounded shadow">
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
                <label for="adicionarProduto" class="form-label">
                  Adicionar Produto
                </label>
                  <input type="text" class="form-control mb-2" id="nomeProduto" placeholder="Nome do Produto">
                  <div class="input-group mb-2 w-75">
                    <input type="text" class="form-control" id="idProduto" placeholder="ID do Produto">
                      <button class="btn bg-success">
                        <span class="input-group-text bg-success border-0">
                          <i class="bi bi-search text-white">
                          </i>
                        </span>
                      </button>
                  </div>
              </div>

              <div class="d-grid gap-2 justify-content-center">
                <button type="button" class="btn btn-success">
                  Adicionar Produto
                </button>
                <button type="button" class="btn btn-danger">
                  Remover Produto
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  `;
  main.innerHTML = gerenciarPromocoes;

  telaAdminHtml()
}