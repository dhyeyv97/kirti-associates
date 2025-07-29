/*========================
    checkbox js
==========================*/
document.querySelectorAll(".main-check").forEach((mainCheckbox) => {
  mainCheckbox.addEventListener("change", () => {
    const group = mainCheckbox.getAttribute("data-role");
    document.querySelectorAll(`input[name="${group}"]`).forEach((checkbox) => {
      checkbox.checked = !checkbox.checked;
    });
  });
});

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const group = checkbox.getAttribute("name");
    const groupCheckBoxes = document.querySelectorAll(`input[name="${group}"]`);
    const mainCheckbox = document.querySelector(
      `.main-check[data-role="${group}"]`
    );
    const allChecked = [...groupCheckBoxes].every((cb) => cb.checked);
    if (mainCheckbox) {
      mainCheckbox.checked = allChecked;
    }
  });
});
