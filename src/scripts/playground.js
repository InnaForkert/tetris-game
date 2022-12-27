const playground = document.querySelector('#playground');
//створюємо поле, щоб монжа було окремо звертатись до кожного квадратика
function createField() {
  const divs = [];
  for (let i = 0; i < 3250; i += 1) {
    const smallDiv = document.createElement('div');
    smallDiv.classList.add('small-div');
    smallDiv.dataset.id = i;
    divs.push(smallDiv);
  }
  playground?.append(...divs);
  const smallDivs = document.querySelectorAll('.small-div');
  generateFieldies(smallDivs);
}

function generateFieldies(list) {
  list.forEach((div, idx) => {
    let rand = Math.random();
    if (rand > 0.6 && idx < 2500 && idx > 1500) {
      div.classList.add('chosen-div');
    }
  });
}

createField();
