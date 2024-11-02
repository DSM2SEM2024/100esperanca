import { getOrCreateMainElement } from "../components/main";

const main = getOrCreateMainElement()
main.classList = 'vh-100 d-block';
export function gerenciarUsuarioHtml(){
      const gerenciarUsuario = `
 
        <nav class="navbar navbar-expand-lg bg-success navbar-light bg-light d-flex flex-column">

          <div class="w-100 d-block flex-column" id="navbarNav">
       
            
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            
            
              <a class="nav-link" href="#">Features</a>
            
            
              <a class="nav-link" href="#">Pricing</a>
            
            
              <a class="nav-link disabled" href="#">Disabled</a>
            
          
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
        
        </table>
        </div>
        </section>
`; 
  main.classList = "d-flex p-1 h-75 justify-content-center align-items-center"
  main.innerHTML = gerenciarUsuario
 }