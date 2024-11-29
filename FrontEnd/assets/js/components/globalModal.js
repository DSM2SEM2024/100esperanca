const createGlobalModal = (idModal, idMessageModal, action) => {
    const modalTemplate = `
        <div class="modal fade" id="${idModal}" tabindex="-1" aria-labelledby="${idModal}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${idModal}Label">${action}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="${idMessageModal}">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalTemplate);
}


export const showModal = (modalId, messageId, action , message) => {
    if (!document.getElementById(modalId)) {
        createGlobalModal(modalId, messageId, action);
    }
    document.getElementById(messageId).textContent = message;
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}