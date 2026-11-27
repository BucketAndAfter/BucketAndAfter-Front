function resizeTextarea(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

const autoGrowTextareas = [...document.querySelectorAll("textarea")];

autoGrowTextareas.forEach((textarea) => {
  resizeTextarea(textarea);
  textarea.addEventListener("input", () => resizeTextarea(textarea));
});

window.addEventListener("resize", () => {
  autoGrowTextareas.forEach(resizeTextarea);
});
