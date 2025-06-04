// countdown.js
const díasElemento = document.getElementById('días');
const horasElemento = document.getElementById('horas');
const minutosElemento = document.getElementById('minutos');
const segundosElemento = document.getElementById('segundos');

// Fecha de la boda: 6 de diciembre 2025 a las 17:00
const fechaBoda = new Date('December 6, 2025 17:00:00').getTime();

function actualizarCountdown() {
  const ahora = new Date().getTime();
  const distancia = fechaBoda - ahora;

  if (distancia < 0) {
    clearInterval(intervalo);
    document.getElementById('countdown').innerHTML = '<p>¡Hoy es el gran día!</p>';
    return;
  }

  const _días = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const _horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const _minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const _segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  díasElemento.textContent = String(_días).padStart(2, '0');
  horasElemento.textContent = String(_horas).padStart(2, '0');
  minutosElemento.textContent = String(_minutos).padStart(2, '0');
  segundosElemento.textContent = String(_segundos).padStart(2, '0');
}

const intervalo = setInterval(actualizarCountdown, 1000);
actualizarCountdown();