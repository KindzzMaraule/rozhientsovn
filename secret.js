let buttonElem = document.querySelector("#start-button"),
  startElem = document.querySelector("#start"),
  gameElem = document.querySelector("#game"),
  riddle1Elem = document.querySelector("#riddle-1"),
  riddle2Elem = document.querySelector("#riddle-2"),
  riddle3Elem = document.querySelector("#riddle-3"),
  riddle4Elem = document.querySelector("#riddle-4"),
  riddle5Elem = document.querySelector("#riddle-5"),
  endButtonElem = document.querySelector("#end-button");

function startGame() {
  startElem.classList.add("none");
  gameElem.classList.remove("none");
}
function endGame() {
  let points = 0;
  if (riddle1Elem.value == "Ёлка") {
    points += 1;
  }
  if (riddle2Elem.value == "Лампочка") {
    points += 1;
  }
  if (riddle3Elem.value == "Заяц") {
    points += 1;
  }
  if (riddle4Elem.value == "Лиса") {
    points += 1;
  }
  if (riddle5Elem.value == "Верблюд") {
    points += 1;
  }
  startElem.classList.remove("none");
  gameElem.classList.add("none");
  alert(`Вы ответили на ${points}`);
}

buttonElem.addEventListener("click", startGame);
endButtonElem.addEventListener("click", endGame);
