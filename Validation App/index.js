const regName = /^[A-Z][a-z]/;
const regPhone = /^01[0-9]{9}$/;
const regEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
const regPass = /^(?=.*[A-Z])(?=.[a-z])(?=.*\d)[A-Za-z\d@$#!*?&]{8,16}$/;

const submit = document.querySelector(".submit-btn");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const phone = document.querySelector("#phone_number");
const userEmail = document.querySelector("#email");
const userPass = document.querySelector("#password");
const checkPass = document.querySelector("#check_password");
const form = document.querySelector(".form");

// const handleKeyDown = (e) => {
//   e.target.value;
// };

// submit.addEventListener("click", checkValidation);

form.addEventListener("submit", (e) => {
  firstNameCheck();
  lastNameCheck();
  phoneCheck();
  emailCheck();
  passCheck();
  confirmPass();
  e.preventDefault();
});

// function checkValidation() {

// }

function firstNameCheck() {
  const firstNameTxt = document.querySelector(".firstName-valid");
  if (regName.test(firstName.value)) {
    if (firstNameTxt.classList.contains("invalid")) {
      firstNameTxt.classList.remove("invalid");
    }
    firstNameTxt.classList.add("valid");
    firstNameTxt.innerHTML = "Valid";
  } else {
    if (firstNameTxt.classList.contains("valid")) {
      firstNameTxt.classList.remove("valid");
    }
    firstNameTxt.classList.add("invalid");
    firstNameTxt.innerHTML = "Name Invalid. Start with capital letter";
  }
}
function lastNameCheck() {
  const lastNameTxt = document.querySelector(".lastName-valid");
  if (regName.test(lastName.value)) {
    if (lastNameTxt.classList.contains("invalid")) {
      lastNameTxt.classList.remove("invalid");
    }
    lastNameTxt.classList.add("valid");
    lastNameTxt.innerHTML = "Valid";
  } else {
    if (lastNameTxt.classList.contains("valid")) {
      lastNameTxt.classList.remove("valid");
    }
    lastNameTxt.classList.add("invalid");
    lastNameTxt.innerHTML = "Name Invalid. Start with capital letter";
  }
}
function phoneCheck() {
  const phoneTxt = document.querySelector(".phone-valid");
  if (regPhone.test(phone.value)) {
    if (phoneTxt.classList.contains("invalid")) {
      phoneTxt.classList.remove("invalid");
    }
    phoneTxt.classList.add("valid");
    phoneTxt.innerHTML = "Valid";
  } else {
    if (phoneTxt.classList.contains("valid")) {
      phoneTxt.classList.remove("valid");
    }
    phoneTxt.classList.add("invalid");
    phoneTxt.innerHTML = "Invalid,start with 01 and have 11 digits";
  }
}
function emailCheck() {
  const emailTxt = document.querySelector(".email-valid");
  if (regEmail.test(userEmail.value)) {
    if (emailTxt.classList.contains("invalid")) {
      emailTxt.classList.remove("invalid");
    }
    emailTxt.classList.add("valid");
    emailTxt.innerHTML = "Valid Email";
  } else {
    if (emailTxt.classList.contains("valid")) {
      emailTxt.classList.remove("valid");
    }
    emailTxt.classList.add("invalid");
    emailTxt.innerHTML = "Invalid Email";
  }
}
function passCheck() {
  const passTxt = document.querySelector(".pass-valid");

  if (regPass.test(userPass.value)) {
    if (passTxt.classList.contains("invalid")) {
      passTxt.classList.remove("invalid");
    }
    passTxt.classList.add("valid");
    passTxt.innerHTML = "Valid Password";
  } else {
    if (passTxt.classList.contains("valid")) {
      passTxt.classList.remove("valid");
    }
    passTxt.classList.add("invalid");
    passTxt.innerHTML = "Invalid Password";
  }
}

function confirmPass() {
  let passMatchTxt = document.querySelector(".pass-match");

  if (userPass.value === checkPass.value) {
    if (passMatchTxt.classList.contains("invalid")) {
      passMatchTxt.classList.remove("invalid");
    }
    passMatchTxt.classList.add("valid");
    passMatchTxt.innerHTML = "Passwords match";
  } else {
    if (passMatchTxt.classList.contains("valid")) {
      passMatchTxt.classList.remove("valid");
    }
    passMatchTxt.classList.add("invalid");
    passMatchTxt.innerHTML = "Password does not match";
  }
}
