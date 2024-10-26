
export const headerHtml = `
        <section  class=" w-100 p-2 text-center  d-flex justify-content-between">
            <img src="assets/imgs/visgo.jpg" alt="logo" class="img-fluid">
            <nav class="navbar d-flex justify-content-evenly">
                <div class="">
        
                    <button class="btn btn-outline-light" style="border: 0" style="text-decoration-none, important"><a href="#login" class="text-decoration-underline text-success text-hover-success">Login</a></button>
                    <button class="btn btn-outline-light" style="border: 0"><a href="#criarUsuario" class="text-decoration-underline text-success text-hover-success">Criar Usuário</a></button>      
                    <button class="btn btn-outline-light" style="border: 0"><a href="#gerenciarUsuario" class="text-decoration-underline text-success text-hover-success">Gerenciar Usuário</a></button>
        
            </nav>
            <button id="voltar_btn" class="btn btn-success" style="">Voltar</button>
        </section>
        

</div>
`;

const headerElement = document.createElement('header');
headerElement.innerHTML = headerHtml;
document.body.insertAdjacentElement('afterbegin', headerElement);


  let voltarButton = document.querySelector("#voltar_btn");
    voltarButton.addEventListener('click', () => {
         window.history.go(-1);
    });
    document.body.appendChild(headerElement);
