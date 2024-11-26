import { footerHtml } from "../../components/footer";
import { getOrCreateMainElement } from "../../components/main";
import { clearBody } from "../../functions/clear_body";


const main = getOrCreateMainElement();
main.classList = "vh-100 d-flex flex-column";

export function telaAdminHtml() {
  const sidebarGerenciarUsuarios = `
    <div class="d-flex flex-grow-1">
      <!-- Botão para abrir a navbar (visível no mobile e desktop) -->
      <button 
        class="btn btn-success position-fixed start-0 top-4 m-3 z-3" 
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasSidebar" 
        aria-controls="offcanvasSidebar">
        <i class="bi bi-list"></i>
      </button>

      <!-- Navbar offcanvas (funciona tanto no desktop quanto no mobile) -->
      <nav 
        class="offcanvas offcanvas-start bg-success text-white d-lg-flex flex-column p-3 vh-100" 
        tabindex="-1" 
        id="offcanvasSidebar" 
        aria-labelledby="offcanvasSidebarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-white" id="offcanvasSidebarLabel">Menu</h5>
          <button 
            type="button" 
            class="btn-close btn-close-white" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close">
          </button>
        </div>

        <ul class="list-group list-group justify-content-center">
          <li class="list-group-item">
            <a href="#gerenciarUsuarios" class="text-decoration-none text-success">
            Gerenciar Usuários
            </a>
          </li>
          <li class="list-group-item">
            <a href="#gerenciarProdutos" class="text-decoration-none text-success">
            Gerenciar Produtos
            </a>
          </li>
          <li class="list-group-item">
            <a href="#gerenciarPromocoes" class="text-decoration-none text-success">
            Gerenciar Promoções
            </a>
          </li>
        </ul>
      </nav>
  `;
  main.innerHTML = sidebarGerenciarUsuarios;
}