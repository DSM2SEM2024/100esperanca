import { getOrCreateMainElement } from "./main";

const main = getOrCreateMainElement;
getOrCreateMainElement
export const footerHtml = `

<nav class="navbar align-items-start">
<div class="container-fluid">
<span class="navbar-text">
footer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil culpa earum debitis deserunt iusto laborum optio architecto dolore ad dolores sunt nulla, quibusdam vero officia dolorem quos in velit.
</span>
</div>
</nav>

`;

const footerElement = document.createElement('footer');
footerElement.innerHTML = footerHtml;
document.body.insertAdjacentElement('beforeend',footerElement)
