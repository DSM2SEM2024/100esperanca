import { getOrCreateMainElement } from "../../components/main"
import visgoImgPLACEHOLDER from "/assets/imgs/visgo.jpg"
import sois from "./imgs/thumbnail.png"

img = visgoImgPLACEHOLDER;
sois = sois;


export function homeScreen(){
    const homeHTML= `

    <section class="container-sm my-1">

        <figure class="rounded-3 d-flex justify-content-center align-items-center">
                <img src="${sois}" class="rounded-3 img-fluid img-main-thumb">
        </figure>

    </section>
  

    <section class="countainer-xxl d-flex flex-wrap">
        <section class="countainer-sm d-inline" id="first-container py-5">
            <h1 class="h1 text-center">inicio de tudo</h1>
            <p class="px-3 fs-4 text-wrap">
                adiburai naxumerus silimulambukaidro Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique iste fugit hic atque blanditiis praesentium, esse quidem accusantium perferendis qui at ad voluptatibus quia saepe veritatis voluptas illo! Culpa repudiandae vero totam, illum at consectetur nihil doloremque voluptates ullam laboriosam tempora ad id cumque ab labore. Accusamus harum voluptatibus, delectus id nemo illo dicta consequatur ipsa nulla recusandae quibusdam et! Quae eos corporis reiciendis quibusdam debitis sed mollitia tenetur et porro ab, modi vel ipsum eveniet neque vitae perspiciatis! Cupiditate illo mollitia necessitatibus porro sit alias voluptatem distinctio deserunt dolor rerum? Expedita laudantium ex, accusantium delectus sed officia totam? 
            </p>
        </section>
    </section>
    
    <hr>

    <section class="d-flex flex-row" id="countent">
        <section class="countainer-sm d-inline text-center text-wrap" id="our_objective">
            <h1  class="h1 text-center">
                <i class="bi bi-flag-fill"></i>
                Qual nosso objetivo?
            </h1>
            <p class="px-3 fs-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni molestiae tempora voluptate dolore, itaque maxime? Veniam labore, magni error fuga ipsa quod iusto porro aperiam voluptates. Inventore maxime blanditiis cumque animi ratione perferendis consectetur error quisquam et perspiciatis sapiente at officia, praesentium incidunt? Ex aperiam dolores distinctio, tempore commodi laboriosam?
            </p>

        </section>
        <section class="  countainer-sm d-inline text-center text-wrap" id="nao_sei_oq_colocar_aqui">
            <h1  class="h1 text-center">
                <i class="bi bi-code-slash"></i>
                 Desenvolvimento do site
            </h1>
            <p class="px-3 fs-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni molestiae tempora voluptate dolore, itaque maxime? Veniam labore, magni error fuga ipsa quod iusto porro aperiam voluptates. Inventore maxime blanditiis cumque animi ratione perferendis consectetur error quisquam et perspiciatis sapiente at officia, praesentium incidunt? Ex aperiam dolores distinctio, tempore commodi laboriosam?
            </p>
            
        </section>
    </section>
    <hr>
        <section class=" countainer-sm d-flex flex-column text-center align-items-center text-wrap" id="nao_sei_oq_colocar_aqui">
            <img src="${img}" alt="visgo main logo" class="img-thumbnail" style="border-radius: 100%;" width="400rem">

            <h1  class="h1 text-center">VISGO DE JACA</h1>
            <p class="px-3 fs-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni molestiae tempora voluptate dolore, itaque maxime? Veniam labore, magni error fuga ipsa quod iusto porro aperiam voluptates. Inventore maxime blanditiis cumque animi ratione perferendis consectetur error quisquam et perspiciatis sapiente at officia, praesentium incidunt? Ex aperiam dolores distinctio, tempore commodi laboriosam?
            </p>
            
        </section>
`;

    const main = getOrCreateMainElement();
    main.classList = "d-flex flex-column align-items-center"
    main.innerHTML = homeHTML;
}
