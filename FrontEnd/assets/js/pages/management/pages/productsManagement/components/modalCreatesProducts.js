import { getAllArts } from "../../../../../services/artsService";
import { createProduct } from "../../../../../services/productsService";
import { showModalFeedBack } from "./modalFeedBack";

function modalCreatesProducts() {
    const modalTemplate = `
    <div class="modal fade" id="modalAdicionarProduto" tabindex="-1" aria-labelledby="modalAdicionarProdutoLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-success">
            <h5 class="modal-title text-light" id="modalAdicionarProdutoLabel">Adicionar Produto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="formAdicionarProduto">
              <div class="mb-3">
                <label for="addNome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="addNome" name="addNome" required>
              </div>
              <div class="mb-3">
                <label for="addCodigo" class="form-label">Código</label>
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
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupArts">Art</label>
                <select class="form-select" id="inputGroupArts">
                  <option selected></option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-success" id="btnSalvarProduto">Salvar Produto</button>
          </div>
        </div>
      </div>
    </div>
  `;

    document.body.insertAdjacentHTML('beforeend', modalTemplate);

    document.getElementById('modalAdicionarProduto').addEventListener('shown.bs.modal', async () => {
        const arts = await getAllArts();
        populateArtsSelect(arts);
        console.log(arts);
    });

    function populateArtsSelect(arts) {
        const selectElement = document.getElementById('inputGroupArts');
        selectElement.innerHTML = '<option selected>Selecione...</option>';
        arts.forEach(art => {
            const option = document.createElement('option');
            option.value = art.id;
            option.textContent = art.name;
            selectElement.appendChild(option);
        });
    }

    function getSelectedArt() {
        const selectElement = document.getElementById('inputGroupArts');
        return Number(selectElement.value);
    }


    document.getElementById("btnSalvarProduto")
        ?.addEventListener("click", async () => {
            const form = document.getElementById("formAdicionarProduto");
            const formData = new FormData(form);

            const selectedArt = getSelectedArt();
            

            const novoProduto = {
                name: formData.get("addNome"),
                codProduct: formData.get("addCodigo"),
                typeProduct: formData.get("addCategoria"),
                price: parseFloat(formData.get("addPreco")),
                art: selectedArt
            };

            try {
                await createProduct(novoProduto);

                showModalFeedBack('modalSalvarProduto', 'modalSalvarProdutoMensagem', 'Produto adicionado com sucesso!');

                const modal = bootstrap.Modal.getInstance(
                    document.getElementById("modalAdicionarProduto")
                );
                modal.hide();
                form.reset();

            } catch (error) {
                console.error(`Erro ao adicionar o produto: ${error.message}`);
            }
        });
}

export const showModalCreatesProducts = (modalId) => {
    if (!document.getElementById(modalId)) {
        modalCreatesProducts();
    }
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}