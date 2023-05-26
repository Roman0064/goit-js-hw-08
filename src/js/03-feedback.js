import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));
window.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    const formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
});