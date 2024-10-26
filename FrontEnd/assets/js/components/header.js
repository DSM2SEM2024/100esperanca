
export const headerHtml = `
        <section  class=" w-100 p-2 text-center  d-flex justify-content-between">
            <img src="assets/imgs/visgo.jpg" alt="logo" class="img-fluid">
            <button id="voltar_btn" class="btn btn-success" >voltar</button>
        </section>
`;

const headerElement = document.createElement('header');
headerElement.innerHTML = headerHtml;
document.body.insertAdjacentElement('afterbegin', headerElement);


  let voltarButton = document.querySelector("#voltar_btn");
    voltarButton.addEventListener('click', () => {
         window.history.go(-1);
    });
    // Adicionando o botão ao body ou a um contêiner específico
    document.body.appendChild(headerElement);
