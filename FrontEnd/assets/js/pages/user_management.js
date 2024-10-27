import { getOrCreateMainElement } from "../components/main";
const main = getOrCreateMainElement()
export function gerenciarUsuarioHtml(){
      const gerenciarUsuario = `
      <main>
      <aside>
  
        <section class="sidebar d-flex " id="sidebar">
        <ul class="nav flex-column">
        <li class="nav-item">
        <a class="nav-link active text-black" href="#" id="usuario-link">•Usuário</a>
        </li>
        <li class="nav-item">
        <a class="nav-link text-black" style="text-hover-success" " href="#">•Controle</a>
        </li>
        <li class="nav-item"> 
        <a class="nav-link text-black" style="text-hover-success"" href="#">•Imagens</a>
        </li>
        <li class="nav-item">
        <a class="nav-link text-black" style="text-hover-success"" href="#">•Admin</a>
        </li>
        </ul>
        </section>
        </aside>
        
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
        </main>
`; 
  main.innerHTML = gerenciarUsuario
 }