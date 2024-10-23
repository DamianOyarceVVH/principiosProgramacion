document.getElementById('add').onclick = function() {
    calcular('+');
};

document.getElementById('subtract').onclick = function() {
    calcular('-');
};

document.getElementById('split').onclick = function() {
    calcular('/');
};

document.getElementById('multiply').onclick = function() {
    calcular('*');
};

function calcular(operación) {
    var num1 =
    parseFloat(document.getElementById('num1').value);
    var num2 =
    parseFloat(document.getElementById('num2').value);
    var resultado;
    switch (operación) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
	case '/':
        resultado = num1 / num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
}

document.getElementById('result').innerText = resultado;
}

document.getElementById('botonLimpiar').addEventListener('click', function() {
	document.getElementById("num1").value = '';
	document.getElementById("num2").value = '';
	document.getElementById("result").textContent = '...'; 
});