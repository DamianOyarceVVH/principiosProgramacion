// Damián Oyarce - 13/11/2024
// Agrega una funcion al momento de agregar un registro haciendo click en el botón del formulario
document.getElementById('form').addEventListener('submit', function(event) { 
    event.preventDefault(); 

// Creación de las constantes que se vinculan con los campos a rellenar del formulario
    const rut = document.getElementById('rut').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const celular = document.getElementById('celular').value.trim();

// Valida y deniega un rut a través de la comprobación de un mal formato (está mal escrito o faltan caracteres)
    if (!validarRUT(rut)) { 
        alert('El RUT ingresado no es válido o tiene un formato incorrecto.');
        return;
    }

// Comprueba y deniega la entrada de un rut que ya existe en el registro
    if (rutExisteEnTabla(rut)) { 
        alert('El RUT ingresado ya ha sido registrado.');
        return;
    }

// Comprueba y deniega la entrada de un correo que ya existe en el registro
    if (!validarCorreo(correo)) {
        alert('El correo electrónico ya ha sido registrado.');
        return;
    }

// Comprueba y deniega la entrada de un número celular que ya existe en el registro
    if (!validarCelular(celular)) {
        alert('El número de celular ya ha sido registrado.');
        return;
    }

// Constantes donde se crean las tablas de los registros
    const tablaBody = document.getElementById('tablaPersonas').querySelector('tbody');
    const nuevaFila = document.createElement('tr');

// Orden de los archivos en la nueva fila
    nuevaFila.innerHTML = `
        <td>${rut}</td>
        <td>${nombre}</td>
        <td>${apellidos}</td>
        <td>${correo}</td>
        <td>${celular}</td>
    `;

// Agrega nuevos registros a la tabla
    tablaBody.appendChild(nuevaFila);

// Reseteo del formulario al agregar un registro
    document.getElementById('form').reset();
});