/*====================
  on scroll text animation js
=======================*/
window.addEventListener("scroll", () => {
  const translateAngleright = window.pageYOffset * 0.15;
  const translateAngleleft = window.pageYOffset * 0.15;
  const translateObjectsright = document.querySelectorAll(
    ".scroll-quote .marquee"
  );
  const translateObjectsleft = document.querySelectorAll(
    ".reverse-quote .marquee"
  );
  translateObjectsright.forEach((object) => {
    object.style.transform = `translateX(${translateAngleright}px)`;
  });
  translateObjectsleft.forEach((object) => {
    object.style.transform = `translateX(-${translateAngleleft}px)`;
  });
});
