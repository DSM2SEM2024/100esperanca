import visgo from "../../imgs/visgo.jpg";

export const headerHtml = `
<header class="w-100 p-2 text-center d-flex justify-content-between align-items-center">

  <section>
    <img src="${visgo}" alt="LogoVisgo" class="img-fluid">
    <button id="voltar_btn" class="btn ms-3 btn-sm btn-success">
      Voltar
    </button>
  </section>

  <nav class="horizontal-nav d-flex">
        <a id="manageUser-Link" href="#gerenciarUsuarios" class="text-decoration-none text-success" role="button">
          <button class="btn btn-outline-success w-100 border-0">
            Tela Admin
          </button>
        </a>

        <a id="produtos-Link" href="#produtos" class="text-decoration-none text-success" role="button">
              <button class="btn btn-outline-success w-100 border-0">
                 Produtos
              </button>
          </a>
        <a id="produtos-Link" href="#produtos" class="text-decoration-none text-success" role="button">
          <button class="btn btn-outline-success w-100 border-0">
              Produtos
          </button>
        </a>
  </nav>



  <nav class="navbar d-flex justify-content-evenly p-0 m-0" id="mobile-nav">
    <ul class="navbar-nav">
      <li class="nav-item dropbottom">
        <button class="btn btn-success btn-sm  dropdown-toggle-split rounded-3" data-bs-toggle="dropdown" aria-expanded="false">
        <p class="fs-5 m-0">
           menu
        </p>
        
        </button>
        <ul class="dropdown-menu dropdown-menu position-absolute">
          <li>
             <a id="manageUser-Link" href="#gerenciarUsuarios" class="text-decoration-none text-success" role="button">
          <button class="btn btn-outline-success w-100 border-0">Tela Admin</button>
        </a>
          </li>

          <li>
           <a id="produtos-Link" href="#produtos" class="text-decoration-none text-success" role="button">
              <button class="btn btn-outline-success w-100 border-0">
                 Produtos
              </button>
           </a>
          </li>
          <li>
            <a id="home-Link" href="#home" class="text-decoration-none" role="button">
              <button class="btn btn-outline-success w-100 border-0">
                Home
              </button>
            </a>
        </li>
    </ul>
  </nav>

  

  <nav class="navbar px-3 d-flex justify-content-evenly">
    <ul class="navbar-nav">
      <li class="nav-item dropstart">
        <button class="btn btn-success btn-sm dropdown-toggle dropdown-toggle-split rounded-3" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-people-fill"></i>
        </button>

        <ul class="dropdown-menu dropdown-menu position-absolute">
          <li>
            <a class="dropdown-item link-outline-success dropdown-item-text text-success border-bottom" href="#login">
              Login
            </a>
          </li>

          <li>
            <a class="dropdown-item link-outline-success dropdown-item-text text-success" href="#criarUsuario">
              Cadastro
            </a>
          </li>
        </ul>

        <a class="icon-link" href="#cart">
          <button type="button" class="btn btn-success btn-sm rounded-3">
            <i class="bi bi-cart-fill text-decoration-none"></i>
          </button>
        </a>
      </li>
    </ul>
  </nav>
</header>
`;

const headerElement = document.createElement('header');
headerElement.innerHTML = headerHtml;
document.body.insertAdjacentElement('afterbegin', headerElement);
headerElement.classList = "w-100 p-2 text-center d-flex justify-content-between align-items-center";

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
