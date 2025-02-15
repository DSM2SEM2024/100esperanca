import { getOrCreateMainElement } from "../../components/main"
import visgoImg from "../../../imgs/visgo.jpg"
import thumbnail from "./imgs/thumbnail.png"

export function homeScreen(){
    const homeHTML= `
    <section class="d-flex flex-column flex-md-row align-items-center border-bottom m-4">
        <section class="container-sm my-1 col-md-7">
            <figure class="rounded-3 d-flex justify-content-center align-items-center">
                <img src="${thumbnail}" class="rounded-3 img-fluid img-main-thumb w-100 h-auto">
            </figure>
        </section>
        <section class="container-xxl d-flex flex-wrap col-md-5">
            <section class="container-sm d-inline py-0" id="first-container">
                <h1 class="h1 text-center">inicio de tudo</h1>
                <p class="fs-5 text-wrap">
                    A Visgo de Jaca é uma marca fortemente conectada à cultura da Bahia, com raízes profundas na capoeira, na música, especialmente na percussão, e em uma estética autoral. Seu nome e identidade carregam elementos que refletem vivências pessoais e valores como a luta anticolonial e a valorização da cultura sul-americana. 
                </p>
            </section>
        </section>
    </section>

    <section class="d-flex flex-column border-bottom m-4" id="countent">
        <section class="countainer-sm d-inline text-center text-wrap align-self-start flex-fill" id="our_objective">
            <h1  class="h1 text-center">
                <i class="bi bi-flag-fill"></i>
                Qual nosso objetivo?
            </h1>
            <p class="px-3 fs-4">
                O objetivo da marca Visgo de Jaca, é compartilhar e valorizar sua vivência pessoal e as raízes culturais baianas por meio da arte e do design. Ele busca criar um espaço onde a identidade cultural, especialmente ligada à capoeira, à música (percussão) e à luta anticolonial, seja celebrada e reconhecida.
            </p>

        </section>
        
    </section>
    <section class="countainer-sm d-flex flex-column flex-md-row text-center align-items-center text-wrap m-4" id="nao_sei_oq_colocar_aqui">
        
        <div>
            <h1  class="h1 text-center">VISGO DE JACA</h1>
            <p class="px-3 fs-4">
                A Visgo de Jaca tem como visão se tornar uma referência cultural e artística, expandindo sua presença no mercado enquanto mantém sua essência autêntica e autoral. No futuro, a marca espera alcançar novos públicos que compartilhem da paixão pela capoeira, pela música e pela arte sul-americana, fortalecendo ainda mais os laços com sua comunidade.
            </p>
        </div>

        <img src="${visgoImg}" alt="visgo main logo" class="img-thumbnail" style="border-radius: 100%;" width="400rem">
        
    </section>
`;

    const main = getOrCreateMainElement();
    main.classList = "d-flex flex-column align-items-center"
    main.innerHTML = homeHTML;
}
