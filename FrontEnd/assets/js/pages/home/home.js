import { getOrCreateMainElement } from "../../components/main"
import visgoImgPLACEHOLDER from "/assets/imgs/visgo.jpg"
import sois from "./imgs/thumbnail.png"

img = visgoImgPLACEHOLDER;
sois = sois;


export function criaHomeHTML(){
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
                A Visgo de Jaca é uma marca fortemente conectada à cultura da Bahia, com raízes profundas na capoeira, na música, especialmente na percussão, e em uma estética autoral. Seu nome e identidade carregam elementos que refletem vivências pessoais e valores como a luta anticolonial e a valorização da cultura sul-americana. A marca se inspira na simbologia da Cruz Andina e em traços artísticos influenciados por Caribé, traduzindo essas referências em desenhos exclusivos para camisetas.
            </p>
            <p class="px-3 fs-4 text-wrap"> 
                Embora ainda seja representada por uma única pessoa, o Jaca, a Visgo de Jaca tem como público-alvo indivíduos ligados à capoeira, à música, e à arte com um toque pessoal. A faixa etária varia, mas o foco principal são adultos de 20 a 50 anos. Sob encomenda, atende também ao público infantil.
            </p>
            <p class="px-3 fs-4 text-wrap">
                A identidade visual se baseia em tons de preto e verde, explorando variações mais claras desse verde para dar mais leveza. O site será uma vitrine para vendas, sem outras funcionalidades adicionais, e contará com uma galeria mostrando parceiros que utilizam a marca. A frase de efeito "Pego no Visgo" é usada para reforçar a conexão com o público, aparecendo em locais estratégicos como a navbar ou a finalização da compra. 
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
                O objetivo da marca Visgo de Jaca, é compartilhar e valorizar sua vivência pessoal e as raízes culturais baianas por meio da arte e do design. Ele busca criar um espaço onde a identidade cultural, especialmente ligada à capoeira, à música (percussão) e à luta anticolonial, seja celebrada e reconhecida.
            </p>

        </section>
        <section class="  countainer-sm d-inline text-center text-wrap" id="nao_sei_oq_colocar_aqui">
            <h1  class="h1 text-center">
                <i class="bi bi-code-slash"></i>
               Pretençao pro futuro
            </h1>
            <p class="px-3 fs-4">
                A Visgo de Jaca tem como visão se tornar uma referência cultural e artística, expandindo sua presença no mercado enquanto mantém sua essência autêntica e autoral. No futuro, a marca espera alcançar novos públicos que compartilhem da paixão pela capoeira, pela música e pela arte sul-americana, fortalecendo ainda mais os laços com sua comunidade.
            </p>
            
        </section>
    </section>
    <hr>     
    </section>
`;

    const main = getOrCreateMainElement();
    main.classList = "d-flex flex-column align-items-center"
    main.innerHTML = homeHTML;
}
