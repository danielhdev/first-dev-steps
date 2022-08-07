const mainContainer = document.querySelector(".container");
const joinBtn = document.querySelector(".btn");
const popupContainer = document.querySelector(".popup-container");
const closeIcon = document.querySelector(".close-icon");

joinBtn.addEventListener("click", () => {
  mainContainer.classList.add("active");
  popupContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  popupContainer.classList.add("active");
  mainContainer.classList.remove("active");
});
