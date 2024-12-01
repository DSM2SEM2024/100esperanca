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

    switch (location.hash) {
        case '#login':
            telaLoginHtml();
            break;
        case '#criarUsuario':
            criarUsuarioHtml();
            break;
        case '#produtos':
            telaProdutosHtml();
            break;
        case '#comprarProduto':
            telaDetalhesProduto();
            break;
        case '#cart':
            cartHtml();
            break;
        case '#gerenciarUsuarios':
            gerenciarUsuariosHtml();
            break;
        case '#gerenciarProdutos':
            createFooterElement();
            telaGerenciarProdutosHtml();
            break;
        case '#gerenciarPromocoes':
            createFooterElement();
            telaGerenciarPromocoes();
            break;
        case '':
        case '#home':
        case undefined:
            criaHomeHTML();
            break;
        default:
            if (location.hash.startsWith("#productDetails")) {
                const id = location.hash.split("/")[1];
                if (id) {
                    renderProductDetails(id);
                } else {
                    console.error("ID do produto não especificado.");
                }
            }
            break;
    }
}

renderContentBasedOnHash();

window.addEventListener('hashchange', renderContentBasedOnHash);
window.addEventListener("load", renderContentBasedOnHash);
