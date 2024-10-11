document.getElementById('convertirBtn').addEventListener('click', function() { // Se llama alboton por su id y se agrega un evento
    const texto = document.getElementById('textoInput').value; // Se declara el valor de la constante del texto de salida
    const textoMayusculas = texto.toUpperCase(); // La constante 'textoMayusculas' ejecuta la funcion de reescribir en mayusculas el texto de entrada
    document.getElementById('resultado').textContent = textoMayusculas; // Al ejecutar la funcion, el contenido escrito esigual a la funcion declarada arriba (reescribir en mayúsculas)
});