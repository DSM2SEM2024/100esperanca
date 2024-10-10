document.addEventListener("DOMContentLoaded", function() {
    const templateNavbar = `
        <div class="sidebar">
        <div class="logo">
            <img src="docs/visgo.jpg" alt="Logo" class="img-fluid">
        </div>
        
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="#">\u{2022}Usu\xe1rio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">\u{2022}Controle</a>
            </li>
            <li class="nav-item"> 
                <a class="nav-link" href="#">\u{2022}Imagens</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">\u{2022}Admin</a>
            </li>
        </ul>
        </div>

        <div class="content">
            <h1>Bem-vindo ao meu site!</h1>
            <p>Este \xe9 o conte\xfado principal da p\xe1gina.</p>
        </div>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="FrontEnd/assets/js/user.js"></script>
    `;
    let body = document.getElementsByTagName("body");
    let navbar = document.createElement("navabar");
    navbar.innerHTML = templateNavbar;
    body[0].appendChild(navbar);
});

//# sourceMappingURL=gerenciar_usuarios.3983ed95.js.map
