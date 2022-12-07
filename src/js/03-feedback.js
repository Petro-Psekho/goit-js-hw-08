import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

populatedForm();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const formName = e.target.name;
  const formValue = e.target.value;

  formData[formName] = formValue;
  // console.log(formData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populatedForm() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormData) {
    refs.email.value = savedFormData.email;
    refs.textarea.value = savedFormData.message;

    // console.log('Email:', savedFormData.email);
    // console.log('Message:', savedFormData.message);
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}
