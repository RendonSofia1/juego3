// Realiza la solicitud AJAX utilizando fetch
fetch('tabla.php')
  .then(response => response.json())
  .then(data => {
    // Maneja la respuesta JSON aquí
    console.log(data);
    // Genera las filas de la tabla con los datos recibidos
    const tableBody = document.querySelector('#tabla-puntajes tbody');
    data.forEach((jugador, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${jugador.nombre}</td>
        <td>${jugador.puntaje}</td>
        <td>${jugador.fecha}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    // Maneja los errores aquí
    console.error(error);
  });
