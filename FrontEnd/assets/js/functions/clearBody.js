import { getOrCreateMainElement } from "../components/main";


export function clearBody() {
    const main = document.getElementById("main");
    if (main) {
        main.innerHTML = ''; // Limpa apenas o conteúdo principal
    }

    const body = document.getElementsByTagName('body');
     body[0].classList = "";
}
