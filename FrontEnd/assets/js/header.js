
// Cria a template string para o header
const headerHtml = `
            <section  class=" w-100 p-2 text-center  d-flex justify-content-between">
            
            <img src="assets/imgs/visgo.jpg" alt="logo" class="img-fluid">
         <button id="voltar_btn" class="btn btn-success h-25" >voltar</button>
  </section>
`;

// cria o header no hmtl 
    const headerElement = document.createElement('header');
// header no html recebe o conteudo da template string
    headerElement.innerHTML = headerHtml;
// aplica o elemento header ao body html
    document.body.insertAdjacentElement('afterbegin', headerElement);

    
  

  let voltarButton = document.querySelector("#voltar_btn");
    voltarButton.addEventListener('click', () => {
        console.log("teste");
        
         window.history.go(-1);
    });
    // Adicionando o botão ao body ou a um contêiner específico
    document.body.appendChild(headerElement);

// Insere o header no início do body

