
// Cria a template string para o header
const headerHtml = `
        <section  class=" w-100 p-2 text-center  d-flex justify-content-between">
        
        <img src="assets/imgs/visgo.jpg" alt="logo" class="img-fluid">
        <button id="voltar-btn"></button>
  
`;
// tem q fazer o botao voltar pra pagina anterior nao para tela login

// Insere o header no início do body

// cria o header no hmtl 
    const headerElement = document.createElement('header');
// header no html recebe o conteudo da template string
    headerElement.innerHTML = headerHtml;
// aplica o elemento header ao body html
    document.body.insertAdjacentElement('afterbegin', headerElement)

    
    const voltarButton = document.createElement('button');
    voltarButton.innerHTML = 'Voltar';
    voltarButton.id = 'voltar-btn'; // ID específico para o novo botão
    // Adicionando o evento de clique
    voltarButton.addEventListener('click', () => {
        window.history.go(-1); // Altere para o caminho correto
    });
    // Adicionando o botão ao body ou a um contêiner específico
    document.body.appendChild(voltarButton);
