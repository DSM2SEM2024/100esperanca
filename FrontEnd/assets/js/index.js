import { headerHtml } from "./components/header";
import { clearBody } from "./functions/clear_body";
import { telaLoginHtml } from "./pages/login_screen";
import { criarUsuarioHtml } from "./pages/create_user";
import { gerenciarUsuarioHtml } from "./pages/user_management";
import { footerHtml } from "./components/footer";
import { render_produtos } from "./pages/protudos/productbuy";

function renderContentBasedOnHash() {
if (location.hash === '#login') {
    telaLoginHtml(); 
} else if(location.hash === '#criarUsuario') {
    criarUsuarioHtml();
}else if(location.hash === '#gerenciarUsuario'){
    gerenciarUsuarioHtml();
}else if(location.hash === '#home'){
}else if(location.hash ==='#compraproduto'){
    render_produtos();
}   clearBody()
};


renderContentBasedOnHash();
window.addEventListener('hashchange',renderContentBasedOnHash);
