// Damián Oyarce - 13/11/2024
// conexión.php
<?php
// Configuración de la base de datos
$servidor = "localhost";
$usuario = "root";
$password = "";
$bdatos = "registro";

// Establece la conexión
$conecta = mysqli_connect($servidor, $usuario, $password, $bdatos);

// Verifica la conexión
if (!$conecta) { // Cambiar a `mysqli_connect_error` para conexiones procedurales
    die("Error no se conectó con la base de datos: " . mysqli_connect_error());
}

?>
// Validación del formulario en el cliente
document.getElementById('formulario').addEventListener('submit', function (event) {
    const rut = document.getElementById('rut').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    // Verificar que todos los campos estén completos
    if (!rut || !nombre || !email) {
        alert("Por favor, completa todos los campos.");
        event.preventDefault(); // Evita el envío del formulario si faltan campos
    }
});

<?php
// Incluir el archivo de conexión
include 'conexion.php';

// Verificar si la solicitud es POST y que los campos estén definidos
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['rut'], $_POST['nombre'], $_POST['email'])) {
    // Sanitizar entradas para evitar inyección SQL
    $rut = htmlspecialchars($_POST['rut']);
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);

    // Preparar la consulta SQL
    $consulta = "INSERT INTO usuarios (rut, nombre, email) VALUES (?, ?, ?)";
    $stmt = $conecta->prepare($consulta);

    // Verificar que la preparación de la consulta sea exitosa
    if ($stmt) {
        $stmt->bind_param("sss", $rut, $nombre, $email);

        // Ejecutar la consulta y manejar errores
        if ($stmt->execute()) {
            echo "<script>alert('Usuario agregado con éxito');</script>";
        } else {
            echo "<script>alert('Error al agregar usuario');</script>";
        }

        // Cerrar la declaración
        $stmt->close();
    } else {
        echo "<script>alert('Error al preparar la consulta');</script>";
    }
}

// Consultar los usuarios existentes
$usuarios = [];
$resultado = $conecta->query("SELECT * FROM usuarios");

// Verificar si hay resultados
if ($resultado && $resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        $usuarios[] = $fila; // Agregar cada fila al arreglo de usuarios
    }
}

// Cerrar conexión
$conecta->close();
?>
