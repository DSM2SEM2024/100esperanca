const main = document.querySelector("main");

const header = `

   <main>
        <section class="login">
            <!-- campos devem ser validados de acordo com a regra de negocio -->
            <label for="nome">nome</label>
            <input type="text" placeholder="nome">

            <label for="email">email</label>
            <input type="email" name="email" id="email" placeholder="email">

            <label for="senha">senha</label>
            <input type="password" name="senha" id="senha" placeholder="senha">

            <label for="confima_senha">comfirma senha</label>
            <input type="password" name="confima_senha" id="confima_senha" placeholder="confirmar senha">
              
        </section>
        
        <section class="localizacao">

            <label for="cep">cep</label>
            <input type="text" id="cep" placeholder="cep">

            <label for="rua">rua</label>
            <input type="text" id="rua" placeholder="rua">

            <label for="cidade">cidade</label>
            <input type="password" name="cidade" id="cidade" placeholder="cidade">

            <label for="complemento">complemento</label>
            <input type="password" name="complemento" id="complemento" placeholder="complemento">

            <label for="uf">uf</label>
            <input type="uf" placeholder="uf">

            <label for="numero_casa">N°</label>
            <input type="number" name="numero_casa" id="numero_casa" placeholder="numero da casa">

        </section>
        <input type="submit" value="Cadastrar">
    </main>
`;
main.innerHTML(header)