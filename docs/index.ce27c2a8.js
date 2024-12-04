function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},a={},s=t.parcelRequiref694;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequiref694=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,a=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)a.set(t[o],{baseUrl:e,path:t[o+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["hmy9p","index.ce27c2a8.js","llbZl","thumbnail.5c529b6d.png","ixVhE","visgo.341c0589.jpg"]'));const n=()=>{let e=document.getElementById("main");if(!e){(e=document.createElement("main")).id="main";let t=document.getElementsByTagName("header")[0];t&&t.insertAdjacentElement("afterend",e);let o=document.getElementsByTagName("footer")[0];o?o.insertAdjacentElement("beforebegin",e):document.body.appendChild(e)}return e};var i={};i=new URL("visgo.341c0589.jpg",import.meta.url).toString();var d={};d=new URL("thumbnail.5c529b6d.png",import.meta.url).toString();const r=(e,t,o)=>{let a=`
        <div class="modal fade" id="${e}" tabindex="-1" aria-labelledby="${e}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${e}Label">${o}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="${t}">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML("beforeend",a)},l=(e,t,o,a)=>{document.getElementById(e)||r(e,t,o),document.getElementById(t).textContent=a,new bootstrap.Modal(document.getElementById(e)).show()},c="https://100esperanca.faustinopsy.com/",u="users",m=async(e,t)=>{try{let o=await fetch(e,t);if(!o.ok)throw Error(`Erro: ${o.statusText}`);return(await o.json()).data}catch(e){throw console.error(e.message),e}},b=()=>m(`${c}${u}/with-roles`,{method:"GET",headers:{"Content-Type":"application/json"}}),p=e=>m(`${c}${u}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),h="products",g=async(e,t)=>{try{let o=await fetch(e,t);if(!o.ok)throw Error(`Erro: ${o.statusText}`);return(await o.json()).data}catch(e){throw console.error(e.message),e}},v=()=>g(`${c}${h}`,{method:"GET",headers:{"Content-Type":"application/json"}}),f=e=>g(`${c}${h}/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}),y=e=>g(`${c}${h}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),x=(e,t)=>g(`${c}${h}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),w=e=>g(`${c}${h}/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}});async function E(e){try{let t=await P(e);if(!t){document.getElementById("main").innerHTML=`
                <div class="alert alert-danger text-center">
                    Produto n\xe3o encontrado.
                </div>
            `;return}let o=`
            <div class="product-details container my-5">
                <div class="row justify-content-between align-items-center">
                    <!-- Imagens do Produto -->
                    <div class="col-md-6">
                        <img src="${t.img}" alt="${t.name}" class="img-fluid rounded mb-3 shadow">
                    </div>

                    <!-- Detalhes do Produto -->
                    <div class="col-md-5 bg-white p-4 rounded shadow">
                        <h2 class="fw-bold">${t.name}</h2>
                        <p class="text-success fs-3 fw-bold">${t.price} <small class="text-muted text-decoration-line-through"></small></p>
                        <p class="text-secondary">${t.description}</p>

                        <button class="btn btn-success w-100 fw-bold mb-4" onclick='addToCarrinho(${JSON.stringify(t)})'>
                            Adicionar ao Carrinho
                        </button>

                        <!-- Simula\xe7\xe3o de Frete -->
                        <h5>Simule o Frete</h5>
                        <div class="mb-3">
                            <label for="cep" class="form-label">Digite seu CEP:</label>
                            <input type="text" class="form-control" id="cep" placeholder="Ex: 12345-678">
                        </div>
                        <button class="btn btn-outline-success w-100" onclick="calculateFrete()">Calcular Frete</button>
                        <div id="freteResult" class="mt-3"></div>

                        <!-- Cupom de Desconto -->
                        <h5 class="mt-4">Cupom de Desconto</h5>
                        <div class="mb-3">
                            <label for="coupon" class="form-label">Digite o c\xf3digo do cupom:</label>
                            <input type="text" class="form-control" id="coupon" placeholder="Ex: DESCONTO10">
                        </div>
                        <button class="btn btn-outline-success w-100" onclick="applyCoupon()">Aplicar Cupom</button>
                        <div id="couponResult" class="mt-3"></div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="modalCarrinho" tabindex="-1" aria-labelledby="modalCarrinhoLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-success" id="modalCarrinhoLabel">Produto Adicionado ao Carrinho</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            O produto foi adicionado ao seu carrinho.
                            <br>
                            Deseja ir para o carrinho ou continuar comprando?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continuar Comprando</button>
                            <button type="button" class="btn btn-success" onclick="window.location.href = '/#cart';">Ir para o Carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        `;n().innerHTML=o}catch(e){console.error("Erro ao buscar produto:",e),document.getElementById("main").innerHTML=`
            <div class="alert alert-danger text-center">
                Erro ao carregar o produto.
            </div>
        `}}async function P(e){try{return await f(e)}catch(e){return console.error("Erro ao buscar produto:",e),null}}async function C(){let e=await v();if(0===e.length){console.log("Nenhum product encontrado.");return}return e.map(e=>`
        <div class="col card-container" product-id="${e.id}">
            <div class="card product-card shadow-sm hover-card border-0">
                <img src="${e.img}" class="card-img-top card-img-custom" alt="${e.name}">
                <div class="card-body border rounded-bottom border-success">
                    <h5 class="card-title text-success">${e.name}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text fs-5 mb-0">${e.type_product}</p>
                        <span class="fw-bold text-end">${e.price}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-success w-75 mt-2" onclick='event.stopPropagation(); addToCarrinho(${JSON.stringify(e)})'>
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join("")}async function L(){let e=`
        <nav class="navbar navbar-expand-lg d-flex bg-body-tertiary bg-opacity-75" id="navFiltros">
            <section class="container-fluid d-flex justify-content-evenly">
                <div class="">
                    <h2 class="text-success fs-1">
                        Produtos
                    </h2>
                </div>
                <div class="row gap-3" id="navDrop">
                    <select class="form-select form-select-sm col selectWidth" id="filterSelect">
                        <option selected value="all">
                            Todos
                        </option>
                        <option value="Camisetas">
                            Camisetas
                        </option>
                        <option value="Bolsas">
                            Bolsas
                        </option>
                        <option value="Cadernos">
                            Cadernos
                        </option>
                    </select>
                </div>
            </section> 
        </nav>

        <section class="container" id="productContainer">
            <div class="row row-cols-1 row-cols-md-3 g-4 p-4 justify-content-evenly">
                <!-- Cards de produtos ser\xe3o renderizados aqui -->
            </div>
        </section>

         <div class="modal fade" id="modalCarrinho" tabindex="-1" aria-labelledby="modalCarrinhoLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-success" id="modalCarrinhoLabel">
                            Produto Adicionado ao Carrinho
                        </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        O produto foi adicionado ao seu carrinho.
                        <br>
                        Deseja ir para o carrinho ou continuar comprando?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Voltar a Navega\xe7\xe3o
                        </button>
                        <button type="button" class="btn btn-success" onclick="window.location.href = '/#cart';">
                            Ir para o Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;n().innerHTML=e;let t=document.querySelector("#productContainer .row");t?t.innerHTML=await C():console.error("Container de produtos não encontrado"),document.querySelectorAll(".card-container").forEach(e=>{e.addEventListener("click",()=>{var t;t=e.getAttribute("product-id"),window.location.hash=`#productDetails/${t}`,E(t)})})}function k(){let e=localStorage.getItem("carrinho");return e?JSON.parse(e):[]}function $(e){localStorage.setItem("carrinho",JSON.stringify(e))}function I(){let e=new bootstrap.Modal(document.getElementById("modalConfirmacaoCompra"));e.show(),document.getElementById("okButton").onclick=function(){localStorage.removeItem("carrinho"),e.hide(),window.location.href="/#pagamento"}}function A(){let e=`
    <!-- Bot\xe3o para abrir a sidebar no mobile -->
    <div class="d-flex justify-content-start align-items-start">
      <button class="btn btn-success d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
        <i class="bi bi-list"></i>
      </button>
    </div>

    <!-- Sidebar Offcanvas -->
    <div class="offcanvas offcanvas-start d-lg-none bg-success text-white" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasSidebarLabel">Gerenciar</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav nav-pills flex-column mb-auto gap-3">
          <li class="nav-item">
            <a href="#gerenciarUsuarios" class="nav-link link-light border border-light rounded" id="link-gerenciarUsuarios">Usu\xe1rios</a>
          </li>
          <li class="nav-item">
            <a href="#gerenciarProdutos" class="nav-link link-light border border-light rounded" id="link-gerenciarProdutos">Produtos</a>
          </li>
          <li class="nav-item">
            <a href="#gerenciarPromocoes" class="nav-link link-light border border-light rounded" id="link-gerenciarPromocoes">Promo\xe7\xf5es</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Sidebar vis\xedvel no desktop -->
    <div class="d-none d-lg-flex flex-column flex-shrink-0 p-3 bg-success text-white h-100">
      <h5>Gerenciar</h5>
      <ul class="nav nav-pills flex-column mb-auto gap-3">
        <li class="nav-item">
          <a href="#gerenciarUsuarios" class="nav-link link-light border border-light rounded" id="link-gerenciarUsuarios-desktop">Usu\xe1rios</a>
        </li>
        <li class="nav-item">
          <a href="#gerenciarProdutos" class="nav-link link-light border border-light rounded" id="link-gerenciarProdutos-desktop">Produtos</a>
        </li>
        <li class="nav-item">
          <a href="#gerenciarPromocoes" class="nav-link link-light border border-light rounded" id="link-gerenciarPromocoes-desktop">Promo\xe7\xf5es</a>
        </li>
      </ul>
    </div>
  `,t=n();t.classList="vh-100 d-flex";let o=document.createElement("div");o.innerHTML=e,t.prepend(o);let a=document.querySelectorAll(".nav-link"),s=()=>{a.forEach(e=>{e.classList.remove("active","bg-white","text-success"),e.getAttribute("href")===window.location.hash&&e.classList.add("active","bg-white","text-success")})};window.addEventListener("hashchange",s),s()}async function B(){let e=e=>void 0!==e?e.map(e=>`
                <ul class="list-group">
                    <li class="list-group-item">${e.name}</li>
                </ul>
            `).join(""):[],t=async()=>(await b()).map(t=>`
            <tr>
                <td>${t.id}</td>
                <td>${t.name}</td>
                <td>${t.email}</td>
                <td>${e(t.roles)}</td>
                <td>
                    <button class="btn btn-warning shadow-lg" data-id="${t.id}" id="btn-update">
                        <i class="bi bi-house-gear-fill"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary shadow-lg" data-id="${t.id}" id="btn-update">
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                    <button class="btn btn-danger shadow-lg" data-id="${t.id}" id="btn-excluir">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
        `).join(""),o=`
    <section class="container-fluid">
        <div id="tabela-container" class="text-center">
            <h2>Usu\xe1rios</h2>
            <table class="table table-striped-columns table-bordered table-responsive table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Tipo</th>
                        <th>Endere\xe7os</th>
                        <th>A\xe7\xe3o</th>
                    </tr>
                </thead>
                <tbody id="table-users">
                    
                </tbody>
            </table>
        </div>
    </section>
    `;n().innerHTML=o,A(),document.getElementById("table-users").innerHTML=await t()}window.addToCarrinho=function(e){let t=k();t.push(e),$(t);let o=new bootstrap.Modal(document.getElementById("modalCarrinho"));o.show(),document.querySelector(".modal-footer .btn-success").onclick=function(){o.hide(),window.location.href="/#cart"}};const T=async(e,t)=>{try{let o=await fetch(e,t);if(!o.ok)throw Error(`Erro: ${o.statusText}`);return(await o.json()).data}catch(e){throw console.error(e.message),e}},S=()=>T(`${c}arts`,{method:"GET",headers:{"Content-Type":"application/json"}}),j=(e,t,o)=>{document.getElementById(e)||function(e,t){let o=`
    <div class="modal fade" id="${e}" tabindex="-1" aria-labelledby="modalSalvarProdutoLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-success" id="${e}Label">Status</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center" id="${t}"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",o),console.log(o)}(e,t);let a=document.getElementById(t);a?a.textContent=o:console.error(`Elemento com ID ${t} n\xe3o encontrado.`),new bootstrap.Modal(document.getElementById(e)).show(),document.getElementById(e).addEventListener("hidden.bs.modal",()=>{M()})},_=e=>{document.getElementById(e)||function(){let e=`
    <div class="modal fade" id="modalAdicionarProduto" tabindex="-1" aria-labelledby="modalAdicionarProdutoLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-success">
            <h5 class="modal-title text-light" id="modalAdicionarProdutoLabel">Adicionar Produto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="formAdicionarProduto">
              <div class="mb-3">
                <label for="addNome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="addNome" name="addNome" required>
              </div>
              <div class="mb-3">
                <label for="addCodigo" class="form-label">C\xf3digo</label>
                <input type="text" class="form-control" id="addCodigo" name="addCodigo" required>
              </div>
              <div class="mb-3">
                <label for="addCategoria" class="form-label">Categoria</label>
                <input type="text" class="form-control" id="addCategoria" name="addCategoria" required>
              </div>
              <div class="mb-3">
                <label for="addPreco" class="form-label">Pre\xe7o</label>
                <input type="number" step="0.01" class="form-control" id="addPreco" name="addPreco" required>
              </div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupArts">Art</label>
                <select class="form-select" id="inputGroupArts">
                  <option selected></option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-success" id="btnSalvarProduto">Salvar Produto</button>
          </div>
        </div>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",e),document.getElementById("modalAdicionarProduto").addEventListener("shown.bs.modal",async()=>{let e=await S();(function(e){let t=document.getElementById("inputGroupArts");t.innerHTML="<option selected>Selecione...</option>",e.forEach(e=>{let o=document.createElement("option");o.value=e.id,o.textContent=e.name,t.appendChild(o)})})(e),console.log(e)}),document.getElementById("btnSalvarProduto")?.addEventListener("click",async()=>{let e=document.getElementById("formAdicionarProduto"),t=new FormData(e),o=Number(document.getElementById("inputGroupArts").value),a={name:t.get("addNome"),codProduct:t.get("addCodigo"),typeProduct:t.get("addCategoria"),price:parseFloat(t.get("addPreco")),art:o};try{await y(a),j("modalSalvarProduto","modalSalvarProdutoMensagem","Produto adicionado com sucesso!"),bootstrap.Modal.getInstance(document.getElementById("modalAdicionarProduto")).hide(),e.reset()}catch(e){console.error(`Erro ao adicionar o produto: ${e.message}`)}})}(),new bootstrap.Modal(document.getElementById(e)).show()},q=(e,t)=>{!function(e){let t=document.getElementById("modalEditarProduto");t&&t.remove();let o=`
    <div class="modal fade" id="modalEditarProduto" tabindex="-1" aria-labelledby="modalEditarProdutoLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-success" id="modalEditarProdutoLabel">Editar Produto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="formEditarProduto">
              <div class="mb-3">
                <label for="editNome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="editNome" name="editNome" required>
              </div>
              <div class="mb-3">
                <label for="editCodigo" class="form-label">C\xf3digo</label>
                <input type="text" class="form-control" id="editCodigo" name="editCodigo" required>
              </div>
              <div class="mb-3">
                <label for="editCategoria" class="form-label">Categoria</label>
                <input type="text" class="form-control" id="editCategoria" name="editCategoria" required>
              </div>
              <div class="mb-3">
                <label for="editPreco" class="form-label">Pre\xe7o</label>
                <input type="number" step="0.01" class="form-control" id="editPreco" name="editPreco" required>
              </div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupArtsEdit">Art</label>
                <select class="form-select" id="inputGroupArtsEdit">
                  <option selected>Selecione...</option>
                </select>
              </div>
              <input type="hidden" id="editProdutoId" name="editProdutoId">
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-success" id="btnSalvarAlteracoes">Salvar altera\xe7\xf5es</button>
          </div>
        </div>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",o),document.getElementById("editNome").value=e.name,document.getElementById("editCodigo").value=e.cod_product,document.getElementById("editCategoria").value=e.type_product,document.getElementById("editPreco").value=e.price,document.getElementById("editProdutoId").value=e.id,document.getElementById("modalEditarProduto").addEventListener("shown.bs.modal",async()=>{(function(e,t){let o=document.getElementById("inputGroupArtsEdit");o.innerHTML="<option selected>Selecione...</option>",e.forEach(e=>{let a=document.createElement("option");a.value=e.id,a.textContent=e.name,e.id===t&&(a.selected=!0),o.appendChild(a)})})(await S(),e.art)}),document.getElementById("btnSalvarAlteracoes")?.addEventListener("click",async()=>{let e=document.getElementById("formEditarProduto"),t=new FormData(e),o=Number(document.getElementById("inputGroupArtsEdit").value),a={name:t.get("editNome"),codProduct:t.get("editCodigo"),typeProduct:t.get("editCategoria"),price:parseFloat(t.get("editPreco")),art:o};try{let o=await x(t.get("editProdutoId"),a);console.log(o),j("modalEditarProdutoFeedBack","modalEditarProdutoFeedBackMessage","Produto atualizado com sucesso!"),bootstrap.Modal.getInstance(document.getElementById("modalEditarProduto")).hide(),e.reset()}catch(e){console.error(`Erro ao atualizar o produto: ${e.message}`)}}),document.getElementById("modalEditarProduto").addEventListener("hidden.bs.modal",()=>{let e=document.getElementById("modalEditarProduto");e&&e.setAttribute("inert","")})}(t),new bootstrap.Modal(document.getElementById(e)).show()};async function M(e=null){let t=document.getElementById("tabelaProdutos");t.innerHTML="<tr><td colspan='6'>Carregando...</td></tr>";try{let o=e||await v();if(!o||0===o.length){t.innerHTML="<tr><td colspan='6'>Nenhum produto encontrado</td></tr>";return}t.innerHTML=o.map(e=>`
          <tr data-id="${e.id}">
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.cod_product}</td>
            <td>${e.type_product}</td>
            <td>R$ ${Number(e.price).toFixed(2)}</td>
            <td>
              <button class="btn btn-danger shadow-lg btnExcluir" data-id="${e.id}">
                <i class="bi bi-trash-fill text-white"></i>
              </button>
              <button class="btn btn-success shadow-lg btnEditar" data-id="${e.id}">
                <i class="bi bi-pencil-square text-white"></i>
              </button>
            </td>
          </tr>
        `).join(""),function(){let e=document.querySelectorAll(".btnExcluir"),t=document.querySelectorAll(".btnEditar");e.forEach(e=>e.addEventListener("click",async e=>{let t=e.currentTarget.dataset.id;try{await w(t),j("deleteProductModal","deleteProductModalMessage","Produto removido com sucesso.")}catch(e){console.error("Erro ao remover o produto:",e),alert("Erro ao remover o produto. Tente novamente.")}})),t.forEach(e=>e.addEventListener("click",async e=>{let t=e.currentTarget.dataset.id;try{var o;o=await f(t),q("modalEditarProduto",o)}catch(e){console.error("Erro ao carregar produto para edição:",e)}}))}()}catch(e){t.innerHTML=`<tr><td colspan="6">Erro ao carregar os produtos: ${e.message}</td></tr>`}}const N=n();async function D(e=null){let t=document.getElementById("tabelaPromocoes");t.innerHTML="<tr><td colspan='5'>Carregando...</td></tr>";try{let o=e||await H();if(!o||0===o.length){t.innerHTML="<tr><td colspan='5'>Nenhuma promoção encontrada</td></tr>";return}t.innerHTML=o.map(e=>`
          <tr data-id="${e.id}">
            <td>${e.id}</td>
            <td>${e.cod_promotion}</td>
            <td>${new Date(e.start_date_promotion).toLocaleString()}</td>
            <td>${new Date(e.end_date_promotion).toLocaleString()}</td>
          </tr>
        `).join("")}catch(e){t.innerHTML=`<tr><td colspan="5">Erro ao carregar as promo\xe7\xf5es: ${e.message}</td></tr>`}}async function H(){let e=await fetch(`${c}promotions`);if(e.ok)return await e.json();throw Error("Promoção Não Encontrada")}const F=`
<section class="row p-4 border-top w-100 d-flex" id="footer-rows">

    <div class="col mb-3">
      <h5>Redes Sociais</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <a href="https://www.instagram.com/visgo.dejaca?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-instagram"> @visgo.dejaca</i>
          </a>
        </li>

        <li class="nav-item mb-2">
          <a href="https://www.instagram.com/jaca_dupe?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-instagram"> @jaca.dupe</i>
          </a>
        </li>


       
        <li class="nav-item mb-2">
          <a href="https://www.instagram.com/jacaartesvisuais?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-instagram"> @jacaartevisuais</i>
          </a>
        </li>
      </ul>
  </div>

  
      <div class="col mb-3">
      <h5>Formas de Pagamento</h5>
      <ul class="nav flex-row gap-2">
      <i class="bi bi-paypal h3"></i>
      <i class="bi bi-credit-card h3"></i>
      <i class="bi bi-whatsapp h3"></i>
      </ul>
    </div>

     <div class="col mb-3">
      <h5>Desenvolvedores</h5>
      <ul class="nav flex-column">

        <li>
          <a href="https://github.com/RudeBoyOne" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>RudeBoyOne
          </a>
        </li>

         <li>
          <a href="https://github.com/rafammb" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>rafammb
          </a>
        </li>

         <li>
          <a href="https://github.com/yllopes" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>yllopes
          </a>
        </li>

         <li>
          <a href="https://github.com/Gadelha1" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>Gadelha1
          </a>
        </li>

         <li>
          <a href="https://github.com/Kani-a" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>Kani-a
          </a>
        </li>

         <li>
          <a href="https://github.com/1Felipedev" class="nav-link p-0 text-body-secondary" target="_blank">
            <i class="bi bi-github m-2"></i>1Felipedev
          </a>
        </li>
      </ul>
    </div>
  </section>
`,O=()=>{let e=document.getElementById("footer");e||((e=document.createElement("footer")).id="footer",e.innerHTML=F,document.body.insertAdjacentElement("beforeend",e))};O();const R=`
<header class="w-100 p-2 text-center d-flex justify-content-between align-items-center">
  <section>
    <img src="${/*@__PURE__*/e(i)}" alt="LogoVisgo" class="img-fluid">
    <button id="voltar_btn" class="btn ms-3 btn-sm btn-success">
      Voltar
    </button>
  </section>

  <nav class="navbar mb-lg-0 d-none d-lg-flex d-flex justify-content-evenly">
    <div>
      <a id="home-Link" href="#home" class="text-decoration-none text-success" role="button">
        <button class="btn btn-outline-success border-0">Home</button>
      </a>

      <a id="manageUser-Link" href="#gerenciarUsuarios" class="text-decoration-none text-success" role="button">
        <button class="btn btn-outline-success border-0">Tela Admin</button>
      </a>

      <a id="produtos-Link" href="#produtos" class="text-decoration-none text-success" role="button">
        <button class="btn btn-outline-success border-0">Produtos</button>
      </a>
    </div>
  </nav>

  <nav class="navbar px-3 d-flex justify-content-evenly">
    <ul class="navbar-nav">
      <li class="nav-item dropstart">
        <button class="btn btn-success btn-sm dropdown-toggle dropdown-toggle-split rounded-3" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-people-fill"></i>
        </button>

        <ul class="dropdown-menu dropdown-menu position-absolute">
          <li>
            <a class="dropdown-item link-outline-success dropdown-item-text text-success border-bottom" href="#login">
              Login
            </a>
          </li>

          <li>
            <a class="dropdown-item link-outline-success dropdown-item-text text-success" href="#criarUsuario">
              Cadastro
            </a>
          </li>
        </ul>

        <a class="icon-link" href="#cart">
          <button type="button" class="btn btn-success btn-sm rounded-3">
            <i class="bi bi-cart-fill text-decoration-none"></i>
          </button>
        </a>
      </li>
    </ul>
  </nav>
</header>
`,U=document.createElement("header");U.innerHTML=R,document.body.insertAdjacentElement("afterbegin",U),U.classList="w-100 p-2 text-center d-flex justify-content-between align-items-center";const G=document.querySelector("#voltar_btn");function J(){let e=document.getElementById("manageUser-Link"),t=document.getElementById("produtos-Link"),o=document.getElementById("home-Link");e.style.display="#telaAdmin"===location.hash?"none":"inline",t.style.display="#produtos"===location.hash?"none":"inline",o.style.display="#home"===location.hash||""===location.hash?"none":"inline",G.style.display="#home"===location.hash||""===location.hash?"none":"inline"}function z(){switch(!function(){let e=document.getElementById("main");e&&(e.innerHTML="",e.classList=null,document.getElementsByTagName("body")[0].classList="")}(),O(),location.hash){case"#login":!function(){let e=`
            <section class="container-sm login-container m-4 p-4 rounded shadow-lg align-self-center">
                <h2 class="text-success mb-4">Login</h2>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" required>
                    <span class="input-group-text">
                        <i class="bi bi-person-fill" alt="user" width="20"></i> 
                    </span>
                </div>

                <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Senha" required>
                    <span class="input-group-text">
                        <i class="bi bi-lock-fill" alt="senha" width="20"></i>
                    </span>
                </div>

                <div class="d-flex justify-content-between mb-3">
                    <a href="#criarUsuario" class="custom-btn-hover text-decoration-none text-success">Cadastre-se</a>
                    <a href="#" class="custom-btn-hover text-decoration-none text-success">Esqueceu a senha?</a>
                </div>

                <button class="login-btn btn btn-success w-100">Login</button>
                
            </section>
    `,t=n();t.classList="d-flex flex-column align-items-center justify-content-center",t.innerHTML=e;let o=document.querySelector(".login-container");o&&(o.style.setProperty("background-color","#5ABC49","important"),o.style.setProperty("width","350px","important"))}();break;case"#criarUsuario":!function(){let e=`
    <section class="p-3">
    <h1 class="text-center text-success justify-content-center">Cadastre-se</h1>
    <div class="d-flex flex-column gap-3">
        <form id="form-user">
            <div class="d-flex flex-column gap-3">
                <div>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Nome" required>
                </div>

                <div>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" required>
                </div>

                <div>
                    <input type="password" class="form-control" name="password" id="password" placeholder="Senha" required>
                </div>

                <div>
                    <input type="password" class="form-control" name="confirmPassword"id="confirmPassword" placeholder="Confirmar senha" required>
                </div>

                <div class="d-flex gap-3">
                    <input name="cep" type="text" id="cep" class="form-control" placeholder="CEP" required />
                    <input name="number" type="number" id="number" class="form-control w-25" placeholder="N\xba" required />
                </div>

                <div class="d-flex gap-3">
                    <input name="city" type="text" id="city" class="form-control" placeholder="Cidade" required />
                    <input name="uf" type="text" id="uf" class="form-control w-25" placeholder="UF" required />
                </div>

                <div >
                    <input name="neighborhood" type="text" id="neighborhood" class="form-control" placeholder="Bairro" required />
                </div>
                <div>
                    <input name="street" type="text" id="street" class="form-control" placeholder="Rua" required />
                </div>
            </div>
            </form>
            
        </div>
        <button id="submit-btn" class="mt-3 w-100 btn btn-success">Cadastrar</button>
    </section>
    `,t=n();t.classList="d-flex flex-column align-items-center justify-content-center",t.innerHTML=e,document.getElementById("submit-btn").addEventListener("click",async e=>{e.preventDefault();let t=document.getElementById("form-user"),o=new FormData(t),a=o.get("name"),s=o.get("email"),n=o.get("password"),i=o.get("confirmPassword"),d=o.get("cep"),r=o.get("number"),c=o.get("city"),u=o.get("uf"),m=o.get("neighborhood"),b=o.get("street");if(n!==i){alert("As senhas não coincidem!");return}try{let e=await p({name:a,email:s,password:n,roles:["CLIENT"],addresses:[{state:u,city:c,neighborhood:m,number:r,street:b,cep:d}]});l("createUser","createUserMessage","Criar usuário",e),t.classList.add("fade-out"),setTimeout(()=>{t.reset(),window.location.hash="#home"},500)}catch(e){console.error("Erro ao criar usuário:",e),l("createUser","createUserMessage","Criar usuário",e)}})}();break;case"#produtos":L();break;case"#comprarProduto":telaDetalhesProduto();break;case"#cart":!function(){let e=`
        <section class="container my-5">
            <h1 class="text-center text-success mb-4">Carrinho de Compras</h1>
            <div class="row">
                <div class="col-lg-8">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Produtos no Carrinho</h5>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Imagem</th>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Pre\xe7o</th>
                                        <th scope="col">A\xe7\xe3o</th>
                                    </tr>
                                </thead>
                                <tbody id="cartItems">
                                    <!-- Itens ser\xe3o inseridos aqui dinamicamente -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Resumo</h5>
                                <ul class="list-group mb-3">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>Subtotal: </strong>
                                        <span id="subtotal" class="badge bg-success">
                                            R$ 0,00
                                        </span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>Frete: </strong>
                                        <span id="frete">R$ 20,00</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>Total: </strong>
                                        <span id="total" class="badge bg-success">
                                            R$ 20,00
                                        </span>
                                    </li>
                                </ul>
                            <button class="btn btn-success w-100 mt-3" onclick="concluirCompra()">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="modal fade" id="modalConfirmacaoCompra" tabindex="-1" aria-labelledby="modalConfirmacaoCompraLabel" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalConfirmacaoCompraLabel">
                            Compra Conclu\xedda
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        Sua compra foi encaminhada com sucesso! Voc\xea ser\xe1 redirecionado para a p\xe1gina de pagamento.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="okButton">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    `,t=n();t.classList=null,t.innerHTML=e,function e(){let t=document.getElementById("cartItems"),o=document.getElementById("subtotal"),a=document.getElementById("frete"),s=document.getElementById("total");t.innerHTML="";let n=0;k().filter(e=>e).forEach((e,o)=>{if(!e){console.error(`Item at index ${o} is null or undefined`);return}let a=document.createElement("tr");a.innerHTML=`
            <td><img src="${e.img}" alt="${e.name}" class="cart-item-img"></td>
            <td>${e.name}</td>
            <td>${e.price}</td>
            <td><button class="btn btn-danger btn-sm remove-item-btn" data-index="${o}">Remover</button></td>
        `,t.appendChild(a),n+=parseFloat(e.price)}),o.textContent=`R$ ${n.toFixed(2)}`,a.textContent="R$ 20.00",s.textContent=`R$ ${(n+20).toFixed(2)}`,document.querySelectorAll(".remove-item-btn").forEach(t=>{t.addEventListener("click",()=>{let o=t.getAttribute("data-index"),a=k();a.splice(o,1),$(a),e(),0===a.length&&(s.textContent=`R$ ${parseFloat(0).toFixed(2)}`)})})}(),window.concluirCompra=I}();break;case"#gerenciarUsuarios":B();break;case"#gerenciarProdutos":O(),function(){let e=`
    <section class="container-fluid p-4">
      <h4 class="mb-3 fs-1 text-center">Gerenciar Produtos</h4>
      <div class="mb-4">
        <label for="pesquisaProduto" class="form-label">Pesquisar Produto</label>
        <div class="input-group">
          <input type="text" class="form-control" id="pesquisaProduto" placeholder="Pesquisar por Nome ou Categoria">
          <button class="btn btn-success rounded-end" type="button" id="botaoPesquisar">
            <i class="bi bi-search text-white"></i>
          </button>
        </div>
        <small class="text-muted">Pesquise por Nome ou Categoria do Produto</small>
      </div>
      <div class="text-center">
        <h2>Consulta de Produtos</h2>
        <table class="table table-bordered table-responsive table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>C\xf3digo</th>
              <th>Categoria</th>
              <th>Pre\xe7o</th>
              <th>A\xe7\xe3o</th>
            </tr>
          </thead>
          <tbody id="tabelaProdutos">
            <tr>
              <td colspan="6">Nenhum produto encontrado</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success" id="modalAddProduto">
          Adicionar Produto
        </button>
      </div>
    </section>

  `;n().innerHTML=e,M(),function(){let e=document.getElementById("pesquisaProduto"),t=document.getElementById("botaoPesquisar");t?.addEventListener("click",async()=>{let t=e?.value.trim().toLowerCase();if(!t){M();return}try{let e=(await v()).filter(e=>e.name.toLowerCase().includes(t)||e.type_product.toLowerCase().includes(t));M(e)}catch(e){console.error("Erro ao pesquisar o produto:",e)}}),document.getElementById("modalAddProduto")?.addEventListener("click",()=>{_("modalAdicionarProduto")})}(),A()}();break;case"#gerenciarPromocoes":O(),function(){let e=`
    <section class="container-fluid p-4">
      <h4 class="mb-3 fs-1 text-center">Gerenciar Promo\xe7\xf5es</h4>
      <div class="mb-4">
        <label for="pesquisarPromocao" class="form-label">Pesquisar Promo\xe7\xe3o</label>
        <div class="input-group">
          <input type="text" class="form-control" id="pesquisarPromocao" placeholder="Pesquisar por C\xf3digo da Promo\xe7\xe3o ou Categoria">
          <button class="btn btn-success rounded-end" type="button" id="botaoPesquisar">
            <i class="bi bi-search text-white"></i>
          </button>
        </div>
        <small class="text-muted">Pesquise por C\xf3digo ou Data da Promo\xe7\xe3o</small>
      </div>
      <div class="text-center">
        <h2>Consulta de Promo\xe7\xf5es</h2>
        <table class="table table-bordered table-responsive table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>C\xf3digo</th>
              <th>Data de In\xedcio</th>
              <th>Data de Encerramento</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody id="tabelaPromocoes">
            <tr>
              <td colspan="5">Nenhuma Promo\xe7\xe3o encontrada</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success" id="abrirModalAdicionarPromocao">
          Adicionar Promo\xe7\xe3o
        </button>
      </div>
    </section>
    ${`
      <div class="modal fade" id="modalAddPromocao" tabindex="-1" aria-labelledby="modalAdicionarPromocaoLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-success" id="modalAdicionarPromocaoLabel">Adicionar Promo\xe7\xe3o</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="formAdicionarPromocao" class="border p-4 rounded shadow">
                <h4 class="mb-3">Adicionar Promo\xe7\xe3o</h4>
                <div class="mb-3">
                  <label for="codPromocao" class="form-label">C\xf3digo da Promo\xe7\xe3o</label>
                  <input type="text" class="form-control" id="codPromocao" placeholder="Digite o c\xf3digo da promo\xe7\xe3o" required>
                </div>
                <div class="mb-3">
                  <label for="startDatePromocao" class="form-label">Data de In\xedcio</label>
                  <input type="datetime-local" class="form-control" id="startDatePromocao" required>
                </div>
                <div class="mb-3">
                  <label for="endDatePromocao" class="form-label">Data de T\xe9rmino</label>
                  <input type="datetime-local" class="form-control" id="endDatePromocao" required>
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success">Adicionar Promo\xe7\xe3o</button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-success" id="btnSalvarPromocao">Salvar Promo\xe7\xe3o</button>
            </div>
          </div>
        </div>
      </div>
    `}
  `;N.innerHTML=e,A(),document.getElementById("abrirModalAdicionarPromocao").addEventListener("click",()=>{new bootstrap.Modal(document.getElementById("modalAddPromocao")).show()}),document.getElementById("btnSalvarPromocao").addEventListener("click",async()=>{let e=document.getElementById("formAdicionarPromocao"),t=new FormData(e),o={start_date_promotion:t.get("startDatePromocao"),end_date_promotion:t.get("endDatePromocao"),cod_promotion:t.get("codPromocao")};try{let t=await fetch(`${c}promotions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(t.ok)alert("Promoção criada com sucesso!"),e.reset(),bootstrap.Modal.getInstance(document.getElementById("modalAddPromocao")).hide(),D();else{let e=await t.json();alert(`Erro ao criar promo\xe7\xe3o: ${e.message}`)}}catch(e){console.error("Erro ao criar promoção:",e),alert("Erro ao criar promoção. Tente novamente.")}}),document.getElementById("botaoPesquisar").addEventListener("click",async()=>{let e=document.getElementById("pesquisarPromocao").value;if(!e){D();return}try{let t=await fetch(`${c}promotions/${e}`);if(t.ok){let e=await t.json();D([e])}else{let e=await t.json();alert(`Erro ao buscar promo\xe7\xe3o: ${e.message}`)}}catch(e){console.error("Erro ao buscar promoção:",e),alert("Erro ao buscar promoção. Tente novamente.")}})}();break;case"":case"#home":case void 0:!function(){let t=`
    <section class="d-flex flex-column flex-md-row align-items-center border-bottom m-4">
        <section class="container-sm my-1 col-md-7">
            <figure class="rounded-3 d-flex justify-content-center align-items-center">
                <img src="${/*@__PURE__*/e(d)}" class="rounded-3 img-fluid img-main-thumb w-100 h-auto">
            </figure>
        </section>
        <section class="container-xxl d-flex flex-wrap col-md-5">
            <section class="container-sm d-inline py-0" id="first-container">
                <h1 class="h1 text-center">inicio de tudo</h1>
                <p class="fs-5 text-wrap">
                    A Visgo de Jaca \xe9 uma marca fortemente conectada \xe0 cultura da Bahia, com ra\xedzes profundas na capoeira, na m\xfasica, especialmente na percuss\xe3o, e em uma est\xe9tica autoral. Seu nome e identidade carregam elementos que refletem viv\xeancias pessoais e valores como a luta anticolonial e a valoriza\xe7\xe3o da cultura sul-americana. 
                </p>
            </section>
        </section>
    </section>

    <section class="d-flex flex-column border-bottom m-4" id="countent">
        <section class="countainer-sm d-inline text-center text-wrap align-self-start flex-fill" id="our_objective">
            <h1  class="h1 text-center">
                <i class="bi bi-flag-fill"></i>
                Qual nosso objetivo?
            </h1>
            <p class="px-3 fs-4">
                O objetivo da marca Visgo de Jaca, \xe9 compartilhar e valorizar sua viv\xeancia pessoal e as ra\xedzes culturais baianas por meio da arte e do design. Ele busca criar um espa\xe7o onde a identidade cultural, especialmente ligada \xe0 capoeira, \xe0 m\xfasica (percuss\xe3o) e \xe0 luta anticolonial, seja celebrada e reconhecida.
            </p>

        </section>
        
    </section>
    <section class="countainer-sm d-flex flex-column flex-md-row text-center align-items-center text-wrap m-4" id="nao_sei_oq_colocar_aqui">
        
        <div>
            <h1  class="h1 text-center">VISGO DE JACA</h1>
            <p class="px-3 fs-4">
                A Visgo de Jaca tem como vis\xe3o se tornar uma refer\xeancia cultural e art\xedstica, expandindo sua presen\xe7a no mercado enquanto mant\xe9m sua ess\xeancia aut\xeantica e autoral. No futuro, a marca espera alcan\xe7ar novos p\xfablicos que compartilhem da paix\xe3o pela capoeira, pela m\xfasica e pela arte sul-americana, fortalecendo ainda mais os la\xe7os com sua comunidade.
            </p>
        </div>

        <img src="${/*@__PURE__*/e(i)}" alt="visgo main logo" class="img-thumbnail" style="border-radius: 100%;" width="400rem">
        
    </section>
`,o=n();o.classList="d-flex flex-column align-items-center",o.innerHTML=t}();break;default:if(location.hash.startsWith("#productDetails")){let e=location.hash.split("/")[1];e?E(e):console.error("ID do produto não especificado.")}}}G.addEventListener("click",()=>{window.history.go(-1)}),window.addEventListener("hashchange",J),window.addEventListener("load",J),J(),z(),window.addEventListener("hashchange",z),window.addEventListener("load",z);
//# sourceMappingURL=index.ce27c2a8.js.map
