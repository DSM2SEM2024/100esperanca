export const clearBody = () => {
    const elementToRemove = document.getElementById('main');
    
    if (elementToRemove) {
    elementToRemove.remove();
    }
}