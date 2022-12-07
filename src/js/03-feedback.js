import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  submitBtn: document.querySelector('.feedback-form'),
};

populateTextarea();

refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextariaInput, 500));
refs.submitBtn.addEventListener('submit', onFormSubmit);

function onEmailInput(e) {
  const email = e.target.value;

  localStorage.setItem(STORAGE_KEY, email);
}

function onTextariaInput(e) {
  const message = e.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
