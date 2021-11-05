// Registeration form
const sectionReg = document.querySelector(".register");
const btnSignIn = document.querySelectorAll(".btn-sign-in");
const btnSignUp = document.querySelectorAll(".btn-sign-up");
const signInPhoto = document.querySelector(".sign-in-photo");
const signInInput = document.querySelector(".sign-in-input");
const signUpPhoto = document.querySelector(".sign-up-photo");
const signUpInput = document.querySelector(".sign-up-input");

btnSignUp.forEach((b) =>
  b.addEventListener("click", function () {
    console.log(123);
    signInInput.style.transform = "translateY(-100vh)";
    signUpPhoto.style.transform = "translateY(-70vh)";

    signInPhoto.style.transform = "translateY(100vh)";
    signUpInput.style.transform = "translateY(-70vh)";
  })
);

btnSignIn.forEach((b) =>
  b.addEventListener("click", function () {
    console.log(123);
    signInInput.style.transform = "translateY(0)";
    signUpPhoto.style.transform = "translateY(0)";

    signInPhoto.style.transform = "translateY(0)";
    signUpInput.style.transform = "translateY(-140vh)";
  })
);
