import { getOrCreateMainElement } from "../../components/main";

const main = getOrCreateMainElement();
main.classList.add("vh-100", "d-flex", "flex-column");

export function gerenciarUsuarioHtml() {
  const gerenciarUsuario = `
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
        <div class="offcanvas-body d-flex flex-column justify-content-between">
          <ul class="list-unstyled">
            <li><a href="#item1" class="text-decoration-none text-white">Consultar Usuário</a></li>
            <li><a href="#item2" class="text-decoration-none text-white">Link qualquer 2</a></li>
            <li><a href="#item3" class="text-decoration-none text-white">Link qualquer 3</a></li>
          </ul>
        </div>
      </nav>
      
      <!-- Conteúdo da Página -->
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
  `;

  main.innerHTML = gerenciarUsuario;
}
