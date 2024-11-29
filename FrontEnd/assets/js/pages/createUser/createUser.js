import { showModal } from "../../components/globalModal";
import { getOrCreateMainElement } from "../../components/main";
import { createUser } from "../../services/usersService";

export function criarUsuarioHtml() {
    const criarUsuario = `
    <section class="p-3">
    <h1 class="text-center text-success justify-content-center">Cadastre-se</h1>
    <div class="d-flex flex-column gap-3">
        <form id="form-user">
            <div class="d-flex flex-column gap-3">
                <div>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Nome" required>
                </div>

                <div>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" required>
                </div>

                <div>
                    <input type="password" class="form-control" name="password" id="password" placeholder="Senha" required>
                </div>

                <div>
                    <input type="password" class="form-control" name="confirmPassword"id="confirmPassword" placeholder="Confirmar senha" required>
                </div>

                <div class="d-flex gap-3">
                    <input name="cep" type="text" id="cep" class="form-control" placeholder="CEP" required />
                    <input name="number" type="number" id="number" class="form-control w-25" placeholder="Nº" required />
                </div>

                <div class="d-flex gap-3">
                    <input name="city" type="text" id="city" class="form-control" placeholder="Cidade" required />
                    <input name="uf" type="text" id="uf" class="form-control w-25" placeholder="UF" required />
                </div>

                <div >
                    <input name="neighborhood" type="text" id="neighborhood" class="form-control" placeholder="Bairro" required />
                </div>
                <div>
                    <input name="street" type="text" id="street" class="form-control" placeholder="Rua" required />
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
    submitBtn.addEventListener("click", async (event) => {
        event.preventDefault();

        const form = document.getElementById("form-user");
        const formData = new FormData(form);

        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        const cep = formData.get('cep');
        const number = formData.get('number');
        const city = formData.get('city');
        const state = formData.get('uf');
        const neighborhood = formData.get('neighborhood');
        const street = formData.get('street');


        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password,
            roles: [
                "CLIENT"
            ],
            addresses: [
                {
                    state: state,
                    city: city,
                    neighborhood: neighborhood,
                    number: number,
                    street: street,
                    cep: cep
                }
            ]
        }


        try {
            const result = await createUser(user);

            showModal('createUser', 'createUserMessage', 'Criar usuário', result)
            
            form.classList.add('fade-out');
            setTimeout(() => {
                form.reset();
                window.location.hash = `#home`;
            }, 500);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            showModal('createUser', 'createUserMessage', 'Criar usuário', error)
        };
    });
}
