/*========================
    add to fav js
==========================*/

const saveButtons = document.querySelectorAll(".add-to-fav");

saveButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("clicked");
    });
});