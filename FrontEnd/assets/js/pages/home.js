export const homeHtml = `
<section>
<nav>
<ul>
<li>
<a href="#login">Login</a>
</li>
<li>
<a href="#criarUsuario">Criar Usuário</a>
</li>
</nav>
</section>
`

const loginElement = document.createElement('login');
loginElement.innerHTML = homeHtml;
document.body.insertAdjacentElement('beforeend',loginElement);