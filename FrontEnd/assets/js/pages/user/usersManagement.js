import { getOrCreateMainElement } from "../../components/main";
import { getAllUsersWithRoles } from "../../services/usersService";
import { telaAdminHtml } from "./userAdminScreen";

export async function gerenciarUsuariosHtml() {



    const listRoles = (roles) => {
        return roles.map(role => `
            <ul class="list-group">
                <li class="list-group-item">${role.name}</li>
            </ul>
        `).join('');
    }

    const gerarTabelaUsuarios = async () => {
        const users = await getAllUsersWithRoles();

        const lineUser = users.map((user) => `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${listRoles(user.roles)}</td>
                <td>
                    <button class="btn btn-warning shadow-lg" data-id="${user.id}" id="btn-update">
                        <i class="bi bi-house-gear-fill"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary shadow-lg" data-id="${user.id}" id="btn-update">
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                    <button class="btn btn-danger shadow-lg" data-id="${user.id}" id="btn-excluir">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
        `).join("");

        return lineUser;
    };

    const gerenciarUsuarios = `
    <section class="container-fluid">
        <div id="tabela-container" class="text-center">
            <h2>Usuários</h2>
            <table class="table table-striped-columns table-bordered table-responsive table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Tipo</th>
                        <th>Endereços</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody id="table-users">
                    
                </tbody>
            </table>
        </div>
    </section>
    `;


    const main = getOrCreateMainElement();
    main.innerHTML = gerenciarUsuarios;

    telaAdminHtml();

    const tableBody = document.getElementById('table-users');
    tableBody.innerHTML = await gerarTabelaUsuarios();

}
