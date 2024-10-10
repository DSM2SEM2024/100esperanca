let criar_user_html = `
      <div class="container-sm">

        
        <ul class="list-group ">
            <li class="list-group-item row">
                <label for="nome">nome</label>
            <input type="text" placeholder="nome">
        </li>

        <li class="list-group-item row row">
                <label for="email">email</label>
            <input type="email" name="email" id="email" placeholder="email">
        </li>

            <li class="list-group-item row">
                <label for="senha">senha</label>
                <input type="password" name="senha" id="senha" placeholder="senha">
            </li>

            <li class="list-group-item row">
                <label for="confima_senha">comfirma senha</label>
            <input type="password" name="confima_senha" id="confima_senha" placeholder="confirmar senha">
            </li>

          </ul>
        <br>
        <section class="localizacao">
           
            <ul class="list-group ">

        <li class="list-group-item row "> 
            <div class="row justify-content-start  justify-content-center">
                <div class="col row">
                    <label for="cep">cep</label>
                    <input type="text" id="cep" placeholder="cep" class="form=control">
                </div>

                <div class="col-2 row">
                    <label for="numero_casa">N\xb0</label>
                    <input type="number" name="numero_casa" id="numero_casa">
                </div>
            </div>
        </li>

        <li class="list-group-item row"> 

            <div class="row justify-content-center ">
                <div class="col row">
                    <label for="cep">rua</label>
                    <input type="text" id="rua" placeholder="rua">
                </div>

                <div class="col-2 row">
                    <label for="uf">uf</label>
                    <input type="number" name="uf" id="uf">
            </div>
        </li>

        <li class="list-group-item row "> 
            <label for="cidade">cidade</label>
            <input type="password" name="cidade" id="cidade" placeholder="cidade">
        </li>
        <li class="list-group-item row"> 
            <label for="complemento">complemento</label>
            <input type="password" name="complemento" id="complemento" placeholder="complemento">
        </li>
          

         <button class="btn btn-success btn-lg btn-block">submit</button>
        </ul>

        </section>
        
    </div>
`;
let criar_user_element = document.createElement("main");
criar_user_element.innerHTML = criar_user_html;
document.body.appendChild(criar_user_element);

//# sourceMappingURL=criar_usuario.dc0e304e.js.map
