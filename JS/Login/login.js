document.getElementById('loginForm').addEventListener('submit', 
    function(event) {
        event.preventDefault(); // Evita el envio del formulario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username && password) {
            document.getElementById('message').innerText = `¡Bienvenido, ${username}!`;
            window.location.href = "https://www.google.cl/"; // Corregir la URL
        } else {
            // Si no se ingresaron datos, mostrar un mensaje de error
            document.getElementById('message').innerText = 'Por favor ingresa un nombre de usuario y contraseña.';
            // Limpiar el campo de la contraseña por seguridad
            document.getElementById('password').value = '';
        }
    });


