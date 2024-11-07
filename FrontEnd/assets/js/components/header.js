import visgo from "../../imgs/visgo.jpg";

export const headerHtml = `
  <header class="w-100 p-2 text-center d-flex justify-content-between align-items-center">
    <img src="${visgo}" alt="LogoVisgo" class="img-fluid">
      <nav class="navbar w-50 mb-lg-0 d-flex justify-content-evenly">
        <div>
          <a id="login-Link" href="#login" class="text-decoration-none text-success" role="button">
            <button class="btn btn-outline-success border-0">Login</button>
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
      <button id="voltar_btn" class="btn btn-sm btn-success">Voltar</button>
  </header>
`;

const headerElement = document.createElement('header');
headerElement.innerHTML = headerHtml;
document.body.insertAdjacentElement('afterbegin', headerElement);

let voltarButton = document.querySelector("#voltar_btn");
voltarButton.addEventListener('click', () => {
    window.history.go(-1);
});

export function updateNavbarLinks() {
  const loginLink = document.getElementById('login-Link');
  const createUserLink = document.getElementById('createUser-Link');
  const manageUserLink = document.getElementById('manageUser-Link');
  const productsLink = document.getElementById('produtos-Link');

  loginLink.style.display = location.hash === '#login' ? 'none' : 'inline';
  createUserLink.style.display = location.hash === '#criarUsuario' ? 'none' : 'inline';
  manageUserLink.style.display = location.hash === '#gerenciarUsuario' ? 'none' : 'inline';
  productsLink.style.display = location.hash === '#produtos' ? 'none' : 'inline';
}
window.addEventListener('hashchange', updateNavbarLinks);
updateNavbarLinks();