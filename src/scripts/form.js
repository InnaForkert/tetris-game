const inviteForm = document.querySelector('.form-js');
const playgroundDiv = document.querySelector('#playground');
const playerDiv = document.querySelector('.player');
const playerGreet = document.querySelector('.player-gretting');
const playerSpeed = document.querySelector('.speed');
const LOCALE_STORAGE_KEY = 'user-config';
let userData = {};
export let speedForm;
inviteForm.addEventListener('input', handleInput);
inviteForm.addEventListener('submit', onSubmitForm);

(function initPage() {
  let memory = localStorage.getItem(LOCALE_STORAGE_KEY);

  if (memory) {
    memory = JSON.parse(memory);
    Object.entries(memory).forEach(([name, value]) => {
      inviteForm.elements[name].value = value;
    });
  }
})();

function handleInput(event) {
  let savedData = localStorage.getItem(LOCALE_STORAGE_KEY);
  savedData = savedData ? JSON.parse(savedData) : {};

  savedData[event.target.name] = event.target.value;

  localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(savedData));
}
function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(inviteForm);
  formData.forEach((value, name) => {
    userData[name] = value;
  });

  e.target.reset();
  localStorage.removeItem(LOCALE_STORAGE_KEY);
  inviteForm.classList.add('is-hidden');
  playerDiv.classList.remove('is-hidden');
  playgroundDiv.classList.remove('is-hidden');
  playerGreet.innerHTML = `Hello, ${userData.name || 'Player'}! Have fun.`;
  playerSpeed.innerHTML = speedToText(Number(userData.speed));
  speedForm = userData.speed;
}

function speedToText(speed) {
  switch (speed) {
    case 30:
      return 'Super fast';
      break;
    case 40:
      return 'Fast';
      break;
    case 50:
      return 'Normal';
      break;
    case 60:
      return 'Slow';
      break;
    default:
      return 1;
  }
}
