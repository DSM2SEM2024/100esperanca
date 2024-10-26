import { headerHtml } from "./components/header";
import { home } from "./pages/home";
import { clearBody } from "./functions/clear_body";
import { telaLoginHtml } from "./pages/login_screen";
import { criarUsuarioHtml } from "./pages/create_user";
import { gerenciarUsuarioHtml } from "./pages/user_management";
import { footerHtml } from "./components/footer";


function renderContentBasedOnHash() {
if (location.hash === '#login') {
    clearBody();
    telaLoginHtml();
 
    
} else if(location.hash === '#criarUsuario') {
    clearBody();
    criarUsuarioHtml();
}else if(location.hash === '#gerenciarUsuario'){
    clearBody();
    gerenciarUsuarioHtml();

}
};


renderContentBasedOnHash();
window.addEventListener('hashchange',renderContentBasedOnHash);
