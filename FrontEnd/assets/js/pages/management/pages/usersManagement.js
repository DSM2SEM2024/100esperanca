import { getOrCreateMainElement } from "../../../components/main";
import { getAllUsersWithRoles } from "../../../services/usersService";
import { sidebar } from "../components/sidebar"
export async function gerenciarUsuariosHtml() {


    const listRoles = (roles) => {
        if (!(roles === undefined)) {
            return roles.map(role => `
                <ul class="list-group">
                    <li class="list-group-item">${role.name}</li>
                </ul>
            `).join('');
        }
        
        return [];
    }

    const gerarTabelaUsuarios = async () => {
        const users = await getAllUsersWithRoles();

        const lineUser = users.map((user) => `
            
        <tr class="dropdown">
               
                    <td>
                            ${user.id}
                            <button class="btn d-inline d-md-none" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                                <i class="bi bi-caret-down-fill"></i>
                            </button>
                            <div class="dropdown">
                        
                        <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                        <section class="d-flex justify-content-center">
                            <button class="btn btn-warning shadow-lg dropdown-item w-auto" data-id="${user.id}" id="btn-update">
                                <i class="bi bi-house-gear-fill"></i>
                            </button>

                            <button class="btn btn-primary shadow-lg" data-id="${user.id}" id="btn-update">
                                <i class="bi bi-arrow-clockwise"></i>
                            </button>

                            <button class="btn btn-danger shadow-lg  " data-id="${user.id}" id="btn-excluir">
                                <i class="bi bi-trash-fill"></i>
                            </button>
                        </section> 
                        </div>
                        </div>
                    </td>
                    
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td class="d-none d-md-table-cell">${listRoles(user.roles)}</td>

                    
                        <td class="d-none d-md-table-cell">
                            <button class="btn btn-warning shadow-lg" data-id="${user.id}" id="btn-update">
                                <i class="bi bi-house-gear-fill"></i>
                            </button>
                        </td>

                        <td class="d-none d-md-table-cell">
                        
                            <button class="btn btn-primary shadow-lg" data-id="${user.id}" id="btn-update">
                                <i class="bi bi-arrow-clockwise"></i>
                            </button>

                            <button class="btn btn-danger shadow-lg  " data-id="${user.id}" id="btn-excluir">
                                <i class="bi bi-trash-fill"></i>
                            </button>
                        </td>  
                    
            </tr>
            


        `).join("");

        return lineUser;
    };

    const gerenciarUsuarios = `
    <section class="container-fluid p-0">
        <div id="tabela-container" class="text-center">
            <h2>Usuários</h2>
            <table class="table table-striped-columns table-bordered table-responsive table-hover">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Email
                        </th>
                        <th class="d-none d-md-table-cell">
                            Tipo
                        </th>
                        <th class="d-none d-md-table-cell">
                            Endereços
                        </th>
                        <th class="d-none d-md-table-cell">
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody id="table-users">
                    
                </tbody>
            </table>
        </div>
    </section>
    
    `;
    sidebar();

    const main = getOrCreateMainElement();
    main.innerHTML = gerenciarUsuarios;

    sidebar()

    const tableBody = document.getElementById('table-users');
    tableBody.innerHTML = await gerarTabelaUsuarios();
    sidebar()
}

