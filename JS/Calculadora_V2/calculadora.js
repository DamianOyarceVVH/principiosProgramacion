function appendToDisplay(value) { // Definición de la función para añadir valores al display
    const display = document.getElementById('display'); // Obtener el campo de visualización
    display.value += value; // Añadir el valor al contenido del display
}

function clearDisplay() { // Definición de la función para limpiar el display
    document.getElementById('display').value = ''; // Establecer el valor del display a vacío
}

function calculateResult() { // Definición de la función para calcular el resultado
    const display = document.getElementById('display'); // Obtener el campo de visualización
    try { // Iniciar bloque para intentar ejecutar el siguiente código
        display.value = eval(display.value); // Evaluar la expresión y mostrar el resultado
    } catch (error) { // Capturar errores que puedan ocurrir
        display.value = 'Error'; // Mostrar 'Error' en el display si hay un problema
    }
}

/* Escuchar los eventos del teclado */
document.addEventListener('keydown', (event) => { // Añadir un escuchador para eventos de teclado
    const key = event.key; // Obtener la tecla presionada
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) { // Comprobar si es un número o operador
        appendToDisplay(key); // Añadir el valor al display
    } else if (key === 'Enter') { // Comprobar si se presionó 'Enter'
        calculateResult(); // Calcular el resultado
    } else if (key === 'Escape') { // Comprobar si se presionó 'Escape'
        clearDisplay(); // Limpiar el display
    }
});
