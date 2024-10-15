let tela_login_html = `
  <main class="d-flex p-1  vh-100 align-center justify-content-center align-items-center">

        <section class="container-sm login-container p-4 rounded shadow-lg ">
            <h2 class="text-success mb-4">Login</h2>
    
            <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" required>
                <span class="input-group-text">
                    <i class="bi bi-person-fill" alt="user" width="20"></i> 
                </span>
            </div>
    
            <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Senha" required>
                <span class="input-group-text">
                    <i class="bi bi-lock-fill" alt="senha" width="20"></i>
                </span>
            </div>
    
            <div class="d-flex justify-content-between mb-3 style="hover: #147045">
                <a href="criar_usuario.html" class="text-decoration-underline text-success text-hover-success">Cadastre-se</a>
                <a href="#" class="text-decoration-underline text-success text-hover-success">Esqueceu a senha?</a>
            </div>
    
            <button class="login-btn btn btn-success w-100">Login</button>
        </section>
    </main>
`
let tela_login_element = document.createElement('main')
document.body.insertAdjacentHTML('beforeend', tela_login_html);

const loginContainer = document.querySelector('.login-container');
if (loginContainer) {
    loginContainer.style.setProperty('background-color', '#5ABC49', 'important');
}

