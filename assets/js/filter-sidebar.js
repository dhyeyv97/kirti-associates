/*====================
  filter sidebar js
=======================*/
const filterButton = document.querySelector(".filter-btn");
const filterSideBar = document.querySelector(".filter-sidebar");
const filterOverlay = document.querySelector(".filter-overlay");
const closeBtns = document.querySelectorAll(".close-btn"); // Select all close buttons

// Add class to the element
filterButton.addEventListener("click", function () {
  filterSideBar.classList.add("open");
  filterOverlay.classList.add("show");
});

// Loop through each close button and add event listener
closeBtns.forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    filterSideBar.classList.remove("open");
    filterOverlay.classList.remove("show");
  });
});

filterOverlay.addEventListener("click", function () {
  filterSideBar.classList.remove("open");
  filterOverlay.classList.remove("show");
});
