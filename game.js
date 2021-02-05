import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js' 

import{ update as updateFood, draw as drawFood} from './food.js'

import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const canvas = document.getElementById('canvas');

function main(currentTime){

  if (gameOver) {
    console.log('Game Over')
    if (confirm('Game Over.')) {
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime ) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  lastRenderTime = currentTime

  update();
  draw(); 
}
window.requestAnimationFrame(main);


function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  canvas.innerHTML = '';
  drawSnake(canvas);
  drawFood(canvas);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


