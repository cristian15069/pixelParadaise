// Variable para rastrear el estado del escaneo
let escaneoActivo = false;

// Función para iniciar o detener el escaneo
function toggleEscaneo() {
  if (escaneoActivo) {
    // Detener el escaneo
    Quagga.stop();
    escaneoActivo = false;
    // Ocultar el contenedor del escáner
    document.getElementById("scanner-container").style.display = "none";
  } else {
    // Iniciar el escaneo
    iniciarEscaneo();
    escaneoActivo = true;
    // Mostrar el contenedor del escáner
    document.getElementById("scanner-container").style.display = "block";
  }
}

// Función para iniciar el escaneo
function iniciarEscaneo() {
  // Configuración de QuaggaJS
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector("#scanner-container"),
      constraints: {
        facingMode: "environment", // Utiliza la cámara trasera del dispositivo si está disponible
        width: { min: 640 }, // Ancho mínimo de la cámara en píxeles
        height: { min: 480 }, // Altura mínima de la cámara en píxeles
        aspectRatio: { min: 1, max: 2 } // Proporción de aspecto deseada (opcional)
      }
    },
    decoder: {
      readers: ["ean_reader"] // Tipos de códigos de barras que se van a escanear (en este caso, EAN)
    }
  }, function(err) {
    if (err) {
      console.error("Error al inicializar Quagga: ", err);
      return;
    }
    console.log("Quagga inicializado correctamente.");
    Quagga.start(); // Comienza el escaneo
  });

  Quagga.onDetected(function(result) {
    console.log("Código de barras detectado: ", result.codeResult.code);

    // Añadir un espacio al final del código detectado
    var codigoConEspacio = result.codeResult.code + ' ';

    // Actualizar el valor del input con el código de barras detectado
    document.getElementById("buscaInput").value = codigoConEspacio;

    // Reproducir el sonido
    var audio = new Audio('img/beep.mp3');
    audio.play();

    // Esperar un breve retraso (por ejemplo, 1 segundo) antes de quitar el espacio
    setTimeout(function() {
      // Quitar el espacio del valor del input
      var codigoSinEspacio = document.getElementById("buscaInput").value.trim();
      document.getElementById("buscaInput").value = codigoSinEspacio;

      // Detener el escaneo después de un breve retraso (por ejemplo, 1 segundo)
      setTimeout(function() {
        Quagga.stop();
        escaneoActivo = false;
        // Ocultar el contenedor del escáner
        document.getElementById("scanner-container").style.display = "none";
      }, 1000); // Retraso de 1 segundo (1000 milisegundos)
    }, 1000); // Retraso de 1 segundo (1000 milisegundos)
  });
}
