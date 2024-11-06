import { getOrCreateMainElement } from "../components/main";

export function criarUsuarioHtml() {
    const criarUsuario = `
    <h1 class="">cadastre-se</h1>
<section class="d-flex flex-wrap justify-content-center align-items-center ">

    <form class="h-50">
        <div class="container">
            <div class="form-group col">
            <label for="nome">nome</label>
            <input type="text" class="form-control" id="nome" placeholder="nome">
            </div>

            <div class="form-group col">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>

            <div class="form-group col">
            <label for="inputPassword4">Senha</label>
            <input type="password" class="form-control" id="inputPassword4" >
            </div>

            <div class="form-group col">
            <label for="inputPassword4">Confirmar Senha</label>
            <input type="password" class="form-control" id="inputPassword4" >
            </div>
        </div>
    </form>


    <form class="h-50">

    <div class="form-row d-flex">
            <div class="col">
                <label for="inputCep">Cep</label>
                <input type="text" class="form-control" id="inputCep">
            </div>

            <div class="col-2">
                <label for="inputUf">Uf</label>
                <input type="text" class="form-control" id="inputUf">
            </div>

        </div>
        
        <div class="form-row d-flex">
            
            <div class="form-group col">
                <label for="inputRua">Rua</label>
                <input type="text" class="form-control" id="inputRua">
            </div>
        
            <div class="form-group col-2">
                <label for="inputN">N°</label>
                <input type="text" class="form-control" id="inputN">
            </div>
            
        </div>
            <div class="form-group col">
                <label for="inputCidade">Cidade</label>
                <input type="text" class="form-control" id="inputCidade">
            </div>

            <div class="form-group col">
                <label for="inputComplemento">Complemento</label>
                <input type="text" class="form-control" id="inputComplemento">
            </div>  

    </form>
</section>
`;
const main = getOrCreateMainElement();
main.classList="d-flex flex-column align-items-center h-100 "
main.innerHTML = criarUsuario;
}

