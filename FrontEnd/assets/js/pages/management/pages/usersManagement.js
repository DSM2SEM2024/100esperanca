import { getOrCreateMainElement } from "../../../components/main";
import { getAllUsersWithRoles } from "../../../services/usersService";
import { sidebar } from "../components/sidebar"
export async function gerenciarUsuariosHtml() {


    const listRoles = (roles) => {
        if (!(roles === undefined)) {
            return roles.map(role => `
                <ul class="list-group d-flex">
                    <li class="list-group-item p-0">${role.name}</li>
                </ul>
            `).join('');
        }
        
        return [];
    }

    const gerarTabelaUsuarios = async () => {
        const users = await getAllUsersWithRoles();
        console.log(users);
        
        const lineUser = users.map((user) => `
            <tr>
                <td class="p-0">
                <button class="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${user.id} 
                 </button> 
                    <ul class="dropdown-menu">
                        <div class="d-grid align-items-center container">
                        <div class="row">
                            <button class="col btn btn-primary shadow-lg " data-id="${user.id}" id="btn-update">
                                <i class="bi bi-arrow-clockwise"></i>
                            </button>
                            
                            <button class="col btn btn-danger shadow-lg " data-id="${user.id}" id="btn-excluir">
                                <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                        <div class="row">
                             <button class="col btn btn-secondary shadow-lg col" data-id="${user.id}" id="btn-excluir">
                             ${listRoles(user.roles)}
                            </button>
                        </div>
                        </div>
                    </ul>
                 </td>
                <td>${user.email}</td>
           
            
            </tr>
        `).join("");
        
        
        return lineUser;
    };

    const gerenciarUsuarios = `
    <section class="container-fluid m-0">
        <div id="tabela-container" class="text-center">
            <h2>Usuários</h2>
         
            <table class="table table-striped-columns table-responsive table-hover">
                <thead>
                    <tr class="p-0">
                        <th class="p-0">Id</th>
                        <th class="p-0">Email</th>

                    </tr>
                </thead>
                <tbody id="table-users" class="overflow-scroll">
                    
                </tbody>
            </table>
        </div>
    </section>
    
    
    `;


    const main = getOrCreateMainElement();
    main.innerHTML = gerenciarUsuarios;



    const tableBody = document.getElementById('table-users');
    tableBody.innerHTML = await gerarTabelaUsuarios();

}

