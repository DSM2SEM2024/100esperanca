import { getOrCreateMainElement } from "./main";

const main = getOrCreateMainElement;
getOrCreateMainElement
export const footerHtml = `
<nav class="navbar align-items-start">
    <div class="container d-flex justify-content-center">
      <button type="button" class="btn btn-outline-success btn-lg btn-floating mx-2">
          <i class="bi bi-instagram"></i>
      </button>
    </div>
</nav>

`;

const footerElement = document.createElement('footer');
footerElement.innerHTML = footerHtml;
footerElement.classList="fixed-bottom"
document.body.insertAdjacentElement('beforeend',footerElement)