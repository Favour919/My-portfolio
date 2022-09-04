const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");
const socialIcons = document.querySelector('.social-icons')
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  
});
barIcon.addEventListener('click', function () {
    if (barIcon.classList.contains('fa-bars')) {
        barIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        barIcon.classList.replace('fa-times', 'fa-bars');
    }
});