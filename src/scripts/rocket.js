//додаємо слухач подій на поле на рух курсора в та з поля
playground.addEventListener('mouseover', selectChosen);
playground.addEventListener('mouseout', unselectChosen);
playground.addEventListener('click', startBallMovement);

//створюємо пустий масив для нижнього ряду квадратиків, де буде рухатись ракетка
const groundDivs = [];
//обираємо усі квадратики та додаємо у порожній масив нижній ряд
const smallDivs = document.querySelectorAll('.small-div');
smallDivs.forEach(div => {
  if (div.dataset.id > 3199) {
    groundDivs.push(div);
  }
});
let gameInProgress = false;
let ballPosition;
let interval;

//рух мишки у квадратик
function selectChosen(e) {
  const id = getCurrentPosition(e);
  const coord = id % 50;
  const rocket = buildRocket(coord);
  rocket.forEach(div => {
    if (div) div.classList.add('chosen-div');
  });
  if (!gameInProgress) {
    paintBall(3150 + coord);
    ballPosition = 3150 + coord;
  }
}

function buildRocket(coord) {
  const rocket = [
    groundDivs[coord - 3],
    groundDivs[coord - 2],
    groundDivs[coord - 1],
    groundDivs[coord],
    groundDivs[coord + 1],
    groundDivs[coord + 2],
    groundDivs[coord + 3],
  ];
  return rocket;
}

function getCurrentPosition(e) {
  const id = e.target.dataset.id;
  return id;
}

function unselectChosen(e) {
  const id = getCurrentPosition(e);
  const coord = id % 50;
  const rocket = buildRocket(coord);
  rocket.forEach(div => {
    if (div) div.classList.remove('chosen-div');
  });
  unpaintBall(3150 + coord);
}

function paintBall(coord) {
  smallDivs[coord].classList.add('chosen-div');
}
function unpaintBall(coord) {
  smallDivs[coord].classList.remove('chosen-div');
}

function startBallMovement(e) {
  gameInProgress = true;
  playground.removeEventListener('click', startBallMovement);
  interval = setInterval(() => defineNextPosition(), 40);
}

let step = -49;
let correction = 2;
function defineNextPosition() {
  unpaintBall(ballPosition);
  if (ballPosition % 50 === 49) {
    step -= correction;
    correction = -2;
  } else if (ballPosition % 50 === 0) {
    step -= correction;
    correction = 2;
  }
  if (ballPosition < 50) {
    step = -step + correction;
  }
  if (ballPosition > 3150 && step > 0) {
    if (smallDivs[ballPosition + 50].classList.contains('chosen-div')) {
      step = -step + correction;
    } else {
      paintBall(ballPosition + step);
      setTimeout(() => {
        unpaintBall(ballPosition);
        alert('You lose!');
      }, 50);
      clearInterval(interval);
      playground.addEventListener('click', startBallMovement);
      gameInProgress = false;
    }
  }
  ballPosition += step;
  paintBall(ballPosition);
}
