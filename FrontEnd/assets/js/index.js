import { headerHtml } from "./components/header";
import { tela_login_html } from "./pages/login_screen";
import { create_user } from "./pages/create_user"
import { footerHtml } from "./components/footer";

console.log(location.hash);

function renderContentBasedOnHash() {
    if(location.hash != '#login'){
        console.log("teste")
    }else if(location.hash == "#login_screen"){
        console.log("funciona");
        
    }
    // if (location.hash === '#loginHtml') {
    //     cleanBody();
    //     loginHtml();

    // } else if (location.hash === '#create_user') {
        
    //     rendercreate_user();
    // }
}

renderContentBasedOnHash();

window.addEventListener('hashchange', renderContentBasedOnHash);