/*-----------------------------------------------------------------------------------

    Template Name:fuso - classified - car rental, real estate,job find 
    Template URI: https://themes.pixelstrap.net/fuso
    Description: This is classified Html Template
    Author: Pixelstrap
    Author URL: https://themeforest.net/user/pixelstrap

----------------------------------------------------------------------------------- */

// 1.tap to top js
// 2.tooltip js

/*====================
  1 tap to top js
=======================*/
const scrollBtn = document.querySelector(".tap-to-tap");
const btnCss = () => {
  if (window.scrollY > 250) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};
document.addEventListener("scroll", () => {
  btnCss();
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*====================
  2 tooltip js
=======================*/

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);                    