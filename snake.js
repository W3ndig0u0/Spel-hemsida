// Exportera så att de kan användas i game.js, men är mer organiserat
import { getinputDirection } from "./input.js";

// SNAKE_SPEED bestämmer render hastigheten, samt ormens hastighet
export const SNAKE_SPEED = 8;

// Hardkodade vart snake ska startas
const snakeBody = [
  {x: 13, y: 15},
]


export function update() {
  const inputDirection = getinputDirection();

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.x

}

export function draw(canvas) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumnStart = segment.y
    snakeElement.classList.add('snake');
    canvas.appendChild(snakeElement);

  })
}

