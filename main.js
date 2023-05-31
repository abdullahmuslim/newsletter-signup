const main = document.querySelector("main");

const [signupForm, successMessage] = [...document.querySelectorAll("section")];

const form = document.querySelector("form");
form.addEventListener("submit", validate);

const input = document.querySelector("input");
input.addEventListener("input", closeError);

const button = document.getElementById("closeMessage");
button.addEventListener("click", closeSuccessMessage);

function validate(e){
  e.preventDefault();
  const el = e.currentTarget;
  const email = el.children[2].value;
  (email.match(/^.+@[a-zA-Z]+.*\.com$/))? openSuccessMessage() : showError();
}

function showError(){
  const error = document.querySelector(".error");
  error.textContent = "Valid email required";
}

function closeError(){
  const error = document.querySelector(".error");
  error.textContent = "";
}

function openSuccessMessage(){
  const insertedEmail = document.getElementById("insertedEmail");
  insertedEmail.textContent = input.value;
  signupForm.style.display = "none";
  successMessage.style.display = "flex";
  main.style.backgroundColor = "transparent";
  input.value = "";
}

function closeSuccessMessage(){
  signupForm.style.display = "flex";
  successMessage.style.display = "none";
  main.style.backgroundColor = "hsl(0, 0%, 100%)";
}