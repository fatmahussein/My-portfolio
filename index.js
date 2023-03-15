// -----------ADD FUNCTION TO HAMBURGER MENU BAR------------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// VALIDATE FORM
const form = document.querySelector('#register');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.style.visibility = 'visible';
    errorMessage.style.position = 'inherit';
    event.preventDefault();
  }
});

// storing data in local storage

const fullName = document.querySelector('#name');
const feedback = document.querySelector('#msg');

function visitorData() {
  const visitor = {
    Name: fullName.value,
    Email: email.value,
    Message: feedback.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}

[fullName, email, feedback].forEach((input) => input.addEventListener('focusout', visitorData));
// retrieve data from local storage
const visitorDataExist = JSON.parse(localStorage.getItem('visitor'));
if (visitorDataExist) {
  fullName.value = visitorDataExist.Name;
  email.value = visitorDataExist.Email;
  feedback.value = visitorDataExist.Message;
}