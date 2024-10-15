document.addEventListener("DOMContentLoaded", function() {
    const templateNavbar = `
<aside>
<button id="hide_nav">sei la</button>
    <div class="sidebar" id="sidebar">
    <div class="logo" id="logo-button"></div>
       
        <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link active" href="#" id="usuario-link">•Usuário</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">•Controle</a>
        </li>
        <li class="nav-item"> 
            <a class="nav-link" href="#">•Imagens</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">•Admin</a>
        </li>
        </ul>
    </div>
</aside>

<section class="container d-block p-2 align-middle justify-content-center">
  <div id="tabela-container" class=" text-center">
    <h2>Consulta de Usuários</h2>
    <table class="table table-bordered table-responsive">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
 
        <tr>
          <td>1</td>
          <td>Usuário 1</td>
          <td>usuario1@example.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Usuário 2</td>
          <td>usuario2@example.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Usuário 3</td>
          <td>usuario3@example.com</td>
        </tr>
      </tbody>
  </table>
<table class="table table-bordered table-responsive">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
 
        <tr>
          <td>1</td>
          <td>Usuário 1</td>
          <td>usuario1@example.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Usuário 2</td>
          <td>usuario2@example.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Usuário 3</td>
          <td>usuario3@example.com</td>
        </tr>
      </tbody>
  </table>
  </div>
</section>
    `;
  
    let body = document.getElementsByTagName("body");
    let navbar = document.createElement("main");
    let hide_nav = document.querySelector("hide_nav");

    hide_nav.addEventListener('click',function(){
        if(navbar.style.display === 'none'){
            navbar.style.display = 'flex'
        }
    })


    navbar.innerHTML = templateNavbar;

    body[0].appendChild(navbar);  

});