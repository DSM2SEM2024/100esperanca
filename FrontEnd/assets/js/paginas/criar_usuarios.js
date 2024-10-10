let criar_user_html = `
      <div class="container-sm">

        
        <ul class="list-group">
            <li class="list-group-item">
                <label for="nome">nome</label>
            <input type="text" placeholder="nome">
        </li>

        <li class="list-group-item">
                <label for="email">email</label>
            <input type="email" name="email" id="email" placeholder="email">
        </li>

            <li class="list-group-item">
                <label for="senha">senha</label>
                <input type="password" name="senha" id="senha" placeholder="senha">
            </li>

            <li class="list-group-item">
                <label for="confima_senha">comfirma senha</label>
            <input type="password" name="confima_senha" id="confima_senha" placeholder="confirmar senha">
            </li>

          </ul>
        <br>
        <section class="localizacao">
           
            <ul class="list-group">

        <li class="list-group-item"> 
            <label for="cep">cep</label>
            <input type="text" id="cep" placeholder="cep">

            <label for="numero_casa">N°</label>
            <input type="number" name="numero_casa" id="numero_casa" placeholder="numero da casa">
        </li>

        <li class="list-group-item"> 
            <label for="rua">rua</label>
            <input type="text" id="rua" placeholder="rua">

            <label for="uf">uf</label>
            <input type="uf" placeholder="uf">
        </li>

        <li class="list-group-item"> 
            <label for="cidade">cidade</label>
            <input type="password" name="cidade" id="cidade" placeholder="cidade">
        </li>
        <li class="list-group-item"> 
            <label for="complemento">complemento</label>
            <input type="password" name="complemento" id="complemento" placeholder="complemento">
        </li>
          

        
        </ul>
        </section>
        <input class="btn btn-primary btn-lg " type="submit" value="Submit">
    </div>
`;
let criar_user_element = document.createElement("main");
criar_user_element.innerHTML = criar_user_html;
document.body.appendChild(criar_user_element)
