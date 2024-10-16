document.addEventListener("DOMContentLoaded", function() {
    const templatemain = `
<aside>
<button id="hide_btn">sei la</button>

  <div class="sidebar d-flex " id="sidebar">
    <div class="logo" id="logo-button"></div>
       
        <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link active text-white" href="#" id="usuario-link">•Usuário</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white " href="#">•Controle</a>
        </li>
        <li class="nav-item"> 
            <a class="nav-link text-white" href="#">•Imagens</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="#">•Admin</a>
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
    let main = document.createElement("main");
    let navbar = document.getElementById("sidebar")
    let hide_btn = document.getElementById("hide_btn");
    main.innerHTML = templatemain;
    hide_btn.addEventListener("click",function(){
      console.log("teste");
        // if(navbar.style.display === 'flex'){
        //     navbar.style.display = 'none';
        //     prompt("teste");
        // } else {
        //     navbar.style.display = 'flex';
        // }
    });


  
    body[0].appendChild(main);  
   
     

});