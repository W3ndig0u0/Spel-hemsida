import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
export let score = 0;
const expansionRate = 1;
var soundEffect = document.getElementById("sound-effect");

export function update() {
  if (onSnake(food)) {
    expandSnake(expansionRate)
    soundEffect.play();
    food = getRandomFoodPosition()
    score += 100;
  }
}


export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}