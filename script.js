// MENU MOBILE
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    alert("click");
    headerEl.classList.toggle("nav-open");
});

const allMainNavLink = document.querySelectorAll(".main-nav-link");
allMainNavLink.forEach(function (el) {
    el.addEventListener("click", function () {
        headerEl.classList.toggle("nav-open");
    });
});
