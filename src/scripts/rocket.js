import { speedForm } from './form';
import { step } from './util/step';
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

const { rightTop, leftTop, leftBottom, rightBottom } = step;

let speed;
let gameInProgress = false;
let ballPosition;
let interval;
let rocket;
let score = 0;

//рух мишки у квадратик
function selectChosen(e) {
  const id = getCurrentPosition(e);
  const coord = id % 50;
  buildRocket(coord);
  rocket.forEach(div => {
    if (div) div.classList.add('chosen-div');
  });
  if (!gameInProgress) {
    ballPosition = 3150 + coord;
    paintBall(ballPosition);
  }
}

function buildRocket(coord) {
  rocket = [
    groundDivs[coord - 3],
    groundDivs[coord - 2],
    groundDivs[coord - 1],
    groundDivs[coord],
    groundDivs[coord + 1],
    groundDivs[coord + 2],
    groundDivs[coord + 3],
  ];
}

function getCurrentPosition(e) {
  const id = e.target.dataset.id;
  return id;
}

function unselectChosen(e) {
  const id = getCurrentPosition(e);
  const coord = id % 50;
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

function startBallMovement() {
  gameInProgress = true;
  speed = Number(speedForm);
  playground.removeEventListener('click', startBallMovement);
  interval = setInterval(() => defineNextPosition(), speed);
}

let currentStep = rightTop;

function defineNextPosition() {
  unpaintBall(ballPosition);
  hitFloor();
  hitCeil();
  hitFieldy(ballPosition);
  hitWall();
  ballPosition += currentStep;
  paintBall(ballPosition);
}

function hitFieldy(pos) {
  if (
    smallDivs[pos + currentStep].classList.contains('chosen-div') ||
    (smallDivs[ballPosition - 50].classList.contains('chosen-div') &&
      currentStep < 0) ||
    (smallDivs[ballPosition + 50].classList.contains('chosen-div') &&
      currentStep > 0)
  ) {
    score += 2;
    playerScore.textContent = `${Math.floor(score * calculatePropfit(speed))}`;
    switch (currentStep) {
      case rightTop:
        hitRT();
        break;
      case leftBottom:
        hitLB();
        break;
      case rightBottom:
        hitRB();
        break;
      case leftTop:
        hitLT();
        break;
    }
    hitFieldy(ballPosition);
  }
}
//currentStep = -49;right top

function hitRT() {
  if (smallDivs[ballPosition - 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition - 50);
    return setStep(rightBottom);
  }
  unpaintBall(ballPosition + currentStep);
  return setStep(leftBottom);
}
//currentStep = -51; left top

function hitLT() {
  if (smallDivs[ballPosition - 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition - 50);
    return setStep(leftBottom);
  }
  unpaintBall(ballPosition + currentStep);
  return setStep(rightBottom);
}
//currentStep = 49; left bottom

function hitLB() {
  if (smallDivs[ballPosition + 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition + 50);
    return setStep(leftTop);
  }
  unpaintBall(ballPosition + currentStep);
  return setStep(rightTop);
}

//currentStep = 51; rigth bottom

function hitRB() {
  if (smallDivs[ballPosition + 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition + 50);
    return setStep(rightTop);
  }
  unpaintBall(ballPosition + currentStep);
  return setStep(leftTop);
}

function hitWall() {
  if (ballPosition % 50 === 49 && ballPosition + currentStep !== 3249) {
    currentStep = currentStep > 0 ? leftBottom : leftTop;
  } else if (ballPosition % 50 === 0 && ballPosition + currentStep !== 3200) {
    currentStep = currentStep > 0 ? rightBottom : rightTop;
  }
}

function hitCeil() {
  if (ballPosition < 50) {
    if (currentStep === rightTop) {
      return setStep(rightBottom);
    }
    return setStep(leftBottom);
  }
}

function hitFloor() {
  if (ballPosition > 3150 && currentStep > 0) {
    if (
      smallDivs[ballPosition + currentStep].classList.contains('chosen-div')
    ) {
      if (
        smallDivs[ballPosition + currentStep].dataset.id ===
        rocket[0].dataset.id
      ) {
        return setStep(leftTop);
      }

      if (
        smallDivs[ballPosition + currentStep].dataset.id ===
        rocket[6].dataset.id
      ) {
        return setStep(rightTop);
      }

      if (currentStep === leftBottom) {
        return setStep(leftTop);
      }

      return setStep(rightTop);
    }
    gameOver();
  }
}

function gameOver() {
  ballPosition += currentStep;
  paintBall(ballPosition);
  setTimeout(() => {
    unpaintBall(ballPosition);
    alert('You lose!');
  }, 50);
  clearInterval(interval);
  playground.addEventListener('click', startBallMovement);
  gameInProgress = false;
  playerScore.innerHTML = '0';
}

function calculatePropfit(speed) {
  switch (speed) {
    case 30:
      return 3;
      break;
    case 40:
      return 2;
      break;
    case 50:
      return 1.5;
      break;
    case 60:
      return 0.5;
      break;
    default:
      return 1;
  }
}

function setStep(step) {
  currentStep = step;
  return true;
}

const playerScore = document.querySelector('.score');
playerScore.textContent = score;
