<?php
// Obtener los valores del nombre y puntaje enviados mediante POST
$name = $_POST['name'];
$score = $_POST['score'];

// valores de conexion a la base de datos
$host = 'localhost:3307';
$dbname = 'preguntondb';
$username = #####;
$password = ######;

try {
  // Crear una conexión PDO a la base de datos
  $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Preparar la consulta SQL para insertar los datos
  $stmt = $pdo->prepare("INSERT INTO jugadores (nombre, puntaje) VALUES (?, ?)");

  // Ejecutar la consulta con los valores proporcionados
  $stmt->execute([$name, $score]);

 // Retornar una respuesta al cliente en formato JSON
 $response = ['success' => true, 'message' => 'Puntaje y nombre guardados correctamente'];
 echo json_encode($response);


} catch (PDOException $e) {
 // Manejar cualquier error de la base de datos
 $response = ['success' => false, 'message' => 'Error al guardar el puntaje y nombre en la base de datos'];
 echo json_encode($response);
}
