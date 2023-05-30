// Obtener el puntaje de la URL
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

// Mostrar el puntaje en el elemento correspondiente
const finalScoreElement = document.querySelector('#final_score');
finalScoreElement.textContent = 'Puntaje final: ' + score;

// Después de calcular el puntaje final
const final_score = score; // Asigna el puntaje final a la variable final_score

// Obtener el formulario y el botón de guardar
const form = document.querySelector('form');

// Agregar un evento de escucha al formulario cuando se envíe
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe por defecto

  // Obtener el nombre del formulario
  const nameInput = document.querySelector('input[name="name"]');
  const name = nameInput.value.trim();

  // Verificar si el nombre está vacío
  if (name === '') {
    alert('Por favor, ingresa un nombre válido');
    return;
  }

  // Crea una nueva solicitud AJAX
  const xhr = new XMLHttpRequest();

  // Define la URL del archivo PHP al que quieres enviar el puntaje
  const url = 'pp.php';

  // Define los datos que deseas enviar al servidor (en este caso, el puntaje final y el nombre)
  const data = `score=${final_score}&name=${name}`;

  // Abre una conexión POST hacia el archivo PHP
  xhr.open('POST', url, true);

  // Establece el encabezado de la solicitud para enviar datos en formato de formulario
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // Define una función de devolución de llamada para manejar la respuesta del servidor
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // La solicitud se completó y se recibió una respuesta del servidor
      console.log('Puntaje final enviado al archivo PHP');
      console.log('Respuesta del servidor:', xhr.responseText);

      // Deshabilitar el formulario si el registro fue exitoso
      form.reset();
      form.classList.add('disabled');
      form.querySelectorAll('input').forEach(input => input.disabled = true);
      alert('Registro exitoso');
    }
  };

  // Envía la solicitud al servidor con los datos
  xhr.send(data);
});
