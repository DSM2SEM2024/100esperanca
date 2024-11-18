import { getOrCreateMainElement } from "../../components/main"
import visgoImgPLACEHOLDER from "/assets/imgs/visgo.jpg"
import dowloadPLAC from "./imgs/download.jpg"

import {carrosel} from "bootstrap/js/dist/carousel"

img = visgoImgPLACEHOLDER;
ota_img = dowloadPLAC;


export function criaHomeHTML(){
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


        <section class="about d-flex flex-column">

            <figure>
                <img src="${img}" alt="visgo de jaca" class="rounded-circle">
            </figure>

            <section class="about-body h-100">
                <p class="text-center text-wrap h2">
                    visco de jaca piriri pororo pipi popo papum pirulito bao doce, é isso aq q ele faz e pá, essa é a
                    loja dele e nao sei q lá
                </p>

            </section>

        </section>
        `;

    const main = getOrCreateMainElement();
    main.classList = "d-flex flex-column align-items-center"
    main.innerHTML = homeHTML;
}
