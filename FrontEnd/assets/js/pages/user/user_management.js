import { getOrCreateMainElement } from "../../components/main";
import { clearBody } from "../../functions/clear_body";


const main = getOrCreateMainElement();
main.classList = "vh-100 d-flex flex-column";

export function gerenciarUsuarioHtml() {
  const sidebarGerenciarUsuarios = `
    <div class="d-flex flex-grow-1">
      <button 
        class="btn btn-success d-lg-none position-fixed start-0 top-50 m-3 z-3" 
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasSidebar" 
        aria-controls="offcanvasSidebar">
        <i class="bi bi-list"></i>
      </button>

      <nav 
        class="offcanvas-lg offcanvas-start bg-success text-success d-lg-flex flex-column p-3 vh-100" 
        tabindex="-1" 
        id="offcanvasSidebar" 
        aria-labelledby="offcanvasSidebarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-white" id="offcanvasSidebarLabel">Menu</h5>
          <button 
            type="button" 
            class="btn-close btn-close-white" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column justify-content-between">
          <ul class="list-unstyled">
            
            <li>
              <a href="#consultarUsuarios" class="text-decoration-none text-white">
                Gerenciar Usuários
              </a>
            </li>

            <li>
              <a href="" class="text-decoration-none text-white">
                Gerenciar Produtos
              </a>
            </li>

            <li>
              <a href="#item3" class="text-decoration-none text-white">
                Gerenciar Promoções
              </a>
            </li>

          </ul>
        </div>
      </nav>
  `;
  main.innerHTML = sidebarGerenciarUsuarios;
}

export function consultarUsuariosHtml(){
  const consultarUsuarios = `
  <section class="container-fluid flex-grow-1 p-4">
        <div id="tabela-container" class="text-center">
          <h2>Consulta de Usuários</h2>
          <table class="table table-bordered table-responsive">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Usuário 1</td>
                <td>usuario1@example.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Usuário 2</td>
                <td>usuario2@example.com</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Usuário 3</td>
                <td>usuario3@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `
  if (location.hash === '#consultarUsuários'){
  clearBody();
  main.innerHTML = consultarUsuarios;
  }
}