export const exportFunction = () => {};

const playground = document.getElementById('playground');

playground.addEventListener('mouseover', selectChosen);
playground.addEventListener('mouseout', unselectChosen);

function selectChosen(e) {
  e.target.classList.add('chosen-div');
}

function unselectChosen(e) {
  e.target.classList.remove('chosen-div');
}

(function createField() {
  const divs = [];
  for (let i = 0; i < 3250; i += 1) {
    const smallDiv = document.createElement('div');
    smallDiv.classList.add('small-div');
    divs.push(smallDiv);
  }
  playground?.append(...divs);
})();
