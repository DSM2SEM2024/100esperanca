import { getOrCreateMainElement } from "../../components/main";

export function criarUsuarioHtml() {
    const criarUsuario = `
    <section class="p-3">
    <h1 class="text-center text-success justify-content-center">Cadastre-se</h1>
    <div class="d-flex flex-column gap-3">
        <!-- Formulário de Dados Pessoais -->
        <form id="form-dados-pessoais">
            <div class="d-flex flex-column gap-3">
                <div>
                    <input type="text" class="form-control" id="nome" placeholder="Nome" required>
                </div>

                <div>
                    <input type="email" class="form-control" id="email" placeholder="Email" required>
                </div>

                <div>
                    <input type="password" class="form-control" id="senha" placeholder="Senha" required>
                </div>

                <div>
                    <input type="password" class="form-control" id="confirmarSenha" placeholder="Confirmar senha" required>
                </div>
            </div>
        </form>

        <!-- Formulário de Endereço -->
        <form id="form-endereco">
            <div class="d-flex flex-column gap-3">
                <div class="d-flex gap-3">
                    <input name="cep" type="text" id="cep" class="form-control" placeholder="CEP" required />
                    <input name="N" type="number" id="numero" class="form-control w-25" placeholder="Nº" required />
                </div>

                <div class="d-flex gap-3">
                    <input name="cidade" type="text" id="cidade" class="form-control" placeholder="Cidade" required />
                    <input name="uf" type="text" id="uf" class="form-control w-25" placeholder="UF" required />
                </div>

                <div >
                    <input name="bairro" type="text" id="bairro" class="form-control" placeholder="Bairro" required />
                </div>
                <div>
                    <input name="rua" type="text" id="rua" class="form-control" placeholder="Rua" required />
                </div>
            </div>
            </form>
            
    </div>
        <button id="submit-btn" class="mt-3 w-100 btn btn-success">Cadastrar</button>
    </section>
    `;

    const main = getOrCreateMainElement();
    main.classList = "d-flex flex-column align-items-center justify-content-center";
    main.innerHTML = criarUsuario;

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
            id: Date.now(),
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

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Usuário cadastrado com sucesso!");
    });
}
