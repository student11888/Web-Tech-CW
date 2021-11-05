if (document.URL.includes("about.html")) {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".left_btn");
  const btnRight = document.querySelector(".right_btn");
  let currentSlide = 0;
  let maxSlide = slides.length;
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (currentSlide == maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
  };
  btnLeft.addEventListener("click", prevSlide);
  btnRight.addEventListener("click", nextSlide);
  goToSlide(0);
}
// Pay form

if (document.URL.includes("pay.html")) {
  const payForm = document.querySelector(".pay-form");
  payForm.addEventListener("submit", function (e) {
    console.log(123);
    e.preventDefault();
  });
}
