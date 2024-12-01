import { getOrCreateMainElement } from "../../components/main";
import { sidebar } from "./components/sidebar";

const main = getOrCreateMainElement();

export function telaGerenciarPromocoes() {
  const gerenciarPromocoes = `
    <section class="container-fluid p-4">
      <h4 class="mb-3 fs-1 text-center">
        Gerenciar Promoções
      </h4>

      <div class="mb-4">
        <label for="pesquisarPromocao" class="form-label">
          Pesquisar Promoção
        </label>
          <div class="input-group">
            <input type="text" class="form-control" id="pesquisarPromocao" placeholder="Pesquisar por Código da Promoção ou Categoria">
              <button class="btn btn-success rounded-end" type="button" id="botaoPesquisar">
                <i class="bi bi-search text-white"></i>
              </button>
          </div>
        <small class="text-muted">Pesquise por cod ou Data da Promoção</small>
      </div>

      <div class="text-center">
        <h2>
          Consulta de Promoções
        </h2>

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
              <td colspan="6">Nenhuma Promoção encontrada</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success" id="modalAddPromocao">
          Adicionar Promoção
        </button>
      </div>
    </section>

    ${modalAddPromocao()};
  `;
  
  function modalAddPromocao() {
    return `
      <div class="modal fade" id="modalAddPromocao" tabindex="-1" aria-labelledby="modalAdicionarProdutoLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-success" id="modalAdicionarPromocaoLabel">
                Adicionar Produto
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>

            <div class="modal-body">
               <form id="formAdicionarPromocao" class="border p-4 rounded shadow">
                 <h4 class="mb-3">Adicionar Promoção</h4>
                 <div class="mb-3">
                   <label for="codPromocao" class="form-label">cod da Promoção</label>
                   <input type="text" class="form-control" id="codPromocao" placeholder="Digite o cod da promoção" required>
                 </div>
                 <div class="mb-3">
                   <label for="descontoPromocao" class="form-label">Desconto (%)</label>
                   <input type="number" class="form-control" id="descontoPromocao" placeholder="Digite o percentual de desconto" required>
                 </div>

                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success">Adicionar Promoção</button>
                </div>
                </form>
              </div>
              
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cancelar
                </button>
                <button type="button" class="btn btn-success" id="btnSalvarPromocao">
                  Salvar Promoção
                </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
 
  
  main.innerHTML = gerenciarPromocoes;
  sidebar()
}