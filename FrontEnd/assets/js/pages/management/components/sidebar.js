import { getOrCreateMainElement } from "../../../components/main";

export function sidebar() {
  const sidebarGerenciarUsuarios = `
    <!-- Sidebar Offcanvas -->
    <div class="offcanvas offcanvas-start d-lg-none bg-success text-white" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasSidebarLabel">Gerenciar</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav nav-pills flex-column mb-auto gap-3">
          <li class="nav-item">
            <a href="#gerenciarUsuarios" class="nav-link link-light border border-light rounded" id="link-gerenciarUsuarios">Usuários</a>
          </li>
          <li class="nav-item">
            <a href="#gerenciarProdutos" class="nav-link link-light border border-light rounded" id="link-gerenciarProdutos">Produtos</a>
          </li>
          <li class="nav-item">
            <a href="#gerenciarPromocoes" class="nav-link link-light border border-light rounded" id="link-gerenciarPromocoes">Promoções</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Sidebar visível no desktop -->
    <div class="d-none d-lg-flex flex-column p-3 bg-success text-white h-100">
      <h5>Gerenciar</h5>
      <ul class="nav nav-pills flex-column mb-auto gap-3">
        <li class="nav-item">
          <a href="#gerenciarUsuarios" class="nav-link link-light border border-light rounded" id="link-gerenciarUsuarios-desktop">Usuários</a>
        </li>
        <li class="nav-item">
          <a href="#gerenciarProdutos" class="nav-link link-light border border-light rounded" id="link-gerenciarProdutos-desktop">Produtos</a>
        </li>
        <li class="nav-item">
          <a href="#gerenciarPromocoes" class="nav-link link-light border border-light rounded" id="link-gerenciarPromocoes-desktop">Promoções</a>
        </li>
      </ul>
    </div>
  `;
  
  const main = getOrCreateMainElement(); 
  main.classList = "vh-100 d-flex";
  const sidebarContainer = document.createElement('div'); 
  sidebarContainer.innerHTML = sidebarGerenciarUsuarios; ;

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
