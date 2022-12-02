playground.addEventListener('mouseover', selectChosen);
playground.addEventListener('mouseout', unselectChosen);
playground.addEventListener('click', startBallMovement);

const groundDivs = [];
const smallDivs = document.querySelectorAll('.small-div');
smallDivs.forEach(div => {
  if (div.dataset.id > 3199) {
    groundDivs.push(div);
  }
});
let gameInProgress = false;
let ballPosition;

function selectChosen(e) {
  const id = getCurrentPosition(e);
  const coord = id % 50;
  const rocket = [
    groundDivs[coord - 3],
    groundDivs[coord - 2],
    groundDivs[coord - 1],
    groundDivs[coord],
    groundDivs[coord + 1],
    groundDivs[coord + 2],
    groundDivs[coord + 3],
  ];
  rocket.forEach(div => {
    div.classList.add('chosen-div');
  });
  if (!gameInProgress) {
    paintBall(3150 + coord);
    ballPosition = 3150 + coord;
  }
}

function getCurrentPosition(e) {
  const id = e.target.dataset.id;
  return id;
}

function unselectChosen(e) {
  const id = getCurrentPosition(e);
  const coord = id % 50;
  const rocket = [
    groundDivs[coord - 3],
    groundDivs[coord - 2],
    groundDivs[coord - 1],
    groundDivs[coord],
    groundDivs[coord + 1],
    groundDivs[coord + 2],
    groundDivs[coord + 3],
  ];
  rocket.forEach(div => {
    div.classList.remove('chosen-div');
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
  const id = getCurrentPosition(e) % 50;
  playground.removeEventListener('click', startBallMovement);
  setInterval(() => defineNextPosition(), 100);
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
  ballPosition += step;
  paintBall(ballPosition);
}
