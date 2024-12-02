// Damián Oyarce - 13/11/2024

// Validación del formulario en el cliente
document.getElementById('formulario').addEventListener('submit', function (event) {
    const rut = document.getElementById('rut').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    // Verificar que todos los campos estén completos
    if (!rut || !nombre || !email) {
        alert("Por favor, completa todos los campos.");
        event.preventDefault(); // Evita el envío del formulario si faltan campos
    }
});