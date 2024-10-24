export const cleanBody = () => {
    const elementToRemove = document.getElementById('main');

    if (elementToRemove) {
        elementToRemove.remove();
    }
}