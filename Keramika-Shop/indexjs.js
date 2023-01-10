const toggleButton = document.getElementsByClassName("toggle-button")[0];
const modal = document.getElementsByClassName("modal")[0];

toggleButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});
