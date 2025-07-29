/*====================
    read more js
=======================*/
document.addEventListener("DOMContentLoaded", function () {
  const moreList = document.querySelectorAll(".more-list");
  const showMoreBtns = document.querySelectorAll(".more-btn");
  const showLessBtns = document.querySelectorAll(".less-btn");

  showMoreBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      moreList[index].style.maxHeight = "none";
      btn.style.display = "none";
      showLessBtns[index].style.display = "inline-block";
    });
  });

  showLessBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      moreList[index].style.removeProperty("max-height");
      btn.style.display = "none";
      showMoreBtns[index].style.display = "inline-block";
    });
  });
});