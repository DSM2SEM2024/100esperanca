
// Cria a template string para o header
const headerHtml = `
    <header class="position-fixed top-0 start-0 w-100 bg-white p-2 text-center">
        <img src="assets/imgs/visgo.jpg" alt="logo" class="img-fluid" style="max-height: 80px;">
    </header>
`;
// Insere o header no início do body
document.body.insertAdjacentHTML('afterbegin', headerHtml);

// cria o header no hmtl 
    const headerElement = document.createElement('header');
// header no html recebe o conteudo da template string
    headerElement.innerHTML = headerHtml;
// aplica o elemento header ao body html
    document.body.insertAdjacentElement('afterbegin', headerElement)
