
// cria a tamplate string
    const headerHtml = 
    `
        <img src="docs/visgo.jpg" alt="logo">
    `;
// cria o header no hmtl 
    const headerElement = document.createElement('header');

// header no html recebe o conteudo da template string
    headerElement.innerHTML = headerHtml;
// aplica o elemento header ao body html
    document.body.insertAdjacentElement('beforeend', headerElement)
