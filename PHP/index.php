<!-- Damián Oyarce - 13/11/2024 -->
<?php
$servidor = "localhost"; //127.0.0.1
$usuario = "root"; //root@localhost
$password = "";
$bdatos = "registro";

// Establecer la conexión
$conecta = mysqli_connect($servidor, $usuario, $password, $bdatos);

// Verificar la conexión
if ($conecta->connect_error) {
    die("Error no se conectó con la base de datos: " . $conecta->connect_error);
}
?>
<?php
include 'conexion.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['rut'],$_POST['nombre'], $_POST['email'])) {
    $rut = $_POST['rut'];
	$nombre = $_POST['nombre'];
    $email = $_POST['email'];

    $consulta = "INSERT INTO usuarios (rut, nombre, email) VALUES (?, ?, ?)";
    $stmt = $conecta->prepare($consulta);
    $stmt->bind_param("sss", $rut, $nombre, $email);

    if ($stmt->execute()) {
        echo "<script>alert('Usuario agregado con éxito');</script>";
    } else {
        echo "<script>alert('Error al agregar usuario');</script>";
    }
}

$usuarios = [];
$resultado = $conecta->query("SELECT * FROM usuarios");

if ($resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        $usuarios[] = $fila;
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="shortcut icon" type="image/x-icon" href="img/logo.ico">
    <link rel="stylesheet" href="styles.css">
    <script defer src="conexion.js"></script>
</head>
<body>
	<main>
		<section id="registro">
			<h1>Registro de Usuarios</h1>
			<!-- Formulario para agregar usuario -->
			<form method="POST" id="formulario">
				<div class="form-group">
					<label for="rut">Rut:</label>
					<input type="text" id="rut" name="rut" required>
				</div>
				<div class="form-group">
					<label for="nombre">Nombre:</label>
					<input type="text" id="nombre" name="nombre" required>
				</div>
				<div class="form-group">
					<label for="email">Email:</label>
					<input type="email" id="email" name="email" required>
				</div>
				<button type="submit">+</button>
			</form>
		</section>
		<section id="lista">
			<h2>Lista de Usuarios</h2>
			<table>
				<thead>
					<tr>
						<th>Rut</th>
						<th>Nombre</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach ($usuarios as $usuario): ?>
					<tr>
						<td><?php echo $usuario['rut']; ?></td>
						<td><?php echo $usuario['nombre']; ?></td>
						<td><?php echo $usuario['email']; ?></td>
					</tr>
					<?php endforeach; ?>
				</tbody>
			</table>
		</section>
	</main>
</body>
</html>
