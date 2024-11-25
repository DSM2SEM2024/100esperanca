import { getOrCreateMainElement } from "../../components/main";

const main = getOrCreateMainElement()
main.classList = 'vh-100 d-block';
export function gerenciarUsuarioHtml() {
  const gerenciarUsuario = `
      <section class="side-navbar d-flex w-100 justify-content-end">


           
    <button class="btn btn-primary bg-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
      <i class="bi bi-list"></i>
    </button>
    
    <div class="offcanvas offcanvas-start hide" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" aria-modal="true" role="dialog">
      <div class="offcanvas-header m-4">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body p-5">
      <p>Try scrolling the rest of the page to see this option in action.</p>
      <p>Try scrolling the rest of the page to see this option in action.</p>
      <p>Try scrolling the rest of the page to see this option in action.</p>
      <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
    </div>
    




      </section>


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