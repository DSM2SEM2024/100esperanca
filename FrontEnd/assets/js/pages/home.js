import { getOrCreateMainElement } from "../components/main";

export const homeHtml = `
`
const loginElement = document.createElement('body');
loginElement.innerHTML = homeHtml;
document.body.insertAdjacentElement('beforeend',loginElement);