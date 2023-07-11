const firstnameInput = document.querySelector("#first-name-input");
const lastnameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstnameInput.onkeyup = () => {
  firstnameInput.classList.remove("is-invalid");
  firstnameInput.classList.remove("is-valid");
};

lastnameInput.onkeyup = () => {
  lastnameInput.classList.remove("is-invalid");
  lastnameInput.classList.remove("is-valid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");
}

submitBtn.onclick = () => {
  let isFirstNameOk = false;

  if (firstnameInput.value === "") {
    firstnameInput.classList.add("is-invalid");
  } else {
    firstnameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (isFirstNameOk) {
    alert("Registered successfully");
  }

  let isLastNameok = false;

  if (lastnameInput.value === "") {
    lastnameInput.classList.add("is-invalid");
  } else {
    lastnameInput.classList.add("is-valid");
    isLastNameok = true;
  }

  if (isLastNameok) {
    alert("Registered successfully");
  }

  let isEmailok = false;

  if (validateEmail(emailInput.value) && emailInput.value === "") {
    emailInput.classList.add("is-valid");
    isEmailok = true;
  } else {
    emailInput.classList.add("is-invalid");
  }

  if(isEmailok){
    alert("Registered successfully");
  }

  let isPasswordok = false;

  if(passwordInput.value === "" , passwordInput.value.length < 6){
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordok = true;
  }

  if (isPasswordok) {
    alert("Registered successfully");
  }
};
