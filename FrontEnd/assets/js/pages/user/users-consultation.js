import { getOrCreateMainElement } from "../../components/main";
import { gerenciarUsuarioHtml } from "./user-admin-screen";


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
                  <th>Ação</th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Usuário 1</td>
                  <td>usuario1@example.com</td>
                  <td>
                    <button class="btn btn-danger shadow-lg">
                      <a href="" class="text-decoration-none">
                        <i class="bi bi-trash-fill text-white"></i>
                      </a>
                    </button>
                    <button class="btn btn-success shadow-lg">
                      <a href="" class="text-decoration-none">
                        <i class="bi bi-pencil-square text-white"></i>
                      </a>
                    </button>
                    </td>
                    </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Usuário 2</td>
                  <td>usuario2@example.com</td>
                  <td>
                    <button class="btn btn-danger shadow-lg">
                      <a href="" class="text-decoration-none">
                        <i class="bi bi-trash-fill text-white"></i>
                      </a>
                    </button>
                    <button class="btn btn-success shadow-lg">
                      <a href="" class="text-decoration-none">
                        <i class="bi bi-pencil-square text-white"></i>
                      </a>
                    </button>
                    </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Usuário 3</td>
                  <td>usuario3@example.com</td>
                  <td>
                    <button class="btn btn-danger shadow-lg">
                      <a href="" class="text-decoration-none">
                        <i class="bi bi-trash-fill text-white"></i>
                      </a>
                    </button>
                    <button class="btn btn-success shadow-lg">
                      <a href="" class="text-decoration-none">
                        <i class="bi bi-pencil-square text-white"></i>
                      </a>
                    </button>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
    `
    main.innerHTML = (consultarUsuarios);
    
}  