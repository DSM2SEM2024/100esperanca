import { headerHtml, updateNavbarLinks } from "./components/header";
import { clearBody } from "./functions/clear_body";
import { criaHomeHTML } from "./pages/home/home";
import { telaLoginHtml } from "./pages/login/login_screen";
import { criarUsuarioHtml } from "./pages/create-user/create_user";
import { gerenciarUsuarioHtml } from "./pages/user/user_management";
import { telaProdutosHtml2 } from "./pages/products/products";
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
        telaProdutosHtml2();
    }else if(!location.hash || location.hash === '#home'){
        clearBody();  
        criaHomeHTML();
    }
}
renderContentBasedOnHash();
window.addEventListener('hashchange', renderContentBasedOnHash);