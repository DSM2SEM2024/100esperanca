import { clearBody } from "./functions/clearBody";
import { criaHomeHTML } from "./pages/home/home";
import { telaLoginHtml } from "./pages/login/loginScreen";
import { criarUsuarioHtml } from "./pages/createUser/createUser";
import { telaProdutosHtml } from "./pages/products/products";
import { cartHtml } from "./pages/cart/cart";
import { renderProductDetails } from "./pages/productDetails/productDetails";
import { telaAdminHtml } from "./pages/user/userAdminScreen";
import { gerenciarUsuariosHtml } from "./pages/user/usersManagement";
import { telaGerenciarProdutosHtml } from "./pages/user/productsManagement";
import { telaGerenciarPromocoes } from "./pages/user/promotionManagement";
import { createFooterElement } from "./components/footer";
import { headerHtml } from "./components/header";

function renderContentBasedOnHash() {
    clearBody();
    createFooterElement();

    if (location.hash === '#login') {
        telaLoginHtml();
    } else if (location.hash === '#criarUsuario') {
        criarUsuarioHtml();
    } else if (location.hash === '#telaAdmin') {
        telaAdminHtml();
    } else if (location.hash === '#gerenciarUsuarios') {
        gerenciarUsuariosHtml();
    } else if (location.hash === '#produtos') {
        telaProdutosHtml();
    } else if (location.hash === '#comprarProduto') {
        telaDetalhesProduto();
    } else if (location.hash === '#cart') {
        cartHtml();
    } else if (location.hash === '' || !location.hash || location.hash === '#home') {
        criaHomeHTML();
    } else if (location.hash.startsWith("#productDetails")) {
        const id = location.hash.split("/")[1];
        if (id) {
            renderProductDetails(id);
        } else {
            console.error("ID do produto não especificado.");
        }
    } else if (location.hash === '#gerenciarProdutos') {
        createFooterElement();
        telaGerenciarProdutosHtml();
    } else if (location.hash === '#gerenciarPromocoes') {
        createFooterElement();
        telaGerenciarPromocoes();
    }
}


renderContentBasedOnHash();

window.addEventListener('hashchange', renderContentBasedOnHash);
window.addEventListener("load", renderContentBasedOnHash);