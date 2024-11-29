import { createProduct, getAllProducts, getProductById, deleteProduct, uri } from "../../services/products";
import { getOrCreateMainElement } from "../../components/main";
import { baseUrl } from "../../services/baseUrl/base-url";

const main = getOrCreateMainElement();

// Função para renderizar a tela de gerenciamento de produtos
export function telaGerenciarProdutosHtml() {
  const gerenciarProdutos = `
    <section class="container-fluid p-4">
      <h4 class="mb-3 fs-1 text-center">Gerenciar Produtos</h4>
      <div class="mb-4">
        <label for="pesquisaProduto" class="form-label">Pesquisar Produto</label>
        <div class="input-group">
          <input type="text" class="form-control" id="pesquisaProduto" placeholder="Pesquisar por Nome ou Categoria">
          <button class="btn btn-success rounded-end" type="button" id="botaoPesquisar">
            <i class="bi bi-search text-white"></i>
          </button>
        </div>
        <small class="text-muted">Pesquise por Nome ou Categoria do Produto</small>
      </div>
      <div class="text-center">
        <h2>Consulta de Produtos</h2>
        <table class="table table-bordered table-responsive table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Código</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody id="tabelaProdutos">
            <tr>
              <td colspan="6">Nenhum produto encontrado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Modal de Edição de Produto -->
    <div class="modal fade" id="modalEditarProduto" tabindex="-1" aria-labelledby="modalEditarProdutoLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-success" id="modalEditarProdutoLabel">
              Editar Produto
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="formEditarProduto">
              <div class="mb-3">
                <label for="editNome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="editNome" required>
              </div>
              <div class="mb-3">
                <label for="editCodigo" class="form-label">Código</label>
                <input type="text" class="form-control" id="editCodigo" required>
              </div>
              <div class="mb-3">
                <label for="editCategoria" class="form-label">Categoria</label>
                <input type="text" class="form-control" id="editCategoria" required>
              </div>
              <div class="mb-3">
                <label for="editPreco" class="form-label">Preço</label>
                <input type="number" step="0.01" class="form-control" id="editPreco" required>
              </div>
              <div class="mb-3">
                <label for="editImagem" class="form-label">Imagem</label>
                <input type="file" class="form-control" id="editImagem">
                <small class="text-muted">Selecione a imagem do produto (opcional)</small>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-success" id="btnSalvarAlteracoes">Salvar alterações</button>
          </div>
        </div>
      </div>
    </div>
  `;

  main.innerHTML = gerenciarProdutos;
  renderTabelaProdutos(); // Renderiza a tabela com os dados iniciais
  addEventListeners();
}

// Função para renderizar a tabela com produtos do backend
async function renderTabelaProdutos(produtos = null) {
  const tabela = document.getElementById("tabelaProdutos");
  tabela.innerHTML = "<tr><td colspan='6'>Carregando...</td></tr>";

  try {
    const produtosLista = produtos || await getAllProducts(); // Obtém produtos ou usa os passados pela pesquisa
    if (!produtosLista || produtosLista.length === 0) {
      tabela.innerHTML = "<tr><td colspan='6'>Nenhum produto encontrado</td></tr>";
      return;
    }

    tabela.innerHTML = produtosLista
      .map(
        (produto) => `
          <tr data-id="${produto.id}">
            <td>${produto.id}</td>
            <td>${produto.name}</td>
            <td>${produto.cod_product}</td>
            <td>${produto.type_product}</td>
            <td>R$ ${produto.price.toFixed(2)}</td>
            <td>
              <button class="btn btn-danger shadow-lg btnExcluir" data-id="${produto.id}">
                <i class="bi bi-trash-fill text-white"></i>
              </button>
              <button class="btn btn-success shadow-lg btnEditar" data-id="${produto.id}">
                <i class="bi bi-pencil-square text-white"></i>
              </button>
            </td>
          </tr>
        `
      )
      .join("");
    addTabelaEventListeners(); // Adiciona eventos aos botões
  } catch (error) {
    tabela.innerHTML = `<tr><td colspan="6">Erro ao carregar os produtos: ${error.message}</td></tr>`;
  }
}

// Função para adicionar eventos
function addEventListeners() {
  const searchInput = document.getElementById("pesquisaProduto");
  const searchButton = document.getElementById("botaoPesquisar");

  // Pesquisar produto
  searchButton?.addEventListener("click", async () => {
    const query = searchInput?.value.trim().toLowerCase();

    // Se o campo estiver vazio, exibe todos os produtos
    if (!query) {
      renderTabelaProdutos(); // Recarrega a tabela com todos os produtos
      return;
    }

    try {
      const products = await getAllProducts(); // Obtém todos os produtos do backend
      const filteredProducts = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) || // Filtra por nome
          p.type_product.toLowerCase().includes(query) // Ou filtra por categoria
      );

      if (filteredProducts.length > 0) {
        renderTabelaProdutos(filteredProducts); // Atualiza a tabela com os resultados
      } else {
        renderTabelaProdutos([]); // Mostra mensagem "Nenhum produto encontrado"
      }
    } catch (error) {
      console.error("Erro ao pesquisar o produto:", error);
      alert("Erro ao buscar o produto. Tente novamente.");
    }
  });
}

// Função para adicionar eventos aos botões da tabela
function addTabelaEventListeners() {
  const deleteButtons = document.querySelectorAll(".btnExcluir");
  const editButtons = document.querySelectorAll(".btnEditar");

  // Deletar produto
  deleteButtons.forEach((button) =>
    button.addEventListener("click", async (event) => {
      const productId = event.currentTarget.dataset.id;
      try {
        await deleteProduct(productId);
        alert("Produto removido com sucesso.");
        renderTabelaProdutos(); // Recarrega a tabela após exclusão
      } catch (error) {
        console.error("Erro ao remover o produto:", error);
        alert("Erro ao remover o produto. Tente novamente.");
      }
    })
  );

  // Editar produto
  editButtons.forEach((button) =>
    button.addEventListener("click", async (event) => {
      const productId = event.currentTarget.dataset.id;
      try {
        const produto = await getProductById(productId);
        preencherModalEdicao(produto);
        const modal = new bootstrap.Modal(document.getElementById("modalEditarProduto"));
        modal.show(); // Abre o modal
      } catch (error) {
        console.error("Erro ao carregar produto para edição:", error);
        alert("Erro ao carregar produto. Tente novamente.");
      }
    })
  );

  // Salvar alterações no produto
  document.getElementById("btnSalvarAlteracoes")?.addEventListener("click", async () => {
    const form = document.getElementById("formEditarProduto");
    const formData = new FormData(form);
    
    const produtoAtualizado = {
      name: formData.get("editNome"),
      cod_product: formData.get("editCodigo"),
      type_product: formData.get("editCategoria"),
      price: parseFloat(formData.get("editPreco")),
      image: formData.get("editImagem") ? formData.get("editImagem").files[0] : null,
    };

    // Lógica para enviar os dados editados para o backend (aqui deve ser ajustada conforme sua API)
    try {
      // Atualize o produto no backend (exemplo fictício)
      // await updateProduct(productId, produtoAtualizado); 

      alert("Produto atualizado com sucesso!");
      // Fecha o modal
      const modal = bootstrap.Modal.getInstance(document.getElementById("modalEditarProduto"));
      modal.hide();
      renderTabelaProdutos(); // Recarrega a tabela com o produto atualizado
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
      alert("Erro ao salvar alterações. Tente novamente.");
    }
  });
}

// Função para preencher o modal de edição com dados do produto
function preencherModalEdicao(produto) {
  document.getElementById("editNome").value = produto.name;
  document.getElementById("editCodigo").value = produto.cod_product;
  document.getElementById("editCategoria").value = produto.type_product;
  document.getElementById("editPreco").value = produto.price;
  // A lógica de imagem pode ser ajustada para permitir upload ou mostrar a imagem existente.
}
