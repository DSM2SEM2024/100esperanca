import { headerHtml, updateNavbarLinks } from "./components/header.js";
import { clearBody } from "./functions/clear_body.js";
import { criaHomeHTML } from "./pages/home/home.js";
import { telaLoginHtml } from "./pages/login/login_screen.js";
import { criarUsuarioHtml } from "./pages/create-user/create_user.js";
import { gerenciarUsuarioHtml } from "./pages/user/user_management.js";
import { telaProdutosHtml } from "./pages/products/products.js";
import { footerHtml } from "./components/footer.js";



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
    }else if(!location.hash || location.hash === '#home'){
        clearBody();  
        criaHomeHTML();
    }
}
renderContentBasedOnHash();
window.addEventListener('hashchange', renderContentBasedOnHash);