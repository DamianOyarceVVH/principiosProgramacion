// Damián Oyarce - 13/11/2024
// Función para validar el celular
function validarCelular(celular) {
    // Selecciona todas las celdas de la tabla celular con el id 'tablaPersonas'
    const tablaCelular = Array.from(document.querySelectorAll('#tablaPersonas tbody tr td:nth-child(5)'))
    // Extrae el texto y elimina los espacios
    .map(td => td.textContent.trim());
    // // Verifica si el celular ya está en la tabla. Si ya existe, lo devuelve
    return !tablaCelular.includes(celular);
}

// Función para validar el correo
function validarCorreo(correo) {
    // Selecciona todas las celdas de la tabla correo con el id 'tablaPersonas'
    const tablaCorreo = Array.from(document.querySelectorAll('#tablaPersonas tbody tr td:nth-child(4)'))
    // Extrae el texto y elimina los espacios
    .map(td => td.textContent.trim());
    // // Verifica si el correo ya está en la tabla. Si ya existe, lo devuelve
    return !tablaCorreo.includes(correo);
}

// Función para validar el rut
function validarRUT(rut) {
    // Elimina espacios y convierte las letras a mayúsculas
    rut = rut.replace(/\s+/g, '').toUpperCase();
    // Verifica si el formato es correcto (7 u 8 números, el guión y el numero o letra verificador)
    const rutPattern = /^\d{7,8}-[0-9Kk]$/;
    // Si el formato no se cumple,lo devuelve
    if (!rutPattern.test(rut)) {
        return false;
        }

    // Divide el rut en la parte numérica y el dígito verificador
    const [numero, verificador] = rut.split('-');
    // Si el verificador no es válido (del 0-9 o la k mayúscula o minúscula)
    if (!verificador || !/^[0-9Kk]$/.test(verificador)) {
        return false;
        }
    // Validación del rut a traves de la suma ponderada para el algoritmo 'Módulo 11' (Código de Control)
    // Invierte y acumula los dígitos del rut ingresado
    const suma = [...numero].reverse().reduce((acc, digit, index) => {
        // Se multiplica cada dígito (->) por el multiplicador correspondiente
        const multiplicador = [2, 3, 4, 5, 6, 7, 2, 3][index];
        // Se devuelve la suma total ponderada
        return acc + (parseInt(digit) * multiplicador);
        }, 0);
        // Se calcula el módulo 11 y el dígito verificador
        // Se divide la suma por 11
        const modulo = suma % 11;
        // Se resta por 11
        const calculado = 11 - modulo;
        // Si el resultado es 11, se convierte en 0; si es 10, se convierte en K
        let digitoCalculado = calculado === 11 ? '0' : calculado === 10 ? 'K' : calculado.toString();
        // Devuelve el dígito calculado en maýusculas (k -> K)
        return verificador.toUpperCase() === digitoCalculado;
}

// Función para verificar la existencia de un rut en la tabla
function rutExisteEnTabla(rut) {
    // Selecciona todas las celdas de la tabla rut con el id 'tablaPersonas'
    const tablaRUT = Array.from(document.querySelectorAll('#tablaPersonas tbody tr td:nth-child(1)'))
    // Extrae el texto y elimina los espacios
    .map(td => td.textContent.trim());
    // Verifica si el rut ya está en la tabla. Si ya existe, lo devuelve
    return tablaRUT.includes(rut);
}