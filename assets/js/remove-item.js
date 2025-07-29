/*====================
    remove item js
=======================*/
const cartBox = document.querySelectorAll(".table-row");
const noItemFound = document.querySelector(".no-found-item");

cartBox?.forEach((el) => {
  const deleteButton = el.querySelector(".remove-button");

  deleteButton.addEventListener("click", function () {
    // Hide the table row
    this.closest(".table-row").style.display = "none";

    // Check if all items are removed
    const allRowsHidden = Array.from(cartBox).every(
      (row) => row.style.display === "none"
    );

    // Show another div if all items are removed
    if (allRowsHidden) {
      noItemFound.style.display = "block";
    }
  });
});
