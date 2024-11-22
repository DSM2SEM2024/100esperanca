import { getOrCreateMainElement } from "../../components/main";

const main = getOrCreateMainElement();
main.classList = "vh-100 d-block";

export function gerenciarUsuarioHtml() {
  const gerenciarUsuario = `
    <div class="d-flex">
      <!-- Botão para abrir o offcanvas (visível apenas no mobile) -->
      <button 
        class="btn btn-primary bg-success d-lg-none m-3" 
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasScrolling" 
        aria-controls="offcanvasScrolling">
        <i class="bi bi-list"></i>
      </button>
      
      <!-- Sidebar fixa no desktop e offcanvas no mobile -->
      <nav 
        class="offcanvas-lg offcanvas-start bg-success text-white d-lg-flex flex-column vh-100 p-3" 
        tabindex="-1" 
        id="offcanvasScrolling" 
        aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header d-lg-none">
          <h5 class="offcanvas-title text-white" id="offcanvasScrollingLabel">Menu</h5>
          <button 
            type="button" 
            class="btn-close btn-close-white" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <nav>
            <ul class="list-unstyled">
              <li><a href="#item1" class="text-decoration-none text-white">Consultar Usuário</a></li>
              <li><a href="#item2" class="text-decoration-none text-white">Link qualquer 2</a></li>
              <li><a href="#item3" class="text-decoration-none text-white">Link qualquer 3</a></li>
            </ul>
          </nav>
        </div>
      </nav>

      <!-- Conteúdo principal -->
      <section class="container-fluid d-block p-4">
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

  main.classList = "p-1 vh-100 justify-content-center align-items-center";
  main.innerHTML = gerenciarUsuario;
}
