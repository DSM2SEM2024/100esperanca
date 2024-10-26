import { headerHtml } from "./components/header";
import { home } from "./pages/home";
import { clearBody } from "./clear_body";
import { telaLoginHtml } from "./pages/login_screen";
import { footerHtml } from "./components/footer";
import { criar_user_html } from "./pages/create_user";



function renderContentBasedOnHash() {
    if (location.hash === '#login') {
        clearBody();
        telaLoginHtml();
     } else if(location.hash === '#criarUsuario') {
        clearBody();
        criar_user_html();
     }else if(location.hash === '#user_management'){
     }else if(location.hash === '/'){
        clearBody();
     }
}

renderContentBasedOnHash();
window.addEventListener('hashchange', renderContentBasedOnHash);
