// script.js
const lightsContainer = document.querySelector('.lights');

// Crear las luces
for (let i = 0; i < 20; i++) {
  const light = document.createElement('div');
  light.style.backgroundColor = getRandomColor();
  lightsContainer.appendChild(light);
}

// Generar un color aleatorio
function getRandomColor() {
  const colors = ['red', 'yellow', 'blue', 'white', 'pink'];
  return colors[Math.floor(Math.random() * colors.length)];
}
