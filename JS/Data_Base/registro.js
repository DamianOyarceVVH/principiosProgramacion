document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtención de los valores de los campos
    const rut = document.getElementById('rut').value;
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const celular = document.getElementById('celular').value;

    // Validación del RUT
    const rutRegex = /^[0-9]{8}-[0-9K]$/i;
    if (!rutRegex.test(rut)) {
        alert("El RUT debe tener el formato 8 dígitos seguidos de un guion y un dígito o la letra K.");
        return;
    }

    // Validación del número de celular
    const celularRegex = /^[0-9]+$/;
    if (!celularRegex.test(celular)) {
        alert("El número de celular solo debe contener dígitos.");
        return;
    }

    // Verificación de que el tbody está siendo seleccionado
    const tablaBody = document.getElementById('tablaPersonas').querySelector('tbody');
    if (!tablaBody) {
        console.error("No se pudo encontrar el tbody en la tabla.");
        return;
    }

    // Creación de la nueva fila
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td>${rut}</td>
        <td>${nombre}</td>
        <td>${apellidos}</td>
        <td>${correo}</td>
        <td>${celular}</td>
    `;

    // Agregar la nueva fila a la tabla
    tablaBody.appendChild(nuevaFila);

    // Mensaje en consola para confirmar que la fila fue agregada
    console.log("Fila agregada:", { rut, nombre, apellidos, correo, celular });

    // Limpiar los campos del formulario
    document.getElementById('form').reset();
});
