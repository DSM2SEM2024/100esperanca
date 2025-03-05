import visgo from "../../imgs/visgo.jpg";

export const headerHtml = `

  <section class="d-flex justify-content-start align-items-center">
    <img src="${visgo}" alt="LogoVisgo" class="img-fluid">
    <button id="voltar_btn" class="btn ms-3 btn-sm btn-success">
      Voltar
    </button>
  </section>

  <nav class="d-flex justify-content-md-center w-100" id="nav-horizontal">
        <a id="manageUser-Link" href="#gerenciarUsuarios" class="text-decoration-none text-success" role="button">
          <button class="btn btn-outline-success w-100 border-0">
            gerenciamento de usuario
          </button>
        </a>

        <a class="text-decoration-none text-success" aria-current="page" href="#gerenciarProdutos">
              <button class="btn btn-outline-success w-100 border-0">
                gerenciamento de produtos
             </button>
          </a>

          
        <a id="produtos-Link" href="#produtos" class="text-decoration-none text-success" role="button">
              <button class="btn btn-outline-success w-100 border-0">
                 Produtos
              </button>
          </a>

          <a class="text-decoration-none text-success" aria-current="page" href="#home" id="home-Link">
                <button class="btn btn-outline-success w-100 border-0">
                 home
              </button>
          </a>
  </nav>





  <nav class="navbar bg-body-tertiary p-0 d-flex d-xs-flex d-md-none">
    <div class="container-fluid bg-success p-0">

      <button class="navbar-toggler bg-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation ">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

        <div class="offcanvas-header bg-success">
        

          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body bg-success">
        
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <h5 class="text-start">
            paginas
          </h5>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home" id="home-Link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#produtos">
              Produtos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#cart">
                carrinho
              </a>
            </li>
            <hr>
          <h5 class="text-start">
            tela admin
          </h5>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#gerenciarUsuarios">
                gerenciamento de produtos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gerenciarProdutos">
                  gerenciamento de usuarios
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </nav>

`;

const headerElement = document.createElement('header');
headerElement.innerHTML = headerHtml;
document.body.insertAdjacentElement('afterbegin', headerElement);
headerElement.classList = "w-100  p-2 text-center align-items-center justify-content-between d-flex d-md-inline-flex" ;

const voltarButton = document.querySelector("#voltar_btn");
voltarButton.addEventListener('click', () => {
  window.history.go(-1);
});

export function updateNavbarLinks() {
  const manageUserLink = document.getElementById('manageUser-Link');
  const productsLink = document.getElementById('produtos-Link');
  const homeLink = document.getElementById('home-Link');

  manageUserLink.style.display = location.hash === '#telaAdmin' ? 'none' : 'inline';
  productsLink.style.display = location.hash === '#produtos' ? 'none' : 'inline';
  homeLink.style.display = location.hash === '#home' || location.hash === '' ? 'none' : 'inline';

  voltarButton.style.display = location.hash === '#home' || location.hash === '' ? 'none' : 'inline';
}

window.addEventListener('hashchange', updateNavbarLinks);
window.addEventListener("load", updateNavbarLinks);
updateNavbarLinks();
