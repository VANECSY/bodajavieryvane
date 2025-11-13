const song = document.getElementById('song');
const contenido = document.getElementById('contenido');
const inicio = document.getElementById('inicio');

function startWithMusic() {
  inicio.style.display = 'none';
  contenido.style.display = 'block';
  song.play();
  lanzarFlores();
  iniciarPetalosAmarillos();
}

function startWithoutMusic() {
  inicio.style.display = 'none';
  contenido.style.display = 'block';
  lanzarFlores();
  iniciarPetalosAmarillos();
}

const bodaFecha = new Date("January 2, 2026 12:30:00").getTime();
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = bodaFecha - ahora;
  
  if (diferencia > 0) {
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    diasEl.textContent = dias;
    horasEl.textContent = horas;
    minutosEl.textContent = minutos;
    segundosEl.textContent = segundos;
  } else {
    diasEl.textContent = 0;
    horasEl.textContent = 0;
    minutosEl.textContent = 0;
    segundosEl.textContent = 0;
  }
}, 1000);

// Flores flotantes
function lanzarFlores() {
  for (let i = 0; i < 12; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = 15 + Math.random() * 10 + 's';
    flower.style.width = flower.style.height = (30 + Math.random() * 50) + 'px';
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 20000);
  }
  setTimeout(lanzarFlores, 6000);
}

// Pétalos amarillos que caen
function crearPetaloAmarillo() {
  const petalo = document.createElement('div');
  petalo.classList.add('petalo-amarillo');
  
  // Posición inicial aleatoria en la parte superior
  petalo.style.left = Math.random() * 100 + 'vw';
  petalo.style.top = '0px';
  
  // Tamaño aleatorio
  const size = 8 + Math.random() * 10;
  petalo.style.width = size + 'px';
  petalo.style.height = size + 'px';
  
  // Duración de la animación aleatoria
  const duracion = 4 + Math.random() * 3;
  petalo.style.animationDuration = duracion + 's';
  
  // Agregar al body
  document.body.appendChild(petalo);
  
  // Iniciar animación
  setTimeout(() => {
    petalo.classList.add('caer');
  }, 10);
  
  // Remover después de la animación
  setTimeout(() => {
    if (petalo.parentNode) {
      petalo.remove();
    }
  }, duracion * 1000 + 100);
}

// Lanzar pétalos amarillos continuamente
function lanzarPetalosAmarillos() {
  crearPetaloAmarillo();
  // Crear un nuevo pétalo cada 200-400ms
  setTimeout(lanzarPetalosAmarillos, 200 + Math.random() * 200);
}

// Iniciar pétalos amarillos cuando se carga el contenido
function iniciarPetalosAmarillos() {
  setTimeout(() => {
    lanzarPetalosAmarillos();
  }, 1000);
}

// Animación al hacer scroll para el contador
const contadorWrapper = document.querySelector('.contador-wrapper');
const girasolContador = document.querySelector('.girasol-contador-izq');
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (girasolContador) {
        girasolContador.classList.add('visible');
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

if (contadorWrapper) {
  observer.observe(contadorWrapper);
}

// Animación al hacer scroll para la sección "Se acabó la espera"
const seccionEspera = document.getElementById('seccion-espera');
const girasolSeccionEspera = document.querySelector('.girasol-seccion-espera');
const observerEspera = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (girasolSeccionEspera) {
        girasolSeccionEspera.classList.add('visible');
      }
      observerEspera.unobserve(entry.target);
    }
  });
}, observerOptions);

if (seccionEspera) {
  observerEspera.observe(seccionEspera);
}

// Animación al hacer scroll para la sección "Nuestra Historia"
const seccionHistoria = document.getElementById('seccion-historia');
const girasolHistoriaDerecho = document.querySelector('.girasol-historia-derecho');
const observerHistoria = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (girasolHistoriaDerecho) {
        girasolHistoriaDerecho.classList.add('visible');
      }
      observerHistoria.unobserve(entry.target);
    }
  });
}, observerOptions);

if (seccionHistoria) {
  observerHistoria.observe(seccionHistoria);
}

// Función para mostrar el alias de regalo
function mostrarAlias() {
  const aliasDiv = document.getElementById('alias-regalo');
  if (aliasDiv) {
    aliasDiv.style.display = aliasDiv.style.display === 'none' ? 'block' : 'none';
  }
}