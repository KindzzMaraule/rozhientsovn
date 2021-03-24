// Строки - "Вот так"
// Числа - 45
// Массивы - [12,"dfsd"]
// arr[0] - по порядковому номеру с ноля
// Функции - function funcName(arg){
// Какой-то код...
// }
// Объекты - {name:'Имя',age:214,sayHi:function(){},funcName:funcName}

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let currentNumber = 0;
let countTry = 0;
let hintElem = document.querySelector('#hint');
let resElem = document.querySelector('#res');
let buttonResElem = document.querySelector('#button-res');
let startElem = document.querySelector('#start');
let start2Elem = document.querySelector('#start-2');

function intial() {
  hintElem.classList.remove('none');
  resElem.classList.remove('none');
  buttonResElem.classList.remove('none');
  startElem.classList.add('none');
  start2Elem.classList.add('none');
}
function startGame() {
  intial();
  hintElem.innerHTML = 'Отгадайте число от 1 до 100';
  currentNumber = generateNumber(1, 100);
  // console.log(currentNumber);
  // читы;
}
function startGame2() {
  intial();
  hintElem.innerHTML = 'Отгадайте число от 1 до 100';
  let status = true;

  let text = 'Введите число от 1 до 100';
  while (status) {
    currentNumber = prompt(text);
    if (currentNumber <= 100 && currentNumber >= 1) {
      status = false;
    } else {
      text = 'Ты чо!😤😟👺👺👺👹👹';
    }
  }
}
function resetGame() {
  hintElem.classList.add('none');
  resElem.classList.add('none');
  buttonResElem.classList.add('none');
  startElem.classList.remove('none');
  start2Elem.classList.remove('none');
  resElem.value = '';
  countTry = 0;
}

function reply() {
  let number = resElem.value;
  countTry += 1;
  if (countTry > 7) {
    alert('Ты лох!🕎🔯🛐☦ Кол-во попыток: ' + countTry);
    resetGame();
    return;
  }
  if (number < currentNumber) {
    hintElem.innerHTML = 'Твое число меньше чем нужно';
  } else if (number > currentNumber) {
    hintElem.innerHTML = 'Твое число больше чем нужно';
  } else if (number == currentNumber) {
    alert('Ты победил!🕎🔯🛐☦ Кол-во попыток: ' + countTry);
    resetGame();
  }
}
buttonResElem.addEventListener('click', reply);
startElem.addEventListener('click', startGame);
start2Elem.addEventListener('click', startGame2);
