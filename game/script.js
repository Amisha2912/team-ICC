let snakeX = 100;
let snakeY = 100;
let snakeSpeed = 5;
let snakeDirection = 'right';
let foodX = 200;
let foodY = 200;
let score = 0;

let snakeElements = [];
for (let i = 0; i < 3; i++) {
  let snakeElement = document.createElement('div');
  snakeElement.className = 'snake-element';
  snakeElement.style.top = `${snakeY}px`;
  snakeElement.style.left = `${snakeX - i * 10}px`;
  document.getElementById('snake').appendChild(snakeElement);
  snakeElements.push(snakeElement);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' && snakeDirection !== 'down') {
    snakeDirection = 'up';
  } else if (e.key === 'ArrowDown' && snakeDirection !== 'up') {
    snakeDirection = 'down';
  } else if (e.key === 'ArrowLeft' && snakeDirection !== 'right') {
    snakeDirection = 'left';
  } else if (e.key === 'ArrowRight' && snakeDirection !== 'left') {
    snakeDirection = 'right';
  }
});

function update() {
  // Update the snake position
  for (let i = snakeElements.length - 1; i > 0; i--) {
    snakeElements[i].style.top = snakeElements[i - 1].style.top;
    snakeElements[i].style.left = snakeElements[i - 1].style.left;
  }

  if (snakeDirection === 'right') {
    snakeElements[0].style.left = `${parseInt(snakeElements[0].style.left) + snakeSpeed}px`;
  } else if (snakeDirection === 'left') {
    snakeElements[0].style.left = `${parseInt(snakeElements[0].style.left) - snakeSpeed}px`;
  } else if (snakeDirection === 'up') {
    snakeElements[0].style.top = `${parseInt(snakeElements[0].style.top) - snakeSpeed}px`;
  } else if (snakeDirection === 'down') {
    snakeElements[0].
  