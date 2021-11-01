const optionsBtn = document.querySelector(".stopwatch__icon-options");
const optionsPopup = document.querySelector(".options");
const openInstructionBtn = document.querySelector(".stopwatch__icon-instruction");
const instructionPopup = document.querySelector(".instruction");
const closeInstructionBtn = document.querySelector(".instruction__btn");

const openOptionsPopup = () => {
  optionsPopup.classList.toggle("active");
};
const openInstructionPopup = () => {
  instructionPopup.classList.add("active");
};
const closeInstructionPopup = () => {
  instructionPopup.classList.remove("active");
};

optionsBtn.addEventListener("click", openOptionsPopup);
openInstructionBtn.addEventListener("click", openInstructionPopup);
closeInstructionBtn.addEventListener("click", closeInstructionPopup);
