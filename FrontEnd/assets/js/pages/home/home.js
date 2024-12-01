import { getOrCreateMainElement } from "../../components/main"
import visgoImgPLACEHOLDER from "/assets/imgs/visgo.jpg"
import dowloadPLAC from "./imgs/download.jpg"

img = visgoImgPLACEHOLDER;
ota_img = dowloadPLAC;


export function homeScreen(){
    const homeHTML= `
  
        <figure class="d-flex flex-wrap justify-content-center">
            <img src="${img}" alt="galery-img" class="img-fluid mt-3">

            <img src="${img}" alt="galery-img" class="img-fluid mt-3">

            <img src="${img}" alt="galery-img" class="img-fluid mt-3">
        </figure>



        <section id="products-row" class="d-block">

            <section id="products-title">
                <h2 class="text-center h2 display-5">
                    NOVIDADES!!!
                </h2>
            </section>

            <section id="products-content">
                <ul class="d-flex flex-row overflow-auto position-relative p-0">

                    <li class="card shadow flex-shrink-0">
                        <img src="${img}" class="card-img-top" alt="...">

                        <div class="card-body">
                            <p class="card-text">99.9</p>
                        </div>
                    </li>

                    <li class="card shadow flex-shrink-0">
                        <img src="${img}" class="card-img-top" alt="...">

                        <div class="card-body">
                            <p class="card-text">99.9</p>
                        </div>
                    </li>


                    <li class="card  shadow flex-shrink-0">
                        <img src="${img}" class="card-img-top" alt="...">

                        <div class="card-body">
                            <p class="card-text">99.9</p>
                        </div>
                    </li>

                    <li class="card shadow flex-shrink-0">
                        <img src="${img}" class="card-img-top" alt="...">

                        <div class="card-body">
                            <p class="card-text">99.9</p>
                        </div>
                    </li>

                    <li class="card shadow flex-shrink-0">
                        <img src="${img}" class="card-img-top" alt="...">

                        <div class="card-body">
                            <p class="card-text">99.9</p>
                        </div>
                    </li>

                    <li class="card shadow flex-shrink-0">
                        <img src="${img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">99.9</p>
                        </div>
                    </li>

                </ul>
            </section>
        </section>

        <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">
     <figure>
                <img src="${img}" alt="visgo de jaca" class="rounded-circle w-50">
    </figure>
    </div>
    </div>
    <div class="col p-3">
      <p class="align-middle text-center text-wrap h2">
                    Visgo de Jaca é uma marca autoral, cuja essência está profundamente ligada à cultura baiana, especialmente à capoeira e à música, com foco na percussão.
                </p>
    </div>
    </div>
  </div>
</div>
`;

    const main = getOrCreateMainElement();
    main.classList = "d-flex flex-column align-items-center"
    main.innerHTML = homeHTML;
}
