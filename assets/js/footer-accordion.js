/*=====================
    footer accordion js
==========================*/
const footerBtn = document.querySelectorAll(".footer-title");
const showNav = document.querySelector(".footer-link");
for (var i = 0; i < footerBtn.length; ++i) {
  footerBtn[i].addEventListener("click", function () {
    this.parentNode.classList.toggle("open-footer-content");
  });
}
