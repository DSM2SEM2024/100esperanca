export function clearBody() {
    const main = document.getElementById("main");
    if (main) {
        main.innerHTML = '';
        main.classList = null;
        const body = document.getElementsByTagName('body');
        body[0].classList = "";
    }
}
