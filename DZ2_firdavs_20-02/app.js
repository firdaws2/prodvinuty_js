
const box = document.querySelector('.box')

let positionX = 0;
let positionY = 0;

const move = () => {
  if (positionX <= 440 && positionY <= 0) {
    positionX += 16;
    box.style.left = `${positionX}px`;
    setTimeout(move, 200);
  } else if (positionX >= 440 && positionY <= 440) {
    positionY += 16;
    box.style.top = `${positionY}px`;
    setTimeout(move, 200);
  } else if (positionY === 448 && positionX !== 0) {
    positionX -= 16;
    box.style.left = `${positionX}px`;
    setTimeout(move, 200);
  } else {
    positionY -= 16;
    box.style.top = `${positionY}px`;
    setTimeout(move, 200)
  }
};

  move();

let interVall = 0;
function see (){
  interVall++;
  console.log(interVall + " сек.");
  if(interVall === 60){
    clearInterval(id);
  }
}
id = setInterval(see,1000);
