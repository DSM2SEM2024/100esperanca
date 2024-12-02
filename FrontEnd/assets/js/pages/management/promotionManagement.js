import { getOrCreateMainElement } from "../../components/main";
import { baseUrl } from "../../services/baseUrl/baseUrl";
import { sidebar } from "./components/sidebar";
baseUrl;
const main = getOrCreateMainElement();

export function telaGerenciarPromocoes() {
  const gerenciarPromocoes = `
    <section class="container-fluid p-4">
      <h4 class="mb-3 fs-1 text-center">Gerenciar Promoções</h4>
      <div class="mb-4">
        <label for="pesquisarPromocao" class="form-label">Pesquisar Promoção</label>
        <div class="input-group">
          <input type="text" class="form-control" id="pesquisarPromocao" placeholder="Pesquisar por Código da Promoção ou Categoria">
          <button class="btn btn-success rounded-end" type="button" id="botaoPesquisar">
            <i class="bi bi-search text-white"></i>
          </button>
        </div>
        <small class="text-muted">Pesquise por Código ou Data da Promoção</small>
      </div>
      <div class="text-center">
        <h2>Consulta de Promoções</h2>
        <table class="table table-bordered table-responsive table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Código</th>
              <th>Data de Início</th>
              <th>Data de Encerramento</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody id="tabelaPromocoes">
            <tr>
              <td colspan="5">Nenhuma Promoção encontrada</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success" id="abrirModalAdicionarPromocao">
          Adicionar Promoção
        </button>
      </div>
    </section>
    ${modalAddPromocao()}
  `;

  function modalAddPromocao() {
    return `
      <div class="modal fade" id="modalAddPromocao" tabindex="-1" aria-labelledby="modalAdicionarPromocaoLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-success" id="modalAdicionarPromocaoLabel">Adicionar Promoção</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="formAdicionarPromocao" class="border p-4 rounded shadow">
                <h4 class="mb-3">Adicionar Promoção</h4>
                <div class="mb-3">
                  <label for="codPromocao" class="form-label">Código da Promoção</label>
                  <input type="text" class="form-control" id="codPromocao" placeholder="Digite o código da promoção" required>
                </div>
                <div class="mb-3">
                  <label for="startDatePromocao" class="form-label">Data de Início</label>
                  <input type="datetime-local" class="form-control" id="startDatePromocao" required>
                </div>
                <div class="mb-3">
                  <label for="endDatePromocao" class="form-label">Data de Término</label>
                  <input type="datetime-local" class="form-control" id="endDatePromocao" required>
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success">Adicionar Promoção</button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-success" id="btnSalvarPromocao">Salvar Promoção</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  main.innerHTML = gerenciarPromocoes;
  sidebar();

  // Event listener para abrir o modal
  const abrirModalButton = document.getElementById(
    "abrirModalAdicionarPromocao"
  );
  abrirModalButton.addEventListener("click", () => {
    const modal = new bootstrap.Modal(
      document.getElementById("modalAddPromocao")
    );
    modal.show();
  });

  // Event listener para salvar a promoção
  document
    .getElementById("btnSalvarPromocao")
    .addEventListener("click", async () => {
      const form = document.getElementById("formAdicionarPromocao");
      const formData = new FormData(form);

      const novaPromocao = {
        start_date_promotion: formData.get("startDatePromocao"),
        end_date_promotion: formData.get("endDatePromocao"),
        cod_promotion: formData.get("codPromocao"),
      };

      try {
        const response = await fetch(`${baseUrl}promotions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(novaPromocao),
        });

        if (response.ok) {
          alert("Promoção criada com sucesso!");
          form.reset();
          const modal = bootstrap.Modal.getInstance(
            document.getElementById("modalAddPromocao")
          );
          modal.hide();
          renderTabelaPromocoes(); // Atualiza a tabela de promoções
        } else {
          const errorData = await response.json();
          alert(`Erro ao criar promoção: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Erro ao criar promoção:", error);
        alert("Erro ao criar promoção. Tente novamente.");
      }
    });

  document
    .getElementById("botaoPesquisar")
    .addEventListener("click", async () => {
      const inputPesquisar = document.getElementById("pesquisarPromocao").value;
      if (!inputPesquisar) {
        renderTabelaPromocoes(); // Se não houver pesquisa, exibe todas as promoções
        return;
      }

      try {
        const response = await fetch(
          `${baseUrl}promotions/${inputPesquisar}`
        );
        if (response.ok) {
          const promocao = await response.json();
          renderTabelaPromocoes([promocao]);
        } else {
          const errorData = await response.json();
          alert(`Erro ao buscar promoção: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Erro ao buscar promoção:", error);
        alert("Erro ao buscar promoção. Tente novamente.");
      }
    });
}

async function renderTabelaPromocoes(promocoes = null) {
  const tabela = document.getElementById("tabelaPromocoes");
  tabela.innerHTML = "<tr><td colspan='5'>Carregando...</td></tr>";

  try {
    const promocoesLista = promocoes || (await getAllPromotions());
    if (!promocoesLista || promocoesLista.length === 0) {
      tabela.innerHTML =
        "<tr><td colspan='5'>Nenhuma promoção encontrada</td></tr>";
      return;
    }

    tabela.innerHTML = promocoesLista
      .map(
        (promocao) => `
          <tr data-id="${promocao.id}">
            <td>${promocao.id}</td>
            <td>${promocao.cod_promotion}</td>
            <td>${new Date(promocao.start_date_promotion).toLocaleString()}</td>
            <td>${new Date(promocao.end_date_promotion).toLocaleString()}</td>
          </tr>
        `
      )
      .join("");
  } catch (error) {
    tabela.innerHTML = `<tr><td colspan="5">Erro ao carregar as promoções: ${error.message}</td></tr>`;
  }
}

async function getAllPromotions() {
  const response = await fetch(`${baseUrl}promotions`);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Promoção Não Encontrada");
  }
}
