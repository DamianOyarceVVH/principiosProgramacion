const datos = { //coonstante llamada de datos
	nombre: "ElPapu Entertainment",
	direccion: "Los Desarrolladores #12821, Santiago",
	telefono: "+56 9 33537787",
	email: "soporte@elpapuentertainment.cl",
	website: "www.elpapuentertainment.cl"
};

const divDatos = document.getElementById('datos-empresa');

divDatos.innerHTML = '
	<h2>Datos de la empresa</h2>
	<p><strong>Nombre:</strong>${datos.nombre}</p>
	<p><strong>Dirección:</strong>${datos.direccion}</p>
	<p><strong>Teléfono:</strong>${datos.telefono}</p>
	<p><strong>Email:</strong><a href="mailto:${datos.email}">${datos.email}</a></p>
	<p><strong>Sitio Web:</strong><a href="https://github.com/dashboard" target="_blank">${datos.website}</a></p>';