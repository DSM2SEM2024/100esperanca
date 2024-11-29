import { getOrCreateMainElement } from "../../components/main";

const main = getOrCreateMainElement();

export function telaGerenciarProdutosHtml() {
  const gerenciarProdutos = `
    <section class="container-fluid lg d-flex flex-grow mt-2 pb-5 justify-content-center">
    <div class="">
      <form id="formGerenciarProdutos" class="border p-4 rounded shadow">
    
        <h4 class="mb-3 fs-1 text-center">Gerenciar Produtos</h4>
        
        <div class="mb-4">
          <label for="pesquisaProduto" class="form-label">Pesquisar Produto</label>
          <div class="input-group">
            <input type="text" class="form-control" id="pesquisaProduto" placeholder="Digite o nome, arte ou ID do produto ou Promoção">
            <button class="btn btn-success" type="button" id="botaoPesquisar">Pesquisar</button>
          </div>
          <small class="text-muted">Pesquise por Nome, ID ou Arte do Produto.</small>
        </div>

        <div class="mb-3 d-flex gap-2">
          <div class="flex-grow-1">
            <label for="nomeProduto" class="form-label">Nome do Produto</label>
            <input type="text" class="form-control" id="nomeProduto" placeholder="Digite o nome do produto">
          </div>

          <div class="flex-grow-1">
            <label for="idProduto" class="form-label">ID do Produto</label>
            <input type="text" class="form-control" id="idProduto" placeholder="Digite o ID do produto">
          </div>
        </div>

        <!-- Categoria e Preço -->
        <div class="mb-3 d-flex gap-2">

          <div class="flex-grow-1">
            <label for="categoriaProduto" class="form-label">Categoria</label>
            <select class="form-select" id="categoriaProduto" required>
              <option value="" selected disabled>Selecione a categoria</option>
              <option value="bolsas">Bolsas</option>
              <option value="cadernos">Cadernos</option>
              <option value="canecas">Canecas</option>
              <option value="camisetas">Camisetas</option>
            </select>
          </div>

          <div class="flex-grow-1">
            <label for="precoProduto" class="form-label">Preço</label>
            <input type="number" class="form-control" id="precoProduto" placeholder="Digite o preço do produto" required>
          </div>

        </div>

        <!-- Arte do Produto -->
        <div class="mb-3">
          <label for="imagemProduto" class="form-label">Arte do Produto</label>
          <input type="file" class="form-control" id="imagemProduto" accept="image/*">
        </div>
        
        <div class="d-grid gap-2 justify-content-center">
        <button type="submit" class="btn btn-success">Salvar Produto</button>
        <button type="reset" class="btn btn-secondary">Limpar</button>
        <button type="button" class="btn btn-danger">Remover Produto</button>
        </div>
        </div>
      </form>
    </section>
  `;

  main.innerHTML = gerenciarProdutos;
}  