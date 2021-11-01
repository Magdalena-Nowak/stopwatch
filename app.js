const optionsBtn = document.querySelector(".stopwatch__icon-options");
const optionsPopup = document.querySelector(".options");

const openOptionsPopup = () => {
  optionsPopup.classList.toggle("active");
};

optionsBtn.addEventListener("click", openOptionsPopup);
