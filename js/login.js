document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    // Manejo del formulario de inicio de sesión
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
<<<<<<< HEAD
        const usernameInput = document.getElementById('username').value;
        localStorage.setItem('username', usernameInput);
=======

        const usernameInput = document.getElementById('currentUsername').value;
        localStorage.setItem('currentUsername', usernameInput);

>>>>>>> 64962b6 (semana 4)
        window.location.href = 'index.html';
    });

    // Redirigir al usuario si ya está autenticado
<<<<<<< HEAD
    const username = localStorage.getItem('username');
=======

    const username = localStorage.getItem('currentUsername');

>>>>>>> 64962b6 (semana 4)
    if (username) {
        window.location.href = 'index.html';
    }
});
