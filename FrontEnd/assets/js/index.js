import { headerHtml } from "./components/header";import { home } from "./pages/home";
import { clearBody } from "./functions/clear_body";
import { telaLoginHtml } from "./pages/login_screen";
import { footerHtml } from "./components/footer";
import { criarUsuario } from "./pages/create_user";


function renderContentBasedOnHash() {
if (location.hash === '#login') {
    clearBody();
    telaLoginHtml();
} else if(location.hash === '#criarUsuario') {
    clearBody();
    criarUsuario();
}else if(location.hash === '#user_management'){
    clearBody();
}else if(location.hash === '/'){
    clearBody();
}
}

renderContentBasedOnHash();
window.addEventListener('hashchange', renderContentBasedOnHash);