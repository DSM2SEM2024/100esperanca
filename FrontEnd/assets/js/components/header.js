import visgo from "../../imgs/visgo.jpg";

export const headerHtml = `
  <header class="w-100 p-2 text-center d-flex justify-content-between align-items-center" style="border:solid 1px">
    <img src="${visgo}" alt="LogoVisgo" class="img-fluid">
      <nav class="navbar w-50 mb-lg-0 d-flex justify-content-evenly">
        <div>
          <a id="login-link" href="#login" class="text-decoration-none text-success" role="button">
            <button class="btn btn-outline-success border-0">Login</button>
          </a>
          <a id="create-user-link" href="#criarUsuario" class="text-decoration-none text-success" role="button">
            <button class="btn btn-outline-success border-0">Criar Usuário</button>
          </a>
          <a id="manage-user-link" href="#gerenciarUsuario" class="text-decoration-none text-success" role="button">
            <button class="btn btn-outline-success border-0">Gerenciar Usuário</button>
          </a>
          <a id="logout-link" href="#" class="text-decoration-none text-success" role="button">
            <button class="btn btn-outline-danger border-0">Logout</button>
          </a>
        </div>
      </nav>
      <button id="voltar_btn" class="btn btn-sm btn-success">Voltar</button>
  </header>
`;

const headerElement = document.createElement('header');
headerElement.innerHTML = headerHtml;
document.body.insertAdjacentElement('afterbegin', headerElement);

let isUserLoggedIn = true; // Estado inicial de login

let voltarButton = document.querySelector("#voltar_btn");
voltarButton.addEventListener('click', () => {
    window.history.go(-1);
});

// Função para atualizar os links na navbar com base no estado de login e na página
export function updateNavbarLinks() {
    const loginLink = document.getElementById('login-link');
    const createUserLink = document.getElementById('create-user-link');
    const manageUserLink = document.getElementById('manage-user-link');
    const logoutLink = document.getElementById('logout-link');

    // Exibe ou oculta links específicos com base na página atual
    loginLink.style.display = location.hash === '#login' ? 'none' : (isUserLoggedIn ? 'none' : 'inline');
    createUserLink.style.display = location.hash === '#criarUsuario' ? 'none' : 'inline';
    manageUserLink.style.display = location.hash === '#gerenciarUsuario' ? 'none' : 'inline';
    logoutLink.style.display = isUserLoggedIn ? 'inline' : 'none';
}

updateNavbarLinks();

function FazerLogout() {
    isUserLoggedIn = false; // desloga
    window.location.hash = '#login';
    updateNavbarLinks(); 
}

// Adiciona o evento de clique no botão de logout
const logoutLink = document.getElementById('logout-link');
logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    FazerLogout();
});
