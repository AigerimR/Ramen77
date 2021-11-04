"use strict";

// For a PopUp window
const popupWindow = document.querySelector(".popup");
const openPopupBtn = document.querySelector(".open-popup");
const closePopupBtn = document.querySelector(".close-popup");

openPopupBtn.addEventListener("click", function () {
  popupWindow.style.display = "block";
});

closePopupBtn.addEventListener("click", function () {
  popupWindow.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == popupWindow) popupWindow.style.display = "none";
});

// For NavbarLinks
const aboutBtn = document.getElementById("goToAbout");
const contactBtn = document.getElementById("goToContact");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

function scrollSection(section, button) {
  button.addEventListener("click", function () {
    window.scrollTo({
      left: 0,
      top: section.offsetTop - 90,
      behavior: "smooth",
    });
  });
}

scrollSection(aboutSection, aboutBtn);
scrollSection(contactSection, contactBtn);

// For animation on scroll
const elements = document.querySelectorAll(".hidden");

const activateFunction = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};
let observer = new IntersectionObserver(activateFunction, {
  root: null,
  threshold: 0.15,
});
elements.forEach((e) => {
  observer.observe(e);
});
