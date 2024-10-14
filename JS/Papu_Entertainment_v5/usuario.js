document.getElementById('botonBienvenida').addEventListener('click', function() { // Se declara una funcion al boton con el id 'botonBienvenida'
	const nombre = document.getElementById('nombre').value; // La constante 'nombre' es igual al id #nombre
	const mensaje = document.getElementById('mensaje'); // La constante 'mensaje' es igual al id #mensaje
	const nombreUsuario = document.getElementById('nombreUsuario');
	if (nombre) { // Si se escribe en el input nombre...
		mensaje.textContent = `¡Bienvenido, ${nombre}!`; // Aparecera un mensaje de bienvenida con lo anterior escrito
		nombreUsuario.textContent = ' ' + nombre; // Muestra el nombre al lado del título
	} else { //Si no es asi (se deja en blanco)...
		mensaje.textContent = 'Debe ingresar su nombre.'; // Aparecera un mensaje que pida ingresar el nombre
		nombreUsuario.textContent = ''; // Limpia el nombre si no hay entrada
	}
});

document.getElementById('botonLimpiar').addEventListener('click', function() { // Se declara una funcion al boton con el id 'botonLimpiar'
	document.getElementById("nombre").value = ''; // Limpia el campo de texto
	document.getElementById("mensaje").textContent = ''; // Limpia el mensaje
	document.getElementById('nombreUsuario').textContent = ''; // Limpia el nombre en el título
});

document.getElementById('botonBienvenida').addEventListener('click', function() { // Se llama alboton por su id y se agrega un evento
    const texto = document.getElementById('nombre').value; // Se declara el valor de la constante del texto de salida
    const textoMayusculas = texto.toUpperCase(); // La constante 'textoMayusculas' ejecuta la funcion de reescribir en mayusculas el texto de entrada
    document.getElementById('nombreUsuario').textContent = textoMayusculas; // Al ejecutar la funcion, el contenido escrito esigual a la funcion declarada arriba (reescribir en mayúsculas)
});