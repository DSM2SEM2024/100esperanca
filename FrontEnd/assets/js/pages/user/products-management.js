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
          <input type="text" class="form-control" id="pesquisaProduto" placeholder="Pesquisar">
          <button class="btn btn-success rounded-end" type="button" id="botaoPesquisar">
            <i class="bi bi-search text-white"></i>
          </button>
        </div>
        <small class="text-muted">Pesquise por Nome, ID ou Código do Produto</small>
      </div>
      <div class="text-center">
        <h2>Consulta de Produtos</h2>
        <table class="table table-bordered table-responsive">
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
  `;

  main.innerHTML = gerenciarProdutos;
  renderTabelaProdutos(); // Renderiza a tabela com os dados iniciais
  addEventListeners();
}

// Função para renderizar a tabela com produtos do backend
async function renderTabelaProdutos() {
  const tabela = document.getElementById("tabelaProdutos");
  tabela.innerHTML = "<tr><td colspan='6'>Carregando...</td></tr>";

  try {
    const produtos = await getAllProducts();
    if (produtos.length === 0) {
      tabela.innerHTML = "<tr><td colspan='6'>Nenhum produto encontrado</td></tr>";
      return;
    }

    tabela.innerHTML = produtos
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

// Função para adicionar eventos na tabela
function addTabelaEventListeners() {
  const btnExcluir = document.querySelectorAll(".btnExcluir");
  const btnEditar = document.querySelectorAll(".btnEditar");

  btnExcluir.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id;
      try {
        await deleteProduct(id);
        alert("Produto excluído com sucesso!");
        renderTabelaProdutos(); // Atualiza a tabela
      } catch (error) {
        alert(`Erro ao excluir o produto: ${error.message}`);
      }
    });
  });

  btnEditar.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id;
      try {
        const produto = await getProductById(id);
        preencherFormulario(produto);
      } catch (error) {
        alert(`Erro ao carregar o produto para edição: ${error.message}`);
      }
    });
  });
}

// Função para preencher o formulário com os dados do produto
function preencherFormulario(produto) {
  document.getElementById("nomeProduto").value = produto.name;
  document.getElementById("idProduto").value = produto.cod_product;
  document.getElementById("categoriaProduto").value = produto.type_product;
  document.getElementById("precoProduto").value = produto.price;
}

// Função para adicionar eventos ao formulário e botão de pesquisa
function addEventListeners() {
  const searchInput = document.getElementById("pesquisaProduto");
  const searchButton = document.getElementById("botaoPesquisar");

  // Pesquisar produto
  searchButton.addEventListener("click", async () => {
    const query = searchInput.value;
    try {
      let produto;
      if (isNaN(query)) {
        const produtos = await getAllProducts();
        produto = produtos.find(
          (p) =>
            p.name.toLowerCase() === query.toLowerCase() ||
            p.cod_product.toLowerCase() === query.toLowerCase()
        );
      } else {
        produto = await getProductById(parseInt(query, 10));
      }

      if (produto) {
        preencherFormulario(produto);
        alert("Produto encontrado!");
      } else {
        alert("Produto não encontrado.");
      }
    } catch (error) {
      alert(`Erro ao pesquisar o produto: ${error.message}`);
    }
  });
}
