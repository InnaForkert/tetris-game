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
const speed = 50;
let gameInProgress = false;
let ballPosition;
let interval;
let rocket;



//рух мишки у квадратик
function selectChosen(e) {
  const id = getCurrentPosition(e);
  const coord = id % 50;
  buildRocket(coord);
  rocket.forEach(div => {
    if (div) div.classList.add('chosen-div');
  });
  if (!gameInProgress) {
    paintBall(3150 + coord);
    ballPosition = 3150 + coord;
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
  buildRocket(coord);
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
  playground.removeEventListener('click', startBallMovement);
  interval = setInterval(() => defineNextPosition(), speed);
}



let step = -49;

function defineNextPosition() {
  unpaintBall(ballPosition);
  hitFloor();
  hitCeil();
  hitFieldy(ballPosition);
  hitWall();
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
  }
}
//step = -49;right top

function hitRT() {
  if (smallDivs[ballPosition - 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition - 50);
    step = 51
  } else {
    unpaintBall(ballPosition - 49);
    step = -49;
  }
}
//step = -51; left top

function hitLT() {
  if (smallDivs[ballPosition - 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition - 50);
    step = 49
  } else {
    unpaintBall(ballPosition - 51);
    step = 51;
  }
}
//step = 49; left bottom

function hitLB() {
  if (smallDivs[ballPosition + 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition + 50);
    step = -51
    
  } else {
    unpaintBall(ballPosition + 49);
    step = -49;
  }
}

//step = 51; rigth bottom

function hitRB() {
  if (smallDivs[ballPosition + 50].classList.contains('chosen-div')) {
    unpaintBall(ballPosition + 50);
    step = -49;

  } else {
    unpaintBall(ballPosition + 51);
    step = -51;
  }
}

function hitWall() {
  if (ballPosition % 50 === 49) {
    step = step > 0 ? 49 : -51
  } else if (ballPosition % 50 === 0) {
    step = step > 0 ? 51 : -49
  }
}

function hitCeil() {
  if (ballPosition < 50) {
    step = step === -49 ? 51 : 49
  }
}

function hitFloor() {
  if (ballPosition > 3150 && step > 0) {
    if (smallDivs[ballPosition + step].classList.contains('chosen-div')) {
      if (smallDivs[ballPosition+step].dataset.id === rocket[0].dataset.id) {
      step = step === 51 ? -51 : -49
    } else if (smallDivs[ballPosition+step].dataset.id === rocket[6].dataset.id) {
      step = step === 49 ? -49 : -51
    } else {
      step = step === 49 ? -51 : -49
    } } else {
      paintBall(ballPosition + step);
      ballPosition+=step;
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
