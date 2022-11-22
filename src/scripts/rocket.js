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
  const coord = e.target.dataset.id % 50;
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
}

function unselectChosen(e) {
  const coord = e.target.dataset.id % 50;
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
}
