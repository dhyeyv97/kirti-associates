/*========================
    dropdown js
==========================*/

const selectList = document.querySelectorAll(".select-menu");
const activeItem = document.querySelectorAll(".select-item");
const selectButton = document.querySelectorAll(".select-button");
selectList.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".select-item");
    if (!clicked) return;
    const text = clicked.textContent;
    const btnChangeText =
      this.closest(".select-dropdown").querySelector(".select-button");
    btnChangeText.textContent = text;
  });
  activeItem.forEach((e) =>
    e.addEventListener("click", () => {
      // remove active class from all links
      activeItem.forEach((e) => e.classList.remove("active"));
      // add active to the clicked link
      e.classList.toggle("active");
    })
  );
});
