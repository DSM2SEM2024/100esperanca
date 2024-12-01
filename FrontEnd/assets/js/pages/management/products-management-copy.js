import { createProduct, getAllProducts, getProductById, deleteProduct, uri } from "../../services/products";
import { createFooterElement, footerHtml } from "../../components/footer";
import { getOrCreateMainElement } from "../../components/main";
import { baseUrl } from "../../services/baseUrl/base-url";

const main = getOrCreateMainElement();

// Função para renderizar a tela de gerenciamento de produtos
export function telaGerenciarProdutosHtml() {
  const gerenciarProdutos = `
    <section class="container-fluid lg d-flex flex-grow mt-5 justify-content-center">
      <div class="pb-4">
        <form id="formGerenciarProdutos" class="border p-4 rounded shadow">
          <h4 class="mb-3 fs-1 text-center">Gerenciar Produtos</h4>
          <div class="mb-4">
            <label for="pesquisaProduto" class="form-label">Pesquisar Produto</label>
            <div class="input-group">
              <input type="text" class="form-control" id="pesquisaProduto" placeholder="Pesquisar">
              <button class="btn btn-success rounded-end" type="button" id="botaoPesquisar">
                <i class="bi bi-search text-white"></i>
              </button>
            </div>
            <small class="text-muted">Pesquise por Nome, ID ou ID da Arte</small>
          </div>
          <div class="mb-3 d-flex gap-2">
            <div class="flex-grow-1">
              <label for="nomeProduto" class="form-label">Nome do Produto</label>
              <input type="text" class="form-control" id="nomeProduto" placeholder="Digite o nome do produto">
            </div>
            <div class="flex-grow-1">
              <label for="idProduto" class="form-label">Código do Produto</label>
              <input type="text" class="form-control" id="idProduto" placeholder="Digite o Código do produto">
            </div>
          </div>
          <div class="mb-3 d-flex gap-2">
            <div class="flex-grow-1">
              <label for="categoriaProduto" class="form-label">Tipo do Produto</label>
              <select class="form-select" id="categoriaProduto" required>
                <option value="" selected disabled>Selecione a categoria</option>
                <option value="Bolsas">Bolsas</option>
                <option value="Cadernos">Cadernos</option>
                <option value="Canecas">Canecas</option>
                <option value="Camisetas">Camisetas</option>
              </select>
            </div>
            <div class="flex-grow-1">
              <label for="precoProduto" class="form-label">Preço</label>
              <input type="number" class="form-control" id="precoProduto" placeholder="Digite o preço do produto" required>
            </div>
          </div>
          <div class="mb-3">
            <label for="imagemProduto" class="form-label">Arte do Produto</label>
            <input type="file" class="form-control" id="imagemProduto" accept="image/*">
          </div>
          <div class="d-grid gap-2 justify-content-center">
            <button type="button" id="botaoSalvar" class="btn btn-success">Salvar Produto</button>
            <button type="button" id="botaoLimpar" class="btn btn-secondary">Limpar</button>
            <button type="button" id="botaoRemover" class="btn btn-danger">Remover Produto</button>
          </div>
        </form>
      </div>
    </section>
  `;

  main.innerHTML = gerenciarProdutos;
  addEventListeners();
}

function addEventListeners() {
  const form = document.getElementById("formGerenciarProdutos");
  const searchInput = document.getElementById("pesquisaProduto");
  const searchButton = document.getElementById("botaoPesquisar");
  const clearButton = document.getElementById("botaoLimpar");
  const deleteButton = document.getElementById("botaoRemover");
  const saveButton = document.getElementById("botaoSalvar"); // Botão de salvar produto

  let currentProductId = null; // Armazena o ID real do produto para remoção

  // Função para preencher os campos com os dados do produto encontrado
  const fillForm = (product) => {
    document.getElementById("nomeProduto").value = product.name;
    document.getElementById("idProduto").value = product.cod_product; // Preencher com o cod_product correto
    document.getElementById("categoriaProduto").value = product.type_product; // Preencher com type_product
    document.getElementById("precoProduto").value = product.price;
    currentProductId = product.id; // Usar o `id` real do produto
  };

  // Pesquisar produto
  searchButton.addEventListener("click", async () => {
    const query = searchInput.value;
    try {
      let product;
      if (isNaN(query)) {
        const products = await getAllProducts();
        product = products.find(
          (p) =>
            p.name.toLowerCase() === query.toLowerCase() ||
            p.cod_product.toLowerCase() === query.toLowerCase()
        );
      } else {
        product = await getProductById(parseInt(query, 10));
      }
      if (product) {
        fillForm(product);
        alert("Produto encontrado e carregado no formulário.");
      } else {
        alert("Produto não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
      alert("Erro ao buscar o produto. Verifique os dados e tente novamente.");
    }
  });

  // Limpar os campos do formulário
  clearButton.addEventListener("click", () => {
    document.getElementById("nomeProduto").value = "";
    document.getElementById("idProduto").value = "";
    document.getElementById("categoriaProduto").value = "";
    document.getElementById("precoProduto").value = "";
    currentProductId = null; // Limpa o ID atual
  });

  // Deletar produto
  deleteButton.addEventListener("click", async () => {
    if (currentProductId) {
      try {
        const result = await deleteProduct(currentProductId);
        alert(result); // Mostra a mensagem de sucesso ou dados retornados
        form.reset();
        currentProductId = null; // Reseta o ID após exclusão
      } catch (error) {
        alert(`Erro ao remover o produto: ${error.message}`);
      }
    } else {
      alert("Nenhum produto selecionado para remoção.");
    }
  });

  // Salvar produto
  saveButton.addEventListener("click", async () => {
    const productData = {
      name: document.getElementById("nomeProduto").value,
      typeProduct: document.getElementById("categoriaProduto").value,
      codProduct: document.getElementById("idProduto").value,
      price: document.getElementById("precoProduto").value,
      art: document.getElementById("imagemProduto").value
    };
    
    console.log(productData);
    
    try {
      // const result = await createProduct(productData);
      alert("Produto criado com sucesso.");
      form.reset();
      currentProductId = null; // Reseta o ID após criação
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
      alert("Erro ao criar o produto. Verifique os dados e tente novamente.");
    }
  });
}


export async function createProduct(body) {
  const bodyRequest = JSON.stringify({
    "name": body.name,
    "typeProduct": body.typeProduct,
    "codProduct": body.codProduct,
    "price": body.price,
    "art": body.art

  });
  console.log(bodyRequest);
  
  try {
     const response = await fetch(`${baseUrl}${uri}`, {
       method: 'POST',
       body: bodyRequest,
       headers: {
         'Content-Type': 'application/json'
       }
    
     });

    // Verificar se a resposta está no formato JSON
    const contentType = response.headers.get("content-type");
    if (response.ok && contentType && contentType.includes("application/json")) {
      const result = await response.json();
      return result.data;
    } else {
      const errorText = await response.text();
      console.error("Erro ao criar o produto:", errorText);
      throw new Error("Erro ao criar o produto. Verifique os dados e tente novamente.");
    }
  } catch (error) {
    console.error("Erro ao criar o produto:", error);
    throw error;
  }
}
