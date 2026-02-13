// ================================================================
// REPRODUCTOR DE MÚSICA - Script
// ================================================================

// Obtener referencias a elementos HTML (por su id)
// document.getElementById() busca el elemento en el HTML con id coincidente
const audioPlayer = document.getElementById('audioPlayer');  // El elemento <audio>
const playBtn = document.getElementById('playBtn');           // Botón Play
const pauseBtn = document.getElementById('pauseBtn');         // Botón Pause
const stopBtn = document.getElementById('stopBtn');           // Botón Stop
const volumeControl = document.getElementById('volumeControl'); // Barra de volumen

// ================================================================
// EVENTO: Click en botón Play
// ================================================================
// addEventListener('click', function) ejecuta la función cuando se cliquea el botón
playBtn.addEventListener('click', function() {
  // audio.play() reproduce el archivo de audio
  audioPlayer.play();
});

// ================================================================
// EVENTO: Click en botón Pause
// ================================================================
pauseBtn.addEventListener('click', function() {
  // audio.pause() pausa la reproducción (sin volver al inicio)
  audioPlayer.pause();
});

// ================================================================
// EVENTO: Click en botón Stop
// ================================================================
stopBtn.addEventListener('click', function() {
  // Pausar el audio
  audioPlayer.pause();
  // currentTime = 0 vuelve el audio al inicio (tiempo 0)
  audioPlayer.currentTime = 0;
});

// ================================================================
// EVENTO: Cambiar volumen
// ================================================================
// Se ejecuta cada vez que el usuario mueve el slider de volumen
volumeControl.addEventListener('input', function(e) {
  // e.target.value es el valor actual del slider (0 a 100)
  // audio.volume espera valores de 0 a 1 (de silencio a máximo)
  // Por eso dividimos entre 100
  audioPlayer.volume = e.target.value / 100;
});

// ================================================================
// Configuración inicial
// ================================================================
// Establecer volumen inicial al 70% (como está en el HTML: value="70")
audioPlayer.volume = 0.7;
