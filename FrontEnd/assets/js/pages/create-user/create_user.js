import { getOrCreateMainElement } from "../../components/main";




export function criarUsuarioHtml() {
    const criarUsuario = `


    
    <h1 class="">cadastre-se</h1>
<section class="d-flex flex-wrap justify-content-center align-items-center ">

    <form>
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


    <form class="d-flex flex-column justify-content-between">

    <div class="form-row mt-4">

        <div class="form-group m-2 d-flex">
           
                <input name="cep" type="text" id="cep" class="form-control " value="" onblur="pesquisacep(this.value)" placeholder="cep"/>
                
                <input name="N" type="number" id="N" class="form-control w-25" value="n" placeholder="N"/>
        </div>

          <div class="form-group m-2 d-flex">
               <input name="cidade" type="text" id="cidade" class="form-control"  placeholder="cidade" />

                <input name="uf" type="text" id="uf" class="form-control w-25"  placeholder="uf"/>
        </div>

        <div class="form-group ">
                <input name="rua" type="text" id="rua" class="form-control m-2" placeholder="rua"/>
        </div>


        <div class="form-group col">
                 <input name="bairro" type="text" id="bairro" class="form-control m-2"  placeholder="bairro" />
        </div>

        <div class="form-group col">
                <input name="uf" type="text" id="uf" class="form-control m-2"  size="2" placeholder="uf"/>
        </div>
    </form>
</section>
`;
    const main = getOrCreateMainElement();
    main.classList = "d-flex flex-column align-items-center h-100 "
    main.innerHTML = criarUsuario;
}