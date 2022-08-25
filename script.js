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
  threshold: 0.15,
};

const observer = new IntersectionObserver(callback, options);

const sections = document.querySelectorAll(`.section`);
sections.forEach((section) => {
  section.classList.add(`section_hidden`);
  observer.observe(section);
});
