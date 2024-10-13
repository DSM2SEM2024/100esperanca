document.addEventListener("DOMContentLoaded", function() {

    const templateNavbar = `
<section class="d-flex flex-column ">   
    <table class="table table-bordered">
    <thead>
        <tr>  
        <th scope="col" class="table-success">nome</th>
        </tr>
        </thead>
        <tbody>
        <td>    
        <ul>
            <li>visgo jaca</li>
            <li>luketa da padaduseta</li>
            </ul>
        </td>
        </tbody>
    </table>
    <table class="table table-bordered">
    <thead>
        <tr>  
        <th scope="col" class="table-success">email</th>
        </tr>
        </thead>

        <tbody>
        <td>    
            <ul>
            <li>visgo jaca</li>
            <li>luketa da padaduseta</li>
            </ul>
        </td>
        </tbody>

    </table>
    <table class="table table-bordered">
    <thead>
        <tr>  
        <th scope="col" class="table-success">permisoes</th>
        </tr>
        </thead>
        <tbody>
        <td>    
        <ul>
            <li>visgo jaca</li>
            <li>luketa da padaduseta</li>
            </ul>
        </td>
        </tbody>
    </table>
</section>
    `
    let body = document.getElementsByTagName("body");
    let navbar = document.createElement("main");
    navbar.innerHTML = templateNavbar;

    body[0].appendChild(navbar);    
});