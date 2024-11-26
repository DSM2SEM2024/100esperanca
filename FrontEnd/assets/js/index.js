import { headerHtml, updateNavbarLinks } from "./components/header";
import { clearBody } from "./functions/clear_body";
import { criaHomeHTML } from "./pages/home/home";
import { telaLoginHtml } from "./pages/login/login_screen";
import { criarUsuarioHtml } from "./pages/create-user/create_user";
import { telaProdutosHtml } from "./pages/products/products";
import { footerHtml } from "./components/footer";
import { cartHtml } from "./pages/cart/cart";
import { renderProductDetails } from "./pages/productDetails/productDetails";
import { telaAdminHtml } from "./pages/user/user-admin-screen";
import { consultarUsuariosHtml } from "./pages/user/users-consultation";
import { telaGerenciarProdutosHtml } from "./pages/user/products-management";
import { telaGerenciarPromocoes } from "./pages/user/promotion-management";



function renderContentBasedOnHash() {
    clearBody();
    const main = document.getElementById("main");
    if (!main) {
        console.error("Elemento principal não encontrado!");
        return;
    }

    if (location.hash === '#login') {
        telaLoginHtml();
    } else if (location.hash === '#criarUsuario') {
        criarUsuarioHtml();
    } else if (location.hash === '#telaAdmin') {
        telaAdminHtml();
    } else if (location.hash === '#consultarUsuarios') {
        consultarUsuariosHtml();
    } else if (location.hash === '#produtos') {
        telaProdutosHtml();
    } else if (location.hash === '#comprarProduto') {
        telaDetalhesProduto();
    } else if (location.hash === '#cart') {
        cartHtml();
    } else if (location.hash === '' || !location.hash || location.hash === '#home') {
        clearBody();
        criaHomeHTML();
    } else if (location.hash.startsWith("#productDetails")) {
        const id = location.hash.split("/")[1];
        if (id) {
            renderProductDetails(id);
        } else {
            console.error("ID do produto não especificado.");
        }
    } else if (location.hash === '#gerenciarProdutos') {
        clearBody();
        telaGerenciarProdutosHtml();

    } else if (location.hash === '#gerenciarPromocoes') {
        clearBody();
        telaGerenciarPromocoes();
    }
}

renderContentBasedOnHash();
window.addEventListener('hashchange', renderContentBasedOnHash);
window.addEventListener("load", renderContentBasedOnHash);
