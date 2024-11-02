import { headerHtml, updateNavbarLinks } from "./components/header";
import { clearBody } from "./functions/clear_body";
import { telaLoginHtml } from "./pages/login_screen";
import { criarUsuarioHtml } from "./pages/create_user";
import { gerenciarUsuarioHtml } from "./pages/user_management";
import { footerHtml } from "./components/footer";

let isUserLoggedIn = true; // Altere para true quando o usuário estiver logado

function renderContentBasedOnHash() {
    clearBody();
    
    if (location.hash === '#login') {
        telaLoginHtml();
    } else if (location.hash === '#criarUsuario') {
        criarUsuarioHtml();
    } else if (location.hash === '#gerenciarUsuario') {
        gerenciarUsuarioHtml();
    } else if (location.hash === '#home') {
        // Chamaria a função home aqui, se existir
    }

    updateNavbarLinks(isUserLoggedIn); // Atualiza os links do header conforme o estado de login
}

renderContentBasedOnHash();
window.addEventListener('hashchange', renderContentBasedOnHash);