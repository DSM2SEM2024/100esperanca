let tela_login_html = `
  <main class="d-flex justify-content-center align-items-center vh-100 bg-light" style="padding-top: 100px;">
        <section class="login-container container-sm bg-white p-4 rounded shadow-lg text-center w-25">
            <h2 class="text-success mb-4">Login</h2>
    
            <div class="input-group mb-3">
                <span class="input-group-text">
                    <i class="bi bi-person-fill" alt="user" width="20"></i> 
                </span>
                <input type="email" class="form-control" placeholder="Email" required>
            </div>
    
            <div class="input-group mb-3">
                <span class="input-group-text">
                    <i class="bi bi-lock-fill" alt="senha" width="20"></i>
                </span>
                <input type="password" class="form-control" placeholder="Senha" required>
            </div>
    
            <div class="d-flex justify-content-between mb-3">
                <a href="criar_usuario.html" class="text-decoration-underline text-success">Cadastre-se</a>
                <a href="#" class="text-decoration-underline text-success">Esqueceu a senha?</a>
            </div>
    
            <button class="login-btn btn btn-success w-100">Login</button>
        </section>
    </main>
`
let tela_login_element = document.createElement('main')
document.body.insertAdjacentHTML('beforeend', tela_login_html);

