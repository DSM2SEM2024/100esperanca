import visgo from "../../imgs/visgo.jpg";

export const headerHtml = `
<header class="w-100 p-2 text-center d-flex justify-content-between align-items-center">
  <section>
    <img src="${visgo}" alt="LogoVisgo" class="img-fluid">
    <button id="voltar_btn" class="btn ms-3 btn-sm btn-success">
      Voltar
    </button>
  </section>

  <nav class="navbar mb-lg-0 d-none d-lg-flex d-flex justify-content-evenly">
    

    <div>
      <a id="home-Link" href="#home" class="text-decoration-none text-success" role="button">
        <button class="btn btn-outline-success border-0">Home</button>
      </a>

      <a id="createUser-Link" href="#criarUsuario" class="text-decoration-none text-success" role="button">
        <button class="btn btn-outline-success border-0">Criar Usuário</button>
      </a>

      <a id="manageUser-Link" href="#gerenciarUsuario" class="text-decoration-none text-success" role="button">
        <button class="btn btn-outline-success border-0">Gerenciar Usuário</button>
      </a>

      <a id="produtos-Link" href="#produtos" class="text-decoration-none text-success" role="button">
        <button class="btn btn-outline-success border-0">Produtos</button>
      </a>
    </div>
  </nav>

      
  <nav class="navbar px-3 d-flex justify-content-evenly">
      <ul class="navbar-nav">
        <li class="nav-item dropstart">
          <button class="btn btn-success btn-sm dropdown-toggle dropdown-toggle-split rounded-3" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-people-fill "></i>
          </button>

        <ul class="dropdown-menu dropdown-menu position-absolute">
          <li>
            <a class="dropdown-item link-outline-success dropdown-item-text text-success border-bottom" href="#login">
              Login
            </a>
          </li>

          <li>
            <a class="dropdown-item dropdown-item-text text-danger" href="#">
              Logout
            </a>
          </li>
        </ul>

        <a class="icon-link" href="#cart">
          <button type="button" class="btn btn-success btn-sm rounded-3">
            <i class="bi bi-cart-fill text-decoration-none">
            </i>
          </button>
        </a>

        </li>
      </ul>
  </nav>


  
`;

const headerElement = document.createElement('header');
headerElement.innerHTML = headerHtml;
document.body.insertAdjacentElement('afterbegin', headerElement);

let voltarButton = document.querySelector("#voltar_btn");
voltarButton.addEventListener('click', () => {
    window.history.go(-1);
});

export function updateNavbarLinks() {
  const createUserLink = document.getElementById('createUser-Link');
  const manageUserLink = document.getElementById('manageUser-Link');
  const productsLink = document.getElementById('produtos-Link');
  const homeLink = document.getElementById('home-Link');

  createUserLink.style.display = location.hash === '#criarUsuario' ? 'none' : 'inline';
  manageUserLink.style.display = location.hash === '#gerenciarUsuario' ? 'none' : 'inline';
  productsLink.style.display = location.hash === '#produtos' ? 'none' : 'inline';
  homeLink.style.display = location.hash === '#home' ? 'none' : 'inline';
}
window.addEventListener('hashchange', updateNavbarLinks);
updateNavbarLinks();