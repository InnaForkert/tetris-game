//додаємо слухач подій на поле на рух курсора в та з поля
playground.addEventListener('mouseover', selectChosen);
playground.addEventListener('mouseout', unselectChosen);

//створюємо пустий масив для нижнього ряду квадратиків, де буде рухатись ракетка
const groundDivs = [];
//обираємо усі квадратики та додаємо у порожній масив нижній ряд
const smallDivs = document.querySelectorAll('.small-div');
smallDivs.forEach(div => {
  if (div.dataset.id > 3199) {
    groundDivs.push(div);
  }
});

//рух мишки у квадратик
function selectChosen(e) {
  //відстежуємо, у якому стовпчику рухається курсор
  const coord = e.target.dataset.id % 50;
  //створюємо масив з відповідного нижнього квадратика та по три квадратика вліво та вправо - майбутня ракетка
  const rocket = [
    groundDivs[coord - 3],
    groundDivs[coord - 2],
    groundDivs[coord - 1],
    groundDivs[coord],
    groundDivs[coord + 1],
    groundDivs[coord + 2],
    groundDivs[coord + 3],
  ];
  //замальовуємо ракетку в чорний колір
  rocket.forEach(div => {
    if (div) div.classList.add('chosen-div');
  });
}

//те саме, тільки при руху курсора з квадратика ми прибираємо колір
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
    if (div) div.classList.remove('chosen-div');
  });
}
