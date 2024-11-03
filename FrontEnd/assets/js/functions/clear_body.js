import { getOrCreateMainElement } from "../components/main";


export const clearBody = () => {
    const elementToRemove = document.getElementById('main');
    
    if (getOrCreateMainElement) {
    elementToRemove.remove;
    }
}