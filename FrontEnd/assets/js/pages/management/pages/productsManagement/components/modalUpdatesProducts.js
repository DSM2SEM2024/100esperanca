import { getAllArts } from "../../../../../services/artsService";
import { updateProduct } from "../../../../../services/productsService";
import { showModalFeedBack } from "./modalFeedBack";

export function modalUpdatesProducts(produto) {
    const existingModal = document.getElementById('modalEditarProduto');
    if (existingModal) {
        existingModal.remove();
    }

    const modalTemplate = `
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
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupArtsEdit">Art</label>
                <select class="form-select" id="inputGroupArtsEdit">
                  <option selected>Selecione...</option>
                </select>
              </div>
              <input type="hidden" id="editProdutoId" name="editProdutoId">
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-success" id="btnSalvarAlteracoes">Salvar alterações</button>
          </div>
        </div>
      </div>
    </div>
  `;

    document.body.insertAdjacentHTML('beforeend', modalTemplate);

    document.getElementById("editNome").value = produto.name;
    document.getElementById("editCodigo").value = produto.cod_product;
    document.getElementById("editCategoria").value = produto.type_product;
    document.getElementById("editPreco").value = produto.price;
    document.getElementById("editProdutoId").value = produto.id;

    document.getElementById('modalEditarProduto').addEventListener('shown.bs.modal', async () => {
        const arts = await getAllArts();
        populateArtsSelect(arts, produto.art);
    });

    function populateArtsSelect(arts, selectedArtId) {
        const selectElement = document.getElementById('inputGroupArtsEdit');
        selectElement.innerHTML = '<option selected>Selecione...</option>';
        arts.forEach(art => {
            const option = document.createElement('option');
            option.value = art.id;
            option.textContent = art.name;
            if (art.id === selectedArtId) {
                option.selected = true;
            }
            selectElement.appendChild(option);
        });
    }

    function getSelectedArt() {
        const selectElement = document.getElementById('inputGroupArtsEdit');
        return Number(selectElement.value);
    }

    document.getElementById("btnSalvarAlteracoes")
        ?.addEventListener("click", async () => {
            const form = document.getElementById("formEditarProduto");
            const formData = new FormData(form);

            const selectedArt = getSelectedArt();

            const produtoAtualizado = {
                name: formData.get("editNome"),
                codProduct: formData.get("editCodigo"),
                typeProduct: formData.get("editCategoria"),
                price: parseFloat(formData.get("editPreco")),
                art: selectedArt
            };

            try {
                const result = await updateProduct(formData.get
                    ("editProdutoId"), produtoAtualizado);
                console.log(result);

                showModalFeedBack('modalEditarProdutoFeedBack', 'modalEditarProdutoFeedBackMessage', 'Produto atualizado com sucesso!');
                const modal = bootstrap.Modal.getInstance(
                    document.getElementById("modalEditarProduto")
                );
                modal.hide();
                form.reset();
            } catch (error) {
                console.error(`Erro ao atualizar o produto: ${error.message}`);
            }
        });

    document.getElementById('modalEditarProduto').addEventListener('hidden.bs.modal', () => {
        const modalElement = document.getElementById('modalEditarProduto');
        if (modalElement) {
            modalElement.setAttribute('inert', '');
        }
    });
}

export const showModalUpdateProducts = (modalId, produto) => {
    modalUpdatesProducts(produto);
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}
