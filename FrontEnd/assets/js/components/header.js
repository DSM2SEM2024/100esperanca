import visgo from"../../imgs/visgo.jpg"
export const headerHtml = `
  <header class=" w-100 p-2 text-center  d-flex justify-content-between align-items-center" style="border:solid 1px">
    <img src="${visgo}" alt="LogoVisgo" class="img-fluid">
      <nav class="navbar w-50 mb-2 mb-lg-0 d-flex justify-content-evenly">
        <div class="">
          <button class="btn btn-outline-light" style="border: 0" style="text-decoration-none, important"><a href="#login" class="text-decoration-underline text-success text-hover-success">Login</a></button>
          <button class="btn btn-outline-light" style="border: 0"><a href="#criarUsuario" class="text-decoration-underline text-success text-hover-success">Criar Usuário</a></button>      
          <button class="btn btn-outline-light" style="border: 0"><a href="#gerenciarUsuario" class="text-decoration-underline text-success text-hover-success">Gerenciar Usuário</a></button>
        
        </div>
      </nav>
        <button id="voltar_btn" class="btn btn-sm btn-success" style="">Voltar</button>
  </header>
        

`;

const headerElement = document.createElement('header');
headerElement.innerHTML = headerHtml;
document.body.insertAdjacentElement('afterbegin', headerElement);


  let voltarButton = document.querySelector("#voltar_btn");
    voltarButton.addEventListener('click', () => {
         window.history.go(-1);
    });
    document.body.appendChild(headerElement);
