import { getOrCreateMainElement } from "../../components/main";

export function telaAdminHtml() {
  const sidebarGerenciarUsuarios = `
    <!-- Botão para abrir a sidebar no mobile -->
    <div class="d-flex justify-content-start align-items-start">
      <button class="btn btn-success d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
        <i class="bi bi-list"></i>
      </button>
    </div>

    <!-- Sidebar Offcanvas -->
    <div class="offcanvas offcanvas-start d-lg-none bg-success text-white" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasSidebarLabel">Sidebar</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav nav-pills flex-column mb-auto gap-3">
          <li class="nav-item">
            <a href="#gerenciarUsuarios" class="nav-link link-light border border-light rounded" id="link-gerenciarUsuarios">Gerenciar Usuários</a>
          </li>
          <li class="nav-item">
            <a href="#gerenciarProdutos" class="nav-link link-light border border-light rounded" id="link-gerenciarProdutos">Gerenciar Produtos</a>
          </li>
          <li class="nav-item">
            <a href="#gerenciarPromocoes" class="nav-link link-light border border-light rounded" id="link-gerenciarPromocoes">Gerenciar Promoções</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Sidebar visível no desktop -->
    <div class="d-none d-lg-flex flex-column flex-shrink-0 p-3 bg-success text-white h-100">
      <h5>Sidebar</h5>
      <ul class="nav nav-pills flex-column mb-auto gap-3">
        <li class="nav-item">
          <a href="#gerenciarUsuarios" class="nav-link link-light border border-light rounded" id="link-gerenciarUsuarios-desktop">Gerenciar Usuários</a>
        </li>
        <li class="nav-item">
          <a href="#gerenciarProdutos" class="nav-link link-light border border-light rounded" id="link-gerenciarProdutos-desktop">Gerenciar Produtos</a>
        </li>
        <li class="nav-item">
          <a href="#gerenciarPromocoes" class="nav-link link-light border border-light rounded" id="link-gerenciarPromocoes-desktop">Gerenciar Promoções</a>
        </li>
      </ul>
    </div>
  `;
  
  const main = getOrCreateMainElement(); 
  main.classList = "vh-100 d-flex";
  const sidebarContainer = document.createElement('div'); 
  sidebarContainer.innerHTML = sidebarGerenciarUsuarios; main.prepend(sidebarContainer);

  const links = document.querySelectorAll('.nav-link');
  const updateActiveLink = () => {
    links.forEach(link => {
      link.classList.remove('active', 'bg-white', 'text-success');
      if (link.getAttribute('href') === window.location.hash) {
        link.classList.add('active', 'bg-white', 'text-success');
      }
    });
  };

  window.addEventListener('hashchange', updateActiveLink);
  updateActiveLink();
}
