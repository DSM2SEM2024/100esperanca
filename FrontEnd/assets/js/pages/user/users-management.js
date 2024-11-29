import { getOrCreateMainElement } from "../../components/main";

export function gerenciarUsuariosHtml() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const gerarTabelaUsuarios = () => {
        return usuarios
            .map(
                (usuario) => `
                <tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.email}</td>
                    <td>
                        <button class="btn btn-danger shadow-lg" data-id="${usuario.id}" id="btn-excluir">
                            <i class="bi bi-trash-fill text-white"></i>
                        </button>
                    </td>
                </tr>
            `
            )
            .join("");
    };

    const gerenciarUsuarios = `
    <section class="container-fluid flex-grow-1 p-4">
        <div id="tabela-container" class="text-center">
            <h2>Consulta de Usuários</h2>
            <table class="table table-bordered table-responsive">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody id="tabela-usuarios">
                    ${gerarTabelaUsuarios()}
                </tbody>
            </table>
        </div>
    </section>
    `;

    const main = getOrCreateMainElement();
    main.innerHTML = gerenciarUsuarios;

    // Excluir usuários
    document.querySelectorAll("#btn-excluir").forEach((botao) => {
        botao.addEventListener("click", () => {
            const idUsuario = botao.getAttribute("data-id");
            const novosUsuarios = usuarios.filter((user) => user.id !== parseInt(idUsuario));
            localStorage.setItem("usuarios", JSON.stringify(novosUsuarios));
            gerenciarUsuariosHtml(); // Atualiza a tabela
        });
    });
}
