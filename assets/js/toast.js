/*========================
   toast js
==========================*/

window.addEventListener("load", () => {
  const setupButton = (buttonSelector, messageSelector) => {
    const buttons = document.querySelectorAll(buttonSelector);
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const messageContainer = document.querySelector(messageSelector);
        const progressBar = messageContainer.querySelector(".progress");

        messageContainer.classList.add("show");
        progressBar.style.width = "100%";

        let progress = 100;
        const interval = setInterval(() => {
          if (progress <= 0) {
            clearInterval(interval);
          } else {
            progress--;
            progressBar.style.width = progress + "%";
          }
        }, 40); // 4000ms / 100 steps = 40ms per step

        setTimeout(() => {
          messageContainer.classList.remove("show");
          progressBar.style.width = "0%"; // Reset the progress bar
        }, 4000);
      });
    });
  };

  setupButton(".save-btn, .remove-button, save-btn-bookmark", ".addToWishlist");
});
