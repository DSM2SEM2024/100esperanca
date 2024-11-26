import { getOrCreateMainElement } from "../../components/main";

export function telaGerenciarProdutosHtml() {
    const gerenciarProdutos = `
    <section class="container-fluid flex-grow pb-5">
      <form id="formGerenciarProdutos" class="border p-4 rounded shadow">
  <h4 class="mb-3">Gerenciar Produtos</h4>
  <div class="mb-4">
  <label for="pesquisaProduto" class="form-label">Pesquisar Produto</label>
  <div class="input-group">
    <input type="text" class="form-control" id="pesquisaProduto" placeholder="Digite o nome, arte ou ID do produto ou Promoção">
    <button class="btn btn-success" type="button" id="botaoPesquisar">Pesquisar</button>
  </div>
  <small class="text-muted">Pesquise por Nome, ID ou Arte do Produto.</small>
  </div>

  <!-- Nome do Produto -->
  <div class="mb-3">
    <label for="nomeProduto" class="form-label">Nome do Produto</label>
    <input type="text" class="form-control" id="nomeProduto" placeholder="Digite o nome do produto" required>
  </div>

  <!-- ID do Produto -->
  <div class="mb-3">
    <label for="idProduto" class="form-label">ID do Produto</label>
    <input type="text" class="form-control" id="idProduto" placeholder="Digite o ID do produto" readonly>
  </div>

  <!-- Categoria -->
  <div class="mb-3">
    <label for="categoriaProduto" class="form-label">Categoria</label>
    <select class="form-select" id="categoriaProduto" required>
      <option value="" selected disabled>Selecione a categoria</option>
      <option value="bolsas">Bolsas</option>
      <option value="cadernos">Cadernos</option>
      <option value="camisetas">Camisetas</option>
    </select>
  </div>

  <!-- Preço -->
  <div class="mb-3">
    <label for="precoProduto" class="form-label">Preço</label>
    <input type="number" class="form-control" id="precoProduto" placeholder="Digite o preço do produto" step="0.01" required>
  </div>

  <!-- Arte do Produto -->
  <div class="mb-3">
    <label for="imagemProduto" class="form-label">Arte do Produto</label>
    <input type="file" class="form-control" id="imagemProduto" accept="image/*">
  </div>

  <!-- Botões de ação -->
  <div class="d-grid gap-2">
    <button type="submit" class="btn btn-success">Salvar Produto</button>
    <button type="reset" class="btn btn-secondary">Limpar</button>
    <button type="button" class="btn btn-danger">Remover Produto</button>
  </div>
</form>
</section>
    `;
    const main = getOrCreateMainElement();
    main.classList = "d-flex p-5 justify-content-center align-items-center"
    main.innerHTML = (gerenciarProdutos);
  }
  