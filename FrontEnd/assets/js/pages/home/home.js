import { getOrCreateMainElement } from "../../components/main"
import visgoImgPLACEHOLDER from "/assets/imgs/visgo.jpg"
import dowloadPLAC from "./imgs/download.jpg"

import {carrosel} from "bootstrap/js/dist/carousel"

img = visgoImgPLACEHOLDER;
ota_img = dowloadPLAC;


export function criaHomeHTML(){
    const homeHTML= `
  
        <figure class="d-flex justify-content-center w-100 m-5">
            <img src="${img}" alt="galery-img" class="mx-5 img-fluid">

            <img src="${img}" alt="galery-img" class="xm-5 img-fluid">

            <img src="${img}" alt="galery-img" class="mx-5 img-fluid">
        </figure>



        <section id="products-row" class="d-block px-5 m-5 w-75">
            <section id="products-title">
                <h2 class="h2 display-5">
                    NOVIDADES!!!
                </h2>
            </section>

            <section id="products-content">
                <ul class="d-flex   flex-row gap-3 overflow-auto position-relative">

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


        <section id="products-row" class="d-block px-5 w-75">

            <section id="products-title">
                <h2 class="h2 display-5">NOVIDADES!!!</h2>
            </section>

            <section id="products-content">
                <ul class="d-flex   flex-row gap-3 overflow-auto position-relative">
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


        <section class="about d-flex align-items-center px-5 bg-success w-100 p-5">

            <figure class="">
                <img src="${img}" alt="visgo de jaca" class="rounded-circle">
            </figure>

            <section class="about-body h-100">
                <p class="ps-4 text-center text-wrap h2">
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
