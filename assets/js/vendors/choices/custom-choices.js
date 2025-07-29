const selectIds = [
  "#condition-select",
  "#category-select",
  "#type-select",
  "#models-select",
];

selectIds.forEach((id) => {
  const selectStateInputEl = document.querySelector(id);
  if (selectStateInputEl) {
    const choices = new Choices(selectStateInputEl);
  }
});
