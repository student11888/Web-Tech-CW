// Functions
const validator = function (form, input, length) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  input.addEventListener('input', () => {
    if (
      input.value.length < length ||
      input.value.length > length ||
      input.value.length == 0 ||
      input.value.includes('.,')
    ) {
      input.style.borderColor = 'red';
      input.style.borderWidth = '2px';
      document.querySelectorAll('.warning')[1].style.opacity = '1';
    } else {
      input.style.borderColor = '#49bcf6';
      document.querySelectorAll('.warning')[1].style.opacity = '0';
    }
  });
};

// Hamburger menu
const hamburgerIcon = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');
hamburgerIcon.addEventListener('click', function () {
  navigation.classList.toggle('show');
});

document.addEventListener('click', function (event) {
  if (!navigation.contains(event.target)) {
    navigation.classList.remove('.show');
  }
});

// About page
if (document.URL.includes('about.html')) {
  // Slider
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.left_btn');
  const btnRight = document.querySelector('.right_btn');
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
  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);
  goToSlide(0);
}

// Contact page
if (document.URL.includes('contact.html')) {
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

// Register page
if (document.URL.includes('register.html')) {
  const btnSignIn = document.querySelectorAll('.btn-sign-in');
  const btnSignUp = document.querySelectorAll('.btn-sign-up');
  const signInPhoto = document.querySelector('.sign-in-photo');
  const signInInput = document.querySelector('.sign-in-input');
  const signUpPhoto = document.querySelector('.sign-up-photo');
  const signUpInput = document.querySelector('.sign-up-input');

  btnSignUp.forEach((b) =>
    b.addEventListener('click', function () {
      signInInput.style.transform = 'translateY(-100vh)';
      signUpPhoto.style.transform = 'translateY(-70vh)';

      signInPhoto.style.transform = 'translateY(100vh)';
      signUpInput.style.transform = 'translateY(-70vh)';
    })
  );

  btnSignIn.forEach((b) =>
    b.addEventListener('click', function () {
      signInInput.style.transform = 'translateY(0)';
      signUpPhoto.style.transform = 'translateY(0)';

      signInPhoto.style.transform = 'translateY(0)';
      signUpInput.style.transform = 'translateY(-140vh)';
    })
  );
  // Register form validation
  const registerForm = document.querySelector('.register-form');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

// Pay gage
if (document.URL.includes('pay.html')) {
  const payForm = document.querySelector('.pay-form');
  const inputCard = document.querySelector('.input__card');
  const inputEx = document.querySelector('.input_ex');
  const inputAmount = document.querySelector('.input__amount');
  const paymentType = document.querySelector('.pay-type');
  // Form validation
  validator(payForm, inputCard, 16);
  inputAmount.addEventListener('input', (e) => {
    if (e.target.value < 0) {
      e.target.style.borderColor = 'red';
      e.target.style.borderWidth = '2px';
      document.querySelectorAll('.warning')[0].style.opacity = '1';
    } else {
      inputAmount.style.borderColor = '#49bcf6';
      document.querySelectorAll('.warning')[0].style.opacity = '0';
    }
  });

  //Payment type and generating input
  const inputGenerator = function (html, htmlLabel, className) {
    if (document.querySelector(`.${className}`) == undefined) {
      paymentType.insertAdjacentHTML('afterend', html);
      paymentType.insertAdjacentHTML('afterend', htmlLabel);
    } else {
      return;
    }
  };

  paymentType.addEventListener('change', (e) => {
    let type = e.target.value;
    //Mobile
    const htmlTel = `
        <input
        type="tel"
        class="input input-tel"
        autocomplete="off"
        placeholder="+99 8** *** ** **"
        required
      />`;
    const htmlLabel = `
      <label class="pay-label">Enter telephone number:</label>`;
    if (type == 'mobile') {
      inputGenerator(htmlTel, htmlLabel, 'input-tel');
    }

    // Electric & Gas & water
    if (type == 'electric' || type == 'gas' || type == 'water') {
      const htmlCommunal = `
        <input
        type="tel"
        class="input input-communal"
        autocomplete="off"
        placeholder="*** *** ***"
        required
      />`;
      const htmlLabel = `
      <label class="pay-label">Enter consumer number:</label>`;
      inputGenerator(htmlCommunal, htmlLabel, 'input-communal');
    }

    // education
    if (type == 'education') {
      const htmlEdu = `
        <select class="input uni-type">
          <option>--Please select university--</option>
          <option value="wiut">Westminster International University</option>
          <option value="milliy">National University of Uzbekistan</option>
          <option value="finance">Toshkent Moliya Universiteti</option>
        </select>`;
      const htmlLabel = `
      <label class="pay-label">Enter consumer number:</label>`;
      inputGenerator(htmlEdu, htmlLabel, 'uni-education');

      const uniType = document.querySelector('.uni-type');
      uniType.addEventListener('change', (e) => {
        let type = e.target.value;
        if (type == 'wiut' || type == 'milliy' || type == 'finance') {
          const htmlEdu = `
        <input
        type="number"
        class="input input-student"
        autocomplete="off"
        placeholder="ID"
        required
      />`;
          const htmlLabel = `
      <label class="pay-label">Enter student ID:</label>`;
          uniType.insertAdjacentHTML('afterend', htmlEdu);
          uniType.insertAdjacentHTML('afterend', htmlLabel);
        }
      });
    }

    // currency exchange
    if (type == 'exchange') {
      const htmlLabel = `
      <label class="pay-label">Select currency:</label>
      `;

      const htmlEx = `
      <div class="radio-btn">
        <div>
        <input type="radio" id="toUSD" />
        <label for="toUSD">To USD</label>
        </div>
        <div>
        <input type="radio" id="toSUM" />
        <label for="toSUM">To SUM</label>
        </div>
    </div>`;
      inputGenerator(htmlEx, htmlLabel, 'uni-education');
    }
  });
}
