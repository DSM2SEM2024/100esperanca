import { renderTabelaProdutos } from "../productsManagement";

function modalFeedback(modalId, messageId) {
    const modalTemplate = `
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="modalSalvarProdutoLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-success" id="${modalId}Label">Status</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center" id="${messageId}"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  `;

    document.body.insertAdjacentHTML('beforeend', modalTemplate);

    console.log(modalTemplate);
    
}

export const showModalFeedBack = (modalId, messageId, message) => {
    if (!document.getElementById(modalId)) {
        modalFeedback(modalId, messageId);
    }
    const messageElement = document.getElementById(messageId);
    if (messageElement) {
        messageElement.textContent = message;
    } else {
        console.error(`Elemento com ID ${messageId} não encontrado.`);
    }
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();

    document.getElementById(modalId).addEventListener('hidden.bs.modal', () => {
        renderTabelaProdutos();
    });
}
