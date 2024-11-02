import { headerHtml, updateNavbarLinks } from "./components/header";
import { clearBody } from "./functions/clear_body";
import { telaLoginHtml } from "./pages/login_screen";
import { criarUsuarioHtml } from "./pages/create_user";
import { gerenciarUsuarioHtml } from "./pages/user_management";
import { telaProdutosHtml } from "./pages/products";
import { footerHtml } from "./components/footer";



function renderContentBasedOnHash() {
    clearBody();
    
    if (location.hash === '#login') {
        telaLoginHtml();
    } else if (location.hash === '#criarUsuario') {
        criarUsuarioHtml();
    } else if (location.hash === '#gerenciarUsuario') {
        gerenciarUsuarioHtml();
    } else if (location.hash === '#produtos') {
        telaProdutosHtml();
    }
}

renderContentBasedOnHash();
window.addEventListener('hashchange', renderContentBasedOnHash);