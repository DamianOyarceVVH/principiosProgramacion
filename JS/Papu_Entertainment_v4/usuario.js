document.getElementById('botonBienvenida').addEventListener('click', function() { // Se declara una funcion al boton con el id 'botonBienvenida'
	const nombre = document.getElementById('nombre').value; // La constante 'nombre' es igual al id #nombre
	const mensaje = document.getElementById('mensaje'); // La constante 'mensaje' es igual al id #mensaje
	if (nombre) { // Si se escribe en el input nombre...
		mensaje.textContent = `¡Bienvenido, ${nombre}!`; // Aparecera un mensaje de bienvenida con lo anterior escrito
	} else { //Si no es asi (se deja en blanco)...
		mensaje.textContent = 'Debe ingresar su nombre.'; // Aparecera un mensaje que pida ingresar el nombre
	}
});

document.getElementById('botonLimpiar').addEventListener('click', function() { // Se declara una funcion al boton con el id 'botonLimpiar'
	document.getElementById("nombre").value = ''; // El valor del input con el id nombre (texto escrito) queda en blanco, borrando la entrada
	document.getElementById("mensaje").textContent = ''; // El valor del mensaje con el id mensaje (texto de bienvenida/ingresar nombre) queda en blanco, borrando el mensaje
});