// Get the current year
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = 'Last Modified: ' + document.lastModified;

// Display phone number
const phoneSpan = document.getElementById('phone');
phoneSpan.textContent = 'Call US: +2349038519171';

// Display email address
const emailSpan = document.getElementById('email');
emailSpan.textContent = 'Email: mic23002@byui.edu';

// Validate password
var password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// Range bar
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}