
// Cria a template string para o header
const headerHtml = `
        <section  class=" w-100 p-2 text-center  d-flex justify-content-between">
        
        <img src="assets/imgs/visgo.jpg" alt="logo" class="img-fluid">
    <a href="tela_login.html"><button class="btn btn-success  align-self-start ">  voltar </button></a>
        </section>
    
`;
// tem q fazer o botao voltar pra pagina anterior nao para tela login

// Insere o header no início do body

// cria o header no hmtl 
    const headerElement = document.createElement('header');
// header no html recebe o conteudo da template string
    headerElement.innerHTML = headerHtml;
// aplica o elemento header ao body html
    document.body.insertAdjacentElement('afterbegin', headerElement)
