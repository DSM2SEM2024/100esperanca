let criar_user_html = `
       <div class="container-sm position-relative">
        
        <ul class="list-group ">
            <li class="list-group-item row">
                <label for="nome">Nome</label>
            <input type="text" placeholder="Nome">
        </li>

        <li class="list-group-item row row">
                <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email">
        </li>

            <li class="list-group-item row">
                <label for="senha">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Senha">
            </li>

            <li class="list-group-item row">
                <label for="confima_senha">Confirmar Senha</label>
            <input type="password" name="confima_senha" id="confima_senha" placeholder="Confirmar Senha">
            </li>

          </ul>
        <br>
        <section class="localizacao">
           
            <ul class="list-group ">

        <li class="list-group-item row "> 
            <div class="row justify-content-start  justify-content-center">
                <div class="col row">
                    <label for="cep">CEP</label>
                    <input type="text" id="cep" placeholder="CEP" class="form=control">
                </div>

                <div class="col-2 row">
                    <label for="numero_casa">N°</label>
                    <input type="number" name="numero_casa" id="numero_casa">
                </div>
            </div>
        </li>

        <li class="list-group-item row"> 

            <div class="row justify-content-center ">
                <div class="col row">
                    <label for="cep">Rua</label>
                    <input type="text" id="rua" placeholder="Rua">
                </div>

                <div class="col-2 row">
                    <label for="uf">UF</label>
                    <input type="number" name="uf" id="uf">
            </div>
        </li>

        <li class="list-group-item row "> 
            <label for="cidade">Cidade</label>
            <input type="password" name="cidade" id="cidade" placeholder="Cidade">
        </li>
        <li class="list-group-item row"> 
            <label for="complemento">Complemento</label>
            <input type="password" name="complemento" id="complemento" placeholder="Complemento">
        </li>
          

         <button class="btn btn-success btn-lg btn-block">Criar Usuário</button>
        </ul>

        </section>
        
    </div>
`;

if (document.body.classList.contains('cadastro-usuario')) {
    const voltarButton = document.createElement('button');
    voltarButton.innerHTML = 'Voltar';
    voltarButton.id = 'voltar-btn'; // ID específico para o novo botão
    voltarButton.style.position = 'absolute';
    voltarButton.style.top = '10px'; // Ajuste conforme necessário
    voltarButton.style.right = '10px'; // Ajuste conforme necessário
    voltarButton.style.backgroundColor = '#198754'; // Cor do botão
    voltarButton.style.color = 'white'; // Cor do texto
    voltarButton.style.border = 'none'; // Sem borda
    voltarButton.style.borderRadius = '5px'; // Bordas arredondadas
    voltarButton.style.padding = '10px'; // Espaçamento interno
    voltarButton.style.cursor = 'pointer'; // Cursor de mão ao passar o mouse
    voltarButton.style.zIndex = '1000'; // Para garantir que fique acima de outros elementos

    // Adicionando o evento de clique
    voltarButton.addEventListener('click', () => {
        window.location.href = 'tela_login.html'; // Altere para o caminho correto
    });

    // Adicionando o botão ao body ou a um contêiner específico
    document.body.appendChild(voltarButton);
}


let criar_user_element = document.createElement("main");
criar_user_element.innerHTML = criar_user_html;
document.body.appendChild(criar_user_element)
