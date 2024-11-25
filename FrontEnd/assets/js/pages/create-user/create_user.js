import { getOrCreateMainElement } from "../../components/main";

export function criarUsuarioHtml() {
    const criarUsuario = `
    <section>
    <h1 class="text-center text-success justify-content-center">Cadastre-se</h1>
    <div class="d-flex flex-wrap justify-content-center align-items-center mb-4">
        <!-- Formulário de Dados Pessoais -->
        <form id="form-dados-pessoais">
            <div class="container">
                <div class="form-group col">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" id="nome" placeholder="Nome">
                </div>

                <div class="form-group col">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email">
                </div>

                <div class="form-group col">
                    <label for="senha">Senha</label>
                    <input type="password" class="form-control" id="senha">
                </div>

                <div class="form-group col">
                    <label for="confirmarSenha">Confirmar Senha</label>
                    <input type="password" class="form-control" id="confirmarSenha">
                </div>
            </div>
        </form>

        <!-- Formulário de Endereço -->
        <form id="form-endereco" class="d-flex flex-column justify-content-between">
            <div class="form-row mt-4">
                <div class="form-group m-2 d-flex">
                    <input name="cep" type="text" id="cep" class="form-control" placeholder="CEP" />
                    <input name="N" type="number" id="numero" class="form-control w-25" placeholder="N" />
                </div>

                <div class="form-group m-2 d-flex">
                    <input name="cidade" type="text" id="cidade" class="form-control" placeholder="Cidade" />
                    <input name="uf" type="text" id="uf" class="form-control w-25" placeholder="UF" />
                </div>

                <div class="form-group col ms-5">
                    <input name="bairro" type="text" id="bairro" class="form-control m-2 w-75" placeholder="Bairro" />
                </div>
                <div class="form-group ms-5">
                    <input name="rua" type="text" id="rua" class="form-control m-2 w-75" placeholder="Rua" />
                </div>
            </div>
        </form>
        
        
            <aside class="d-flex justify-content-center m-4 p-4">
                <button id="submit-btn" class="btn btn-success w-100">Cadastrar</button>
            </aside>
    </div>
    </section>
    `;

    const main = getOrCreateMainElement();
    main.classList = "d-flex flex-column align-items-center h-100";
    main.innerHTML = criarUsuario;

    // Associar os eventos depois de renderizar
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Evita recarregar a página

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        const cep = document.getElementById("cep").value;
        const numero = document.getElementById("numero").value;
        const cidade = document.getElementById("cidade").value;
        const uf = document.getElementById("uf").value;
        const bairro = document.getElementById("bairro").value;
        const rua = document.getElementById("rua").value;

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        const usuario = {
            nome,
            email,
            senha,
            endereco: {
                cep,
                numero,
                cidade,
                uf,
                bairro,
                rua,
            },
        };

        // Exibindo os dados no console (simulando envio ao backend)
        console.log("Usuário cadastrado:", usuario);
    });
}