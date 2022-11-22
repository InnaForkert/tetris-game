const playground = document.querySelector('#playground');
//створюємо поле, щоб монжа було окремо звертатись до кожного квадратика
(function createField() {
  const divs = [];
  for (let i = 0; i < 3250; i += 1) {
    const smallDiv = document.createElement('div');
    smallDiv.classList.add('small-div');
    smallDiv.dataset.id = i;
    divs.push(smallDiv);
  }
  playground.append(...divs);
})();
