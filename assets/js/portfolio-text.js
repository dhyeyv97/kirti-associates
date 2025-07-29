/*========================
    portfolio text js
==========================*/
const navLinks = document.querySelectorAll(".portfolio-link");

// Set default opacity
navLinks.forEach((link) => {
    link.style.opacity = "1"; // Default opacity
});

// Add event listener to each link
navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        // Change opacity on mouse enter
        navLinks.forEach((l) => {
            if (l === link) {
                l.style.opacity = "1"; // Set opacity of the hovered link to 1
            } else {
                l.style.opacity = "0.2"; // Set opacity of the other links to 0.2
            }
        });
    });

    link.addEventListener("mouseleave", () => {
        // Reset opacity of all links to 1 on mouse leave
        navLinks.forEach((l) => {
            l.style.opacity = "1";
        });
    });
});
