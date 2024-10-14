const datos = { //constante llamada de datos
	nombre: "Papu Entertainment",
	direccion: "La Grasa #2010, Santiago",
	telefono: "+56 9 3353 7787",
	email: "soporte@papuentertainment.cl",
	website: "www.papuentertainment.cl",
};

const divDatos = document.getElementById('datos-empresa');
divDatos.innerHTML = `
	<h2>Datos de la empresa</h2>
	<p><strong>Nombre:</strong> ${datos.nombre}</p>
	<p><strong>Dirección:</strong> ${datos.direccion}</p>
	<p><strong>Teléfono:</strong> ${datos.telefono}</p>

	<p><strong>Email:</strong> <a href="mailto:${datos.email}">${datos.email}</a></p>

	<p><strong>Sitio Web:</strong> <a href="https://liceovvh.cl/" target="_blank"> ${datos.website}</a></p>
	<p><button id="ocultar">Ocultar datos</button></p>`

const btnMostrar = document.getElementById ('mostrar'); // Código del boton que mostrará los datos -->

btnMostrar.addEventListener('click',() => {  // Evento en el que aparecerán los datos
	divDatos.style.display = 'block';
})

const btnOcultar = document.getElementById ('ocultar');

btnOcultar.addEventListener('click',() => {  // Evento en el que aparecerán los datos
	divDatos.style.display = 'none';
})