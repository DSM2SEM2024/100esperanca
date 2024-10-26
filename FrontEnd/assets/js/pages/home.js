export const homeHtml = `
<div class="container text-center">
    <nav class="navbar bg-body-tertiary">
        <div class="">

            <a href="#login" class="text-decoration-underline text-success text-hover-success">Login</a>
            <a href="#criarUsuario" class="text-decoration-underline text-success text-hover-success">Criar Usuário</a>      
            <a href="#gerenciarUsuario" class="text-decoration-underline text-success text-hover-success">Gerenciar Usuário</a>
            <a href="#" class="text-decoration-underline text-success text-hover-success">URL limpa</a>
        </div>
    </nav>
</div>
`

const loginElement = document.createElement('nav');
loginElement.innerHTML = homeHtml;
document.body.insertAdjacentElement('beforeend',loginElement);