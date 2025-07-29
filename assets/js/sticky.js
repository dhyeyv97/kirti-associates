/*====================
  on scroll text animation js
=======================*/
const header = document.querySelector(".sticky-header");
const toggleClass = "sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 300) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
