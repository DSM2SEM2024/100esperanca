
// cria a tamplate string
    const headerHtml = 
    `
     <div id="header">
        <img src="docs/visgo.jpg" alt="">
        
        <ul>
            <li>placecholder</li>
            <li>placecholder</li>
            <li>placecholder</li>
            <li>placecholder</li>
        </ul>
    </div>
    `;
// cria o header no hmtl 
    const headerElement = document.createElement('header');

// header no html recebe o conteudo da template string
    headerElement.innerHTML = headerHtml;
// aplica o elemento header ao body html
    document.body.insertAdjacentElement('afterbegin', headerElement)
