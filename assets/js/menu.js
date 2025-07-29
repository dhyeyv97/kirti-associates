/*========================
    menu js
==========================*/
// Existing selectors
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".toggle");
const menuItems = document.querySelector(".sidebar-nav");
const expandBtn = document.querySelectorAll(".expand-btn > a");

// New selector for the close button
const btnClose = document.querySelector(".close-btn");

// Toggle function
function toggle() {
    // Toggle classes
    body.classList.toggle("overflow");
    overlay.classList.toggle("overlay--active");
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}

// Function to remove all classes
function removeAllClasses() {
    body.classList.remove("overflow");
    overlay.classList.remove("overlay--active");
    menuBtn.classList.remove("open");
    menuItems.classList.remove("open");
    expandBtn.forEach((btn) => {
        btn.classList.remove("open");
    });
}

// Event listener for the menu button
menuBtn.addEventListener("click", e => {
    e.stopPropagation();
    toggle();
})

// Event listener for the escape key
window.onkeydown = function (event) {
    const key = event.key;
    const active = menuItems.classList.contains('open');
    if (key === "Escape" && active) {
        toggle();
    }
};

// Event listener for clicks outside the menu
document.addEventListener('click', e => {
    let target = e.target,
        its_menu = target === menuItems || menuItems.contains(target),
        its_hamburger = target === menuBtn,
        menu_is_active = menuItems.classList.contains('open');
    if (!its_menu && !its_hamburger && menu_is_active) {
        toggle();
    }
});

// Event listener for the close button
btnClose.addEventListener("click", () => {
    removeAllClasses();
});

// Event listener for mobile menu expand buttons
expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("open");
    });
});
