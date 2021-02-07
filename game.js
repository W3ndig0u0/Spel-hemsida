import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from './snake.js' 

import{ update as updateFood, draw as drawFood, } from './food.js'

import { outsideGrid } from './grid.js'

export let score = 0;
let lastRenderTime = 0;
let gameOver = false;
const playground = document.getElementById('playground');

function main(currentTime){
  playerDied(); 
  
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime ) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed) return
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
  playground.innerHTML = '';
  drawSnake(playground);
  drawFood(playground);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function playerDied() {
  if (gameOver) {
    console.log('Game Over')
    if (confirm('Game Over :3')) {
      window.location = 'https://w3ndig0u0.github.io/Spel-hemsida/'
    }
    return
  }
}