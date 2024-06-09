document.addEventListener('DOMContentLoaded', () => {

const continuarBoton = document.getElementById('boton');
const pantallaPrincipal = document.getElementById('main-screen');
const siguientePantalla = document.getElementById('main-screen2');
const textoPantalla = document.querySelector('#main-screen h1');
const auto = document.getElementById('car');
const mensaje = document.getElementById('message');
const scoreElement = document.getElementById('score');
const scoreLabel = document.getElementById('score-label');

scoreLabel.textContent = 'Score: ';

const gameWidth = window.innerWidth; // Ancho del área de juego
const gameHeight = window.innerHeight; // Alto del área de juego

let isPlaying = false
let score = 0; // Puntaje inicial
var car = document.getElementById("car"); // Obtener el elemento del auto
var carTop = 500; // Posición inicial del auto
let carLeft = 1230; // Posición horizontal actual del auto


const minX = 170; // Límite izquierdo
const maxX = gameWidth - car.offsetWidth - 150; // Límite derecho
const minY = 220; // Límite superior
const maxY = gameHeight - car.offsetHeight - 130; // Límite inferior


function updateScore() {
  score += 1; // Aumentar el puntaje en 1
  scoreElement.textContent = score; // Mostrar el puntaje en el elemento correspondiente
}

// Actualizar el puntaje cada 2 segundos
setInterval(()=> {
  if (isPlaying){
    score += 1;
    scoreElement.textContent= score;
    }   
}, 1500);

var audio = document.getElementById("myAudio");
var botonVolumen = document.getElementById("volumen");

    botonVolumen.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });


continuarBoton.addEventListener('click', () => {
  pantallaPrincipal.style.display='none';
  siguientePantalla.style.display='flex';
  auto.style.display='flex'
  mensaje.style.display='flex'
  scoreLabel.style.display='flex'
  scoreElement.style.display='flex'
  missile.style.display='flex'
  isPlaying=true
});

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp" || event.code === "KeyW") {
    if (carTop > minY) {
    carTop -= 13; // Mover el auto hacia arriba
    car.style.top = carTop + "px"; // Actualizar la posición del auto en la pantalla
    }
  } else if (event.code === "ArrowDown" || event.code === "KeyS") {
    if (carTop < maxY ) {
    carTop += 13; // Mover el auto hacia abajo
    car.style.top = carTop + "px"; // Actualizar la posición del auto en la pantalla
    }
  } else if (event.code === "ArrowLeft"|| event.code === "KeyA"){
    if (carLeft > minX) {
    carLeft -= 13; // Mover el auto hacia la izquierda
    car.style.left = carLeft + "px";
    }
  } else if (event.code === "ArrowRight"|| event.code === "KeyD"){
    if (carLeft < maxX) {
    carLeft += 13; // Mover el auto hacia la derecha
    car.style.left = carLeft + "px";
    }
  }
});

});








