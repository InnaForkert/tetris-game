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
let interval;

function selectChosen(e) {
  const id = getCurrentPosition(e);
  const coord = id % 50;
  const rocket = buildRocket(coord);
  rocket.forEach(div => {
    div.classList.add('chosen-div');
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
  playground.removeEventListener('click', startBallMovement);
  interval = setInterval(() => defineNextPosition(), 50);
}

let step = -49;
let correction = 2;

function defineNextPosition() {
  unpaintBall(ballPosition);
  hitWall();
  hitCeil();
  hitFloor();
  hitFieldy(ballPosition);
  ballPosition += step;
  paintBall(ballPosition);
}

function hitFieldy(pos) {
  if (smallDivs[pos + step].classList.contains('chosen-div')) {
    switch (step) {
      case -49:
        hitRT();
        break;
      case 49:
        hitLB();
        break;
      case 51:
        hitRB();
        break;
      case -51:
        hitLT();
        break;
    }
    // unpaintBall(ballPosition);
    // console.log('hit');
    // ballPosition -= step;
    // step = -step + correction;
    // window.requestAnimationFrame(() => hitFieldy(ballPosition));
  }
}
//step = -49;right top
//step = 51; rigth bottom

function hitRT() {
  if (smallDivs[ballPosition - 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition - 50);
    step = -step + correction;
  } else {
    unpaintBall(ballPosition - 49);
    step = -step;
    correction = -correction;
  }
}
//step = -51; left top

function hitLT() {
  if (smallDivs[ballPosition - 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition - 50);
    step = -step + correction;
  } else {
    unpaintBall(ballPosition - 51);
    step = -step;
    correction = -correction;
  }
}
//step = 49; left bottom

function hitLB() {
  if (smallDivs[ballPosition + 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition + 50);
    step = -step + correction;
  } else {
    unpaintBall(ballPosition + 49);
    step = -step;
    correction = -correction;
  }
}

function hitRB() {
  if (smallDivs[ballPosition + 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition + 50);
    step = -step + correction;
  } else {
    unpaintBall(ballPosition + 51);
    step = -step;
    correction = -correction;
  }
}

function hitWall() {
  if (ballPosition % 50 === 49) {
    step -= correction;
    correction = -2;
  } else if (ballPosition % 50 === 0) {
    step -= correction;
    correction = 2;
  }
}

function hitCeil() {
  if (ballPosition < 50) {
    step = -step + correction;
  }
}

function hitFloor() {
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
}
