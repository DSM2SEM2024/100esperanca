document.addEventListener("DOMContentLoaded", function() {

    const templateNavbar = `
<section class="d-flex flex-column ">   
 <body>
  <div class="sidebar" id="sidebar">
    <div class="logo" id="logo-button">
      <img src="assets/imgs/visgo.jpg" alt="logo" class="img-fluid">
    </div>
    
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

  



  <div class="content">
    <div id="tabela-container" class="d-none text-center">
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
  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script>
    const sidebar = document.getElementById('sidebar');
    const logoButton = document.getElementById('logo-button');
    const usuarioLink = document.getElementById('usuario-link');
    const tabelaContainer = document.getElementById('tabela-container');

    logoButton.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    usuarioLink.addEventListener('click', (event) => {
      event.preventDefault();
      tabelaContainer.classList.toggle('d-none');
    });
  </script>
    `
    
    let body = document.getElementsByTagName("body");
    let navbar = document.createElement("main");
    navbar.innerHTML = templateNavbar;

    body[0].appendChild(navbar);    
});