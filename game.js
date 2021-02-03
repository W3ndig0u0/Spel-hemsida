let lastRenderTime = 0;
import { SNAKE_SPEED } from './snake.js' 

function main(currentTime){

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime ) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  console.log('Render')
  lastRenderTime = currentTime
}
window.requestAnimationFrame(main);


function update() {
  
}

function draw() {
  
}

