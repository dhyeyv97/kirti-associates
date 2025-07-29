/*========================
    portfolio popup js
==========================*/
const nav = document.getElementById("nav");

for (const link of nav.getElementsByTagName("li")) {
  link.onmousemove = (e) => {
    const rect = link.getBoundingClientRect(),
      img = link.querySelector(".full-img");

    // Set the offset for the image to appear to the right side of the cursor
    const offsetX = 350; // Adjust this value as needed
    const offsetY = 0; // Adjust this value as needed

    img.style.left = `${e.clientX - rect.left + offsetX}px`;
    img.style.top = `${e.clientY - rect.top + offsetY}px`;
  };
}