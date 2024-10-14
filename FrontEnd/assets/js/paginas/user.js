document.addEventListener("DOMContentLoaded", function() {

    const templateNavbar = `

<aside>
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

<section>


<section>
    `
    let body = document.getElementsByTagName("body");
    let navbar = document.createElement("main");
    navbar.innerHTML = templateNavbar;

    body[0].appendChild(navbar);    
});