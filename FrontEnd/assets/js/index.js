import { clearBody } from "./functions/clearBody";
import { homeScreen } from "./pages/home/home";
import { createUserScreen } from "./pages/createUser/createUser";
import { productScreen } from "./pages/products/products";
import { cartHtml } from "./pages/cart/cart";
import { gerenciarUsuariosHtml } from "./pages/management/pages/usersManagement";
import { telaGerenciarProdutosHtml } from "./pages/management/pages/productsManagement/productsManagement";
import { telaGerenciarPromocoes } from "./pages/management/pages/promotionManagement";
import { createFooterElement } from "./components/footer";
import { headerHtml } from "./components/header";
import { loginScreen } from "./pages/login/login";
import { productDetailsScreen } from "./pages/products/pages/productDetails";

function renderContentBasedOnHash() {
    clearBody();
    createFooterElement();

    switch (location.hash) {
        case '#login':
            loginScreen();
            break;
        case '#criarUsuario':
            createUserScreen();
            break;
        case '#produtos':
            productScreen();
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
            homeScreen();
            break;
        default:
            if (location.hash.startsWith("#productDetails")) {
                const id = location.hash.split("/")[1];
                if (id) {
                    productDetailsScreen(id);
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
