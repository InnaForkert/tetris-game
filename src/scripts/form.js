const inviteForm = document.querySelector('.form-js');
const playgroundDiv = document.querySelector('#playground');
const LOCALE_STORAGE_KEY = 'user-config';
const userData = {};
inviteForm.addEventListener('input', handleInput);
inviteForm.addEventListener('submit', onSubmitForm);

function initPage() {
  let memory = localStorage.getItem(LOCALE_STORAGE_KEY);

  if (memory) {
    memory = JSON.parse(memory);
    Object.entries(memory).forEach(([name, value]) => {
      inviteForm.elements[name].value = value;
    });
  }
}

initPage();

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
  console.log(userData);

  e.target.reset();
  localStorage.removeItem(LOCALE_STORAGE_KEY);
  inviteForm.classList.add('is-hidden');
  playgroundDiv.classList.remove('is-hidden');
}
