document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const rut = document.getElementById('rut').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    // validar RUT
    if (!validarRUT(rut)){
    alert('EL RUT ingresado no es válido o tiene in formato incorrecto.');
    return;
    }
    

    // verificar si el rut ya existe en la tabla
    if (rutExistenEnTabla(rut)){
    alert('El RUT ingresado ya ha sido registrado.');
    return;
    }
    

    //validar el correo electrónico
    if (!validarcorreo(correo)){
    alert ('El correo electronico ya ha sido registrado.');
    return;
    }

    //validar el número de celular 
    if (!validarCelular(celular)){
    alert('El número de celular ya ha sido registrado.');
    return;
    
    


    // Crear una nueva fila en la tabla
    const tablaBody = document.getElementById('tablaPersonas').querySelector('tbody');
    const nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `
        <td>${rut}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${telefono}</td>
    `;

    tablaBody.appendChild(nuevaFila);

    // Limpiar los campos del formulario
    document.getElementById('form').reset();
});
// script_rut.js
function validarRUT(rut) {
    // Eliminar espacios y convertir a mayúsculas
    rut = rut.replace(/\s+/g, '').toUpperCase();

    //validar el formato del RUT: 8 dígitos seguidos de un guion un dígito verificador
    (número o K)
    const rutpattern = /^\d{7,8}-[0-9kk]$/;
    if (!rutpattern.test(rut)) {
        return false; // El formato no es válido
        }

    // separ el número del RUT y el díto verificador
    const [número, verificador] = rut.split('_');

    // validar el dígito verficador
    if (!verificador || !/^[0-9KK]$/.test(verficador)){
        return false; // El dígito verificador no es valido 


    // Calcular el digito verficador usando el algoritmo de modulo li
    const suma = [...numero]. .reverse().reduce((acc, digit, index =>{
    const multiplicador =[2,3,4,5,6,7,2,3][index];
    return acc + (parseInt(digit) * multiplicador);
    },0);

    const modulo = suma % 11;
    const calculado =11 - modulo;
    let digitoCalculado = calculado === 11 ? '0' : calculado === 10 ? 'k' : calculado.toString();
    

    //comparar el digito verificador ingresado con el calculo
    return verficador.toUpperCase () === digitoCalculado;
    }


    function rutExisteEnTabla(rut) {
    //verficador si el RUT ya existe en la tabla
    const tablaRUT = Array.from (document.querySelectorAll
    ('#tablapersonas tbody tr td:nth-child(4)'))
                            .map(td => td.textContent.trim () );
    return !tablacorreo.includes(correo);
}
//script_celulular.js
    Function validarCelular(celular) {
    const tablaCelular =Array.from(document.querySelectorAll('#tablapersonas tbody tr td:nth-child(5)'))
    .map(td => td.textContent.trim());
    return !tablaCelular.includes(celular);
