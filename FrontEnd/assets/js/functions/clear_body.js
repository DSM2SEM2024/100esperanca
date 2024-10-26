export const clearBody = () => {
    const elementToRemove = document.getElementById('body');
    
    if (elementToRemove) {
    elementToRemove.remove();
    }
}