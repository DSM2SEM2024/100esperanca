import { footerHtml } from "../../components/footer";
import { getOrCreateMainElement } from "../../components/main";
import { clearBody } from "../../functions/clear_body";


const main = getOrCreateMainElement();
main.classList = "vh-100 d-flex flex-column";

export function telaAdminHtml() {
  const sidebarGerenciarUsuarios = `
    <nav id="navGerenciamento" class="navbar navbar-expand-lg bg-success w-100">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="#gerenciarUsuarios">Gerenciar Usuários</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#gerenciarProdutos">Gerenciar Produtos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#gerenciarPromocoes">Gerenciar Promoções</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 `;
  main.innerHTML = sidebarGerenciarUsuarios;
}