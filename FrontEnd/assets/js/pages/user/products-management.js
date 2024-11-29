import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../../services/products";
import { getOrCreateMainElement } from "../../components/main";

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
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success" id="modalAddProduto">
          Adicionar Produto
        </button>
      </div>
    </section>

    <!-- Modal de Edição de Produto -->
    <div class="modal fade" id="modalEditarProduto" tabindex="-1" aria-labelledby="modalEditarProdutoLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-success" id="modalEditarProdutoLabel">Editar Produto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="formEditarProduto">
              <div class="mb-3">
                <label for="editNome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="editNome" name="editNome" required>
              </div>
              <div class="mb-3">
                <label for="editCodigo" class="form-label">Código</label>
                <input type="text" class="form-control" id="editCodigo" name="editCodigo" required>
              </div>
              <div class="mb-3">
                <label for="editCategoria" class="form-label">Categoria</label>
                <input type="text" class="form-control" id="editCategoria" name="editCategoria" required>
              </div>
              <div class="mb-3">
                <label for="editPreco" class="form-label">Preço</label>
                <input type="number" step="0.01" class="form-control" id="editPreco" name="editPreco" required>
              </div>
              <input type="hidden" id="editProdutoId" name="editProdutoId">
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-success" id="btnSalvarAlteracoes">Salvar alterações</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Feedback -->
    <div class="modal fade" id="modalSalvarProduto" tabindex="-1" aria-labelledby="modalSalvarProdutoLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalSalvarProdutoLabel">Status</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center" id="modalSalvarProdutoMensagem"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Adição de Produto --> 
    <div class="modal fade" id="modalAdicionarProduto" tabindex="-1" aria-labelledby="modalAdicionarProdutoLabel" aria-hidden="true"> 
      <div class="modal-dialog modal-dialog-centered"> 
        <div class="modal-content">
          <div class="modal-header"> 
            <h5 class="modal-title text-success" id="modalAdicionarProdutoLabel">
              Adicionar Produto
            </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button> 
          </div>
          <div class="modal-body">
            <form id="formAdicionarProduto"> 
              <div class="mb-3"> 
                <label for="addNome" class="form-label">
                  Nome
                </label> 
                  <input type="text" class="form-control" id="addNome" name="addNome" required> 
              </div> 
              
              <div class="mb-3"> 
                <label for="addCodigo" class="form-label">
                  Código
                </label> 
                <input type="text" class="form-control" id="addCodigo" name="addCodigo" required>
              </div> 
              
              <div class="mb-3"> 
                <label for="addCategoria" class="form-label">Categoria</label> 
                  <input type="text" class="form-control" id="addCategoria" name="addCategoria" required> 
              </div> 
              
              <div class="mb-3"> 
                <label for="addPreco" class="form-label">Preço</label> 
                  <input type="number" step="0.01" class="form-control" id="addPreco" name="addPreco" required> 
              </div> 
            </form>
          </div> 
          
          <div class="modal-footer"> 
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button> 
            <button type="button" class="btn btn-success" id="btnSalvarProduto">
              Salvar Produto
            </button>
          </div> 
        </div> 
      </div> 
    </div>
  `;

  main.innerHTML = gerenciarProdutos;
  renderTabelaProdutos();
  addEventListeners();
}

// Função para renderizar a tabela
async function renderTabelaProdutos(produtos = null) {
  const tabela = document.getElementById("tabelaProdutos");
  tabela.innerHTML = "<tr><td colspan='6'>Carregando...</td></tr>";

  try {
    const produtosLista = produtos || (await getAllProducts());
    if (!produtosLista || produtosLista.length === 0) {
      tabela.innerHTML =
        "<tr><td colspan='6'>Nenhum produto encontrado</td></tr>";
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
              <button class="btn btn-danger shadow-lg btnExcluir" data-id="${
                produto.id
              }">
                <i class="bi bi-trash-fill text-white"></i>
              </button>
              <button class="btn btn-success shadow-lg btnEditar" data-id="${
                produto.id
              }">
                <i class="bi bi-pencil-square text-white"></i>
              </button>
            </td>
          </tr>
        `
      )
      .join("");
    addTabelaEventListeners();
  } catch (error) {
    tabela.innerHTML = `<tr><td colspan="6">Erro ao carregar os produtos: ${error.message}</td></tr>`;
  }
}

// Eventos gerais
function addEventListeners() {
  const searchInput = document.getElementById("pesquisaProduto");
  const searchButton = document.getElementById("botaoPesquisar");

  searchButton?.addEventListener("click", async () => {
    const query = searchInput?.value.trim().toLowerCase();

    if (!query) {
      renderTabelaProdutos();
      return;
    }

    try {
      const products = await getAllProducts();
      const filteredProducts = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.type_product.toLowerCase().includes(query)
      );

      renderTabelaProdutos(filteredProducts);
    } catch (error) {
      console.error("Erro ao pesquisar o produto:", error);
      alert("Erro ao buscar o produto. Tente novamente.");
    }
  });

  // Evento para remover backdrop residual
  const modais = document.querySelectorAll(".modal");
  modais.forEach((modal) => {
    modal.addEventListener("hidden.bs.modal", () => {
      removerBackdrop();
    });
  });
}

// Remoção manual de backdrops residuais
function removerBackdrop() {
  const backdrops = document.querySelectorAll(".modal-backdrop");
  backdrops.forEach((backdrop) => backdrop.remove());
  document.body.classList.remove("modal-open");
  document.body.style.overflow = ""; // Garante a rolagem
}

// Eventos da tabela
function addTabelaEventListeners() {
  const deleteButtons = document.querySelectorAll(".btnExcluir");
  const editButtons = document.querySelectorAll(".btnEditar");

  deleteButtons.forEach((button) =>
    button.addEventListener("click", async (event) => {
      const productId = event.currentTarget.dataset.id;
      try {
        await deleteProduct(productId);
        alert("Produto removido com sucesso.");
        renderTabelaProdutos();
      } catch (error) {
        console.error("Erro ao remover o produto:", error);
        alert("Erro ao remover o produto. Tente novamente.");
      }
    })
  );

  editButtons.forEach((button) =>
    button.addEventListener("click", async (event) => {
      const productId = event.currentTarget.dataset.id;
      try {
        const produto = await getProductById(productId);
        preencherModalEdicao(produto);
        const modal = new bootstrap.Modal(
          document.getElementById("modalEditarProduto")
        );
        modal.show();
      } catch (error) {
        console.error("Erro ao carregar produto para edição:", error);
        alert("Erro ao carregar produto. Tente novamente.");
      }
    })
  );

  document
    .getElementById("btnSalvarAlteracoes")
    ?.addEventListener("click", async () => {
      const form = document.getElementById("formEditarProduto");
      const formData = new FormData(form);

      const productId = formData.get("editProdutoId");

      const produtoAtualizado = {
        name: formData.get("editNome"),
        cod_product: formData.get("editCodigo"),
        type_product: formData.get("editCategoria"),
        price: parseFloat(formData.get("editPreco")),
      };

      try {
        await updateProduct(productId, produtoAtualizado);
        const statusModal = new bootstrap.Modal(
          document.getElementById("modalSalvarProduto")
        );
        document.getElementById("modalSalvarProdutoMensagem").textContent =
          "Produto atualizado com sucesso.";
        statusModal.show();
        renderTabelaProdutos();
      } catch (error) {
        alert(`Erro ao atualizar o produto: ${error.message}`);
      }
    });
}

function preencherModalEdicao(produto) {
  document.getElementById("editProdutoId").value = produto.id;
  document.getElementById("editNome").value = produto.name;
  document.getElementById("editCodigo").value = produto.cod_product;
  document.getElementById("editCategoria").value = produto.type_product;
  document.getElementById("editPreco").value = produto.price.toFixed(2);
}
