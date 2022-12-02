playground.addEventListener('mouseover', selectChosen);
playground.addEventListener('mouseout', unselectChosen);

const groundDivs = [];
const smallDivs = document.querySelectorAll('.small-div');
smallDivs.forEach(div => {
  if (div.dataset.id > 3199) {
    groundDivs.push(div);
  }
});

function selectChosen(e) {
  const id = e.target.dataset.id;
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
  carryBall(coord);
}

function unselectChosen(e) {
  const id = e.target.dataset.id;
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
  uncarryBall(coord);
}

function carryBall(coord) {
  smallDivs[3150 + coord].classList.add('chosen-div');
}
function uncarryBall(coord) {
  smallDivs[3150 + coord].classList.remove('chosen-div');
}
