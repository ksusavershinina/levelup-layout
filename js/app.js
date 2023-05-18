const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_in_btn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");

sign_in_btn.addEventListener("click", () => {
  container.classList.add("sign-in-mode");
});

sign_up_btn.addEventListener("click", () => {
  container.classList.remove("sign-in-mode");
});

sign_in_btn2.addEventListener("click", () => {
  container.classList.add("sign-in-mode2");
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.remove("sign-in-mode2");
});

const checkbox = document.querySelector('.checkbox-default');
const checkboxText = document.querySelector('.checkbox-text');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    checkboxText.style.color = '#5D13E7';
  } else {
    checkboxText.style.color = '#5D13E759';
  }
});

