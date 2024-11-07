import { getOrCreateMainElement } from "../components/main";

const main = getOrCreateMainElement()
main.classList = 'vh-100 d-block';
export function gerenciarUsuarioHtml() {
  const gerenciarUsuario = `
 

   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>



        <section class="container d-block p-2 align-middle justify-content-center">
          <div id="tabela-container" class=" text-center">
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
`;
  main.classList = " p-1 vh-100 justify-content-center align-items-center"
  main.innerHTML = gerenciarUsuario
}