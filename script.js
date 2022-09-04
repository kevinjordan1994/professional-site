//AGE CALCULATOR
const birthday = new Date(`April 9, 1994`);

function calcAge(birthdate) {
  const now = new Date();
  return Math.floor((now - birthdate) / 1000 / 60 / 60 / 24 / 365);
}

//ABOUT TEXT
const aboutTextContainer = document.querySelector(`.about-text`);

const aboutText = `My name is Kevin Jordan. I am a ${calcAge(
  birthday
)} year old front-end developer from
Jacksonville, Fl. My hobbies include working out, writing, cooking,
gaming and learning.`;

aboutTextContainer.insertAdjacentHTML(`afterbegin`, aboutText);

//SCORLLING ANIMATIONS
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const element = entry.target;
    if (entry.isIntersecting) {
      element.classList.remove(`section_hidden`);
    }
  });
};

const options = {
  root: null,
  threshold: 0.2,
};

const observer = new IntersectionObserver(callback, options);

const sections = document.querySelectorAll(`.section`);
sections.forEach((section) => {
  section.classList.add(`section_hidden`);
  observer.observe(section);
});

//CAROUSEL
const slides = document.querySelectorAll(`.slide`);
const carouselView = document.getElementById(`carousel_view`);
let currentSlide = 0;
const leftBtn = document.querySelector(`.left_btn`);
const rightBtn = document.querySelector(`.right_btn`);

const changeSlide = (slideNum) => {
  if (slideNum > slides.length - 1) {
    carouselView.style.transform = `translateX(0%)`;
    currentSlide = 0;
  } else if (slideNum < 0) {
    carouselView.style.transform = `translateX(${(slides.length - 1) * -100}%)`;
    currentSlide = slides.length - 1;
  } else {
    carouselView.style.transform = `translateX(${slideNum * -100}%)`;
  }
};
leftBtn.addEventListener(`click`, (e) => {
  e.preventDefault();
  currentSlide--;
  changeSlide(currentSlide);
});

rightBtn.addEventListener(`click`, (e) => {
  e.preventDefault();
  currentSlide++;
  changeSlide(currentSlide);
});
