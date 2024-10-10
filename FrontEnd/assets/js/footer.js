

const footerHtml = `
<footer>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-text">
            footer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil culpa earum debitis deserunt iusto laborum optio architecto dolore ad dolores sunt nulla, quibusdam vero officia dolorem quos in velit.
          </span>
        </div>
      </nav>
</footer>
`;
const footerElement = document.createElement('footer');
footerElement.innerHTML =footerHtml;

document.body.insertAdjacentHTML('afterend',footerHtml);
