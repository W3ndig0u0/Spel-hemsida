import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from './snake.js' 

import{ update as updateFood, draw as drawFood, score } from './food.js'

import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const playground = document.getElementById("playground");
var gameOverSound = document.getElementById("gameover-sound");

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
  // document.getElementById('score').innerHTML = "score";
  drawSnake(playground);
  drawFood(playground);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function playerDied() {
  if (gameOver) {
    gameOverSound.play();
    console.log("score");
    if (confirm('Game Over :3 (The GameOver sound has a bug, i know :(')) {
      // ToDO: reseta allt istället
      // window.location = 'https://w3ndig0u0.github.io/Spel-hemsida/'
      window.location.href = ''
    }
    return
  }
}