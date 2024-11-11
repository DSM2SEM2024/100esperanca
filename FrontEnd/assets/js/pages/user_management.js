import { getOrCreateMainElement } from "../components/main";

const main = getOrCreateMainElement()
main.classList = 'vh-100 d-block';
export function gerenciarUsuarioHtml() {
  const gerenciarUsuario = `
      <div>
        <ul>
          <li> texto1 </li>
          <li> texto2 </li>
          <li> texto3  </li>
        </ul>
      <div>


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