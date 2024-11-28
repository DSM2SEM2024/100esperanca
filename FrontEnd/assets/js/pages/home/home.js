import { getOrCreateMainElement } from "../../components/main"
import visgoImgPLACEHOLDER from "/assets/imgs/visgo.jpg"
import dowloadPLAC from "./imgs/download.jpg"

img = visgoImgPLACEHOLDER;
ota_img = dowloadPLAC;


export function criaHomeHTML(){
    const homeHTML= `
<div class="container text-center bg-success">
  <div class="d-flex flex-column">
  
            <div class="p-3">
                    <figure>
                        <img src="${img}" alt="visgo de jaca" class="rounded-circle">
                    </figure>
            </div>

        <h2 class="h2">Quem é a marca Visgo de Jaca?</h2>
        <br>
            <p class="fs-3 lh-1 p-3 text-center">
                Criada a partir das experiências de Jaca, que incorpora sua herança baiana e experiências pessoais em cada criação, Visgo de Jaca é uma marca que mescla tradição, arte e autenticidade. Oferecer peças que são mais do que roupas, são manifestações culturais e autorais, é um sinal de resistência cultural com estreita relação com a capoeira, a música e o movimento anticolonial.
            </p>
    </div>
  </div>
</div>


<section class="d-flex flex-wrap  justify-content-between d-flex ">

    <section class="d-flex">
       <section class="col p-0 m-2">
            <img src="${img}" class="img-fluid">
       </section>

       <section class="col p-0 m-2">
            <img src="${img}" class="img-fluid">
       </section>
    </section>

        <section class="d-flex">
            <section class="col p-0 m-2">
                    <img src="${img}" class="img-fluid">
            </section>

            <section class="col p-0 m-2">
                    <img src="${img}" class="img-fluid">
            </section>
        </section>
    </section>
</section>
       
<section class="d-flex flex-wrap  justify-content-between d-flex ">

    <section class="d-flex">
       <section class="col p-0 m-2">
            <img src="${img}" class="img-fluid">
       </section>

       <section class="col p-0 m-2">
            <img src="${img}" class="img-fluid">
       </section>
    </section>

        <section class="d-flex">
            <section class="col p-0 m-2">
                    <img src="${img}" class="img-fluid">
            </section>

            <section class="col p-0 m-2">
                    <img src="${img}" class="img-fluid">
            </section>
        </section>
    </section>
</section>
       
`;

    const main = getOrCreateMainElement();
    main.classList = "d-flex flex-column align-items-center"
    main.innerHTML = homeHTML;
}
