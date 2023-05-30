<?php
// Configuración de la conexión a la base de datos
$host = 'localhost:3307';
$db = 'preguntondb';
$user = ######;
$password = ######;

try {
  // Crear una nueva conexión PDO
  $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $password);

  // Realizar la consulta a la base de datos para obtener los 10 registros con el puntaje más alto
  $query = $pdo->query('SELECT * FROM jugadores ORDER BY puntaje DESC LIMIT 10');
  $jugadores = $query->fetchAll(PDO::FETCH_ASSOC);

  // Generar la respuesta en formato JSON
  header('Content-Type: application/json');

  // Generar el contador
  $contador = 1;

  // Recorrer los registros y asignar valores al campo "#"
  foreach ($jugadores as &$jugador) {
    $jugador['#'] = $contador;
    $contador++;
  }

  echo json_encode($jugadores);
} catch (PDOException $e) {
  // Manejar los errores de conexión a la base de datos
  echo 'Error al conectar con la base de datos: ' . $e->getMessage();
}
?>
