// Damián Oyarce - 13/11/2024
// Conexión.php
<?php
$servidor = "localhost"
$usuario = "root"
$password = ""
$bdatos = "registro";

// Establece la conexión
$conecta = mysqli_connect($servidor, $usuario, $password, $bdatos);

// Verifica la conexión
if ($conecta -> connect_error) {
	die("Error no se conectó con la base de datos: ". $conecta -> connect_error);
}
?>

document.getElementById('formulario').addEventListener('submit', 
function(event) {
	const rut = document.getElementById('rut').value.trim();
	const nombre = document.getElementById('nombre').value.trim();
	const email = document.getElementById('email').value.trim();
	
	if (!rut || !nombre || !email) {
		alert("Por favor, completa todos los campos.");
		event.preventDefault();
	}
});

<?php
include 'conexión.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['rut'], $_POST['nombre'], $_POST['email'])) {
	$rut = $_POST['rut'];
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	
	$consulta = "INSERT INTO usuarios (rut, nombre, email) VALUES (?, ?, ?)";
	$stmt = $conecta -> prepare($consulta);
	$stmt -> bind_param("sss", $rut, $nombre, $email);
	
	if ($stmt -> execute()) {
		echo "<script>alert('Usuario agregado con éxito');</script>";
	} else {
		echo "<script>alert('Error al agregar usuario');</script>";
	}
}
?>