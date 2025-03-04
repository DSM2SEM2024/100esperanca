import {
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct,
} from "../../../../services/productsService";
import { getOrCreateMainElement } from "../../../../components/main";

import { showModalCreatesProducts } from "./components/modalCreatesProducts"
import { showModalFeedBack } from "./components/modalFeedBack";
import { showModalUpdateProducts } from "./components/modalUpdatesProducts";



export function telaGerenciarProdutosHtml() {
    const gerenciarProdutos = `
    <section class="overflow-x-hidden p-0 p-sm-4">
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
      </section>
      <section class="overflow-x-scroll p-0 p-sm-4">
        <table class="table table-bordered table-responsive table-striped overflow-x-scroll">
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
        
      </div>
      
    </section>
    <section class=" text-center d-flex justify-content-center">
        <button type="button" class="btn btn-success" id="modalAddProduto">
          Adicionar Produto
        </button>
    </section>
  `;

    const main = getOrCreateMainElement();
    main.innerHTML = gerenciarProdutos;
    renderTabelaProdutos();
    addEventListeners();

}


export async function renderTabelaProdutos(produtos = null) {
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
            <td class="d-flex-inline align-content-center p-2 
            p-sm-3 
            d-sm-table-cell
            text-sm-start
            ">${produto.id}</td>
            <td class="d-flex-inline align-content-center p-2 text-center  
             p-sm-3 
            d-sm-table-cell
            text-sm-start
            ">${produto.name}</td>
            <td class="d-flex-inline align-content-center p-2 text-center 
            p-sm-3 
            d-sm-table-cell
            text-sm-start
            ">${produto.cod_product}</td>
            <td class="d-flex-inline align-content-center p-2 text-center 
            p-sm-3 
            d-sm-table-cell
            text-sm-start
            ">${produto.type_product}</td>
            <td class="d-flex-inline align-content-center p-2 text-center 
            p-sm-3
            d-sm-table-cell
            text-sm-start
             ">R$ ${Number(produto.price).toFixed(2)}</td>
            <td class="d-inline-flex justify-content-center p-3">
            
              <button class="btn btn-danger shadow-lg btnExcluir" data-id="${produto.id}">
                <i class="bi bi-trash-fill text-white"></i>
              </button>
              <button class="btn btn-success shadow-lg btnEditar" data-id="${produto.id}">
                <i class="bi bi-pencil-square text-white"></i>
              </button>
            </td>
          </tr>
        `
            ).join("");

        addTabelaEventListeners();
    } catch (error) {
        tabela.innerHTML = `<tr><td colspan="6">Erro ao carregar os produtos: ${error.message}</td></tr>`;
    }
}

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
            const filteredProducts = products.filter((product) =>
                product.name.toLowerCase().includes(query) ||
                product.type_product.toLowerCase().includes(query)
            );

            renderTabelaProdutos(filteredProducts);
        } catch (error) {
            console.error("Erro ao pesquisar o produto:", error);
        }
    });

    document.getElementById("modalAddProduto")?.addEventListener("click", () => {
        showModalCreatesProducts('modalAdicionarProduto');
    });

}

function addTabelaEventListeners() {
    const deleteButtons = document.querySelectorAll(".btnExcluir");
    const editButtons = document.querySelectorAll(".btnEditar");

    deleteButtons.forEach((button) =>
        button.addEventListener("click", async (event) => {
            const productId = event.currentTarget.dataset.id;
            try {
                const result = await deleteProduct(productId);
                showModalFeedBack("deleteProductModal", "deleteProductModalMessage", "Produto removido com sucesso.")
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
            } catch (error) {
                console.error("Erro ao carregar produto para edição:", error);
            }
        })
    );


}

function preencherModalEdicao(produto) {
    showModalUpdateProducts('modalEditarProduto', produto);
}
