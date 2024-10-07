document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

document.addEventListener('DOMContentLoaded', function () {
<<<<<<< HEAD
    const username = localStorage.getItem('username');
=======
    const username = localStorage.getItem('currentUsername');
>>>>>>> 64962b6 (semana 4)
    
    // Si no hay usuario autenticado, redirigir a login.html
    if (!username) {
        window.location.href = 'login.html';
        return;
    }
    
    //Mostrar nombre de usuario al inicial sesión
    const usernameDisplay = document.getElementById ('username-display');
    usernameDisplay.textContent = username;

    // Manejo del botón de cerrar sesión
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function () {
<<<<<<< HEAD
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    });
});
=======
      
        localStorage.removeItem('currentUsername');
        window.location.href = 'login.html';
    });
});
>>>>>>> 64962b6 (semana 4)
