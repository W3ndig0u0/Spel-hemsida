let inputDirection = { x: 0, x: 0 }
let lastInputDirection = { x: 0, x: 0 }


window.addEventListener('keydown', e =>{
switch (e.key) {
  case 'ArrowUp':
    inputDirection = {y:0 , x:-1}
    break;
  case 'ArrowDown':
    inputDirection = {y:0 , x:1}
    break;
  case 'ArrowLeft':
    inputDirection = {y:-1 , x:0}
    break;
  case 'ArrowRight':
    inputDirection = {y:1 , x:0}
    break;
 }
})

export function getinputDirection() {
  return inputDirection
}