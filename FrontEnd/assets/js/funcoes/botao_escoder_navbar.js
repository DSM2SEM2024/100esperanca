
const button = document.getElementById("button");
const navbar = document.getElementById("sidebar");

button.addEventListener("click",hide_navbar)
function hide_navbar(){
    navbar.addEventListener('click', function(){
        navbar.innerHTML = "funciona buceta";
        // if(navbar.style.display === 'flex'){
        //     navbar.style.backgroundColor = 'black';
        // } else {
        //     navbar.style.display = 'none';
        // }
    });  console.log("teste");
}