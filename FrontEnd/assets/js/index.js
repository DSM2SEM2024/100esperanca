import { headerHtml } from "./components/header";
import { clearBody } from "./functions/clear_body";
import { criaHomeHTML } from "./pages/home/home";
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
}else if(!location.hash || location.hash === '#home'){
    clearBody();  
    criaHomeHTML();
}
};


renderContentBasedOnHash();
window.addEventListener('hashchange',renderContentBasedOnHash);
