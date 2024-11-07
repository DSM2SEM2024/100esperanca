import visgo from "../../imgs/visgo.jpg";

export const headerHtml = `

    <img src="${visgo}" alt="LogoVisgo" class="img-fluid">
      <nav class="navbar w-50 mb-lg-0 d-flex justify-content-evenly">
        <div>
          <a href="#login" class="text-decoration-none text-success" role="button">
            <button class="btn btn-outline-success border-0">Login</button>
          </a>
          <a href="#criarUsuario" class="text-decoration-none text-success" role="button">
            <button class="btn btn-outline-success border-0">Criar Usuário</button>
          </a>
          <a href="#gerenciarUsuario" class="text-decoration-none text-success" role="button">
            <button class="btn btn-outline-success border-0">Gerenciar Usuário</button>
          </a>
          <a href="#produtos" class="text-decoration-none text-success" role="button">
            <button class="btn btn-outline-success border-0">Produtos</button>
          </a>
        </div>
      </nav>
      <button id="voltar_btn" class="btn btn-sm btn-success">Voltar</button>

`;

const headerElement = document.createElement('header');

headerElement.innerHTML = headerHtml;
document.body.insertAdjacentElement('afterbegin', headerElement);
headerElement.classList="w-100 p-2 text-center d-flex justify-content-between align-items-center"

let voltarButton = document.querySelector("#voltar_btn");
voltarButton.addEventListener('click', () => {
    window.history.go(-1);
});