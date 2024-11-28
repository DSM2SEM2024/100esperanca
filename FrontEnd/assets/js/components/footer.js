import { getOrCreateMainElement } from "./main";

export const footerHtml = `
<section class="row p-4 border-top w-100 d-flex" id="footer-rows">

    <div class="col mb-3">
      <h5>Redes Sociais</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <a href="https://www.instagram.com/visgo.dejaca?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-instagram"> @visgo.dejaca</i>
          </a>
        </li>

        <li class="nav-item mb-2">
          <a href="https://www.instagram.com/jaca_dupe?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-instagram"> @jaca.dupe</i>
          </a>
        </li>


       
        <li class="nav-item mb-2">
          <a href="https://www.instagram.com/jacaartesvisuais?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-instagram"> @jacaartevisuais</i>
          </a>
        </li>
      </ul>
  </div>

  
      <div class="col mb-3">
      <h5>Formas de Pagamento</h5>
      <ul class="nav flex-row gap-2">
      <i class="bi bi-paypal h3"></i>
      <i class="bi bi-credit-card h3"></i>
      <i class="bi bi-whatsapp h3"></i>
      </ul>
    </div>

     <div class="col mb-3">
      <h5>Desenvolvedores</h5>
      <ul class="nav flex-column">

        <li>
          <a href="https://github.com/RudeBoyOne" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>RudeBoyOne
          </a>
        </li>

         <li>
          <a href="https://github.com/rafammb" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>rafammb
          </a>
        </li>

         <li>
          <a href="https://github.com/yllopes" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>yllopes
          </a>
        </li>

         <li>
          <a href="https://github.com/Gadelha1" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>Gadelha1
          </a>
        </li>

         <li>
          <a href="https://github.com/Kani-a" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>Kani-a
          </a>
        </li>

         <li>
          <a href="https://github.com/RudeBoyOne" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>RudeBoyOne
          </a>
        </li>
      </ul>
    </div>
  </section>
`;

export const createFooterElement = () => {
  let footerElement = document.getElementById("footer");
  if (!footerElement) {
    footerElement = document.createElement("footer");
    footerElement.id = "footer";
    footerElement.innerHTML = footerHtml;
    document.body.insertAdjacentElement("beforeend", footerElement);
  }
};
createFooterElement();