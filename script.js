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
  const inputCard = document.querySelector(".input__card");
  const inputEx = document.querySelector(".input_ex");
  const paymentType = document.querySelector(".pay-type");
  // Form validation
  payForm.addEventListener("submit", function (e) {
    console.log(123);
    e.preventDefault();
  });

  //Payment type and generating input
  paymentType.addEventListener("change", (e) => {
    let type = e.target.value;

    //Mobile
    if (type == "mobile") {
      if (document.querySelector(".input-tel") == undefined) {
        const htmlTel = `
        <input
        type="tel"
        class="input input-tel"
        autocomplete="off"
        placeholder="+99 8** *** ** **"
      />`;
        const htmlLabel = `
      <label class="pay-label">Enter telephone number:</label>`;
        payForm.insertAdjacentHTML("afterbegin", htmlTel);
        payForm.insertAdjacentHTML("afterbegin", htmlLabel);
      } else {
        return;
      }
    }

    // Electric & Gas & water
    if (type == "electric" || type == "gas" || type == "water") {
      if (document.querySelector(".input-communal") == undefined) {
        const htmlCommunal = `
        <input
        type="tel"
        class="input input-communal"
        autocomplete="off"
        placeholder="*** *** ***"
      />`;
        const htmlLabel = `
      <label class="pay-label">Enter consumer number:</label>`;
        payForm.insertAdjacentHTML("afterbegin", htmlCommunal);
        payForm.insertAdjacentHTML("afterbegin", htmlLabel);
      } else {
        return;
      }
    }

    // education
    if (type == "education") {
      if (document.querySelector(".uni-education") == undefined) {
        const htmlEdu = `
        <select class="input uni-type">
          <option>--Please select university--</option>
          <option value="wiut">Westminster International University</option>
          <option value="milliy">National University of Uzbekistan</option>
          <option value="finance">Toshkent Moliya Universiteti</option>
        </select>`;
        const htmlLabel = `
      <label class="pay-label">Enter consumer number:</label>`;
        payForm.insertAdjacentHTML("afterbegin", htmlEdu);
        payForm.insertAdjacentHTML("afterbegin", htmlLabel);
      } else {
        return;
      }
    }
  });

  inputCard.addEventListener("input", function () {
    if (inputCard.value.length > 19) {
      inputCard.style.borderColor = "tomato";
    } else {
      inputCard.style.borderColor = "#49bcf6";
    }
  });
}
