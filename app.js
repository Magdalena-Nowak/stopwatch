const optionsBtn = document.querySelector(".stopwatch__icon-options");
const optionsPopup = document.querySelector(".options");
const openInstructionBtn = document.querySelector(
  ".stopwatch__icon-instruction"
);
const instructionPopup = document.querySelector(".instruction");
const closeInstructionBtn = document.querySelector(".instruction__btn");
const controlsBtns = document.querySelector(".controls");
const lastResult = document.querySelector(".stopwatch__last-result");
const stopwatchTimer = document.querySelector(".stopwatch__timer");
const colorBtns = document.querySelector(".options");
const registryList = document.querySelector(".registry__list");
const registry = document.querySelector(".registry");
const playBtn = document.querySelector(".controls__btn--play");
let root = document.documentElement;
let seconds = 0;
let minutes = 0;
let number = 0;
let timer;
let timerId;

const openOptionsPopup = () => {
  optionsPopup.classList.toggle("active");
};

const openInstructionPopup = () => {
  instructionPopup.classList.add("active");
};

const closeInstructionPopup = () => {
  instructionPopup.classList.remove("active");
};

const handleStart = () => {
  clearInterval(timerId);
  timerId = setInterval(function () {
    seconds++;
    timer = seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
    if (seconds > 0 && seconds < 10) {
      stopwatchTimer.textContent = timer;
    } else if (seconds >= 10 && seconds <= 59) {
      stopwatchTimer.textContent = timer;
    } else if (seconds > 59) {
      seconds = 0;
      minutes++;
      stopwatchTimer.textContent = timer;
    }
  }, 1000);
};

const handlePause = () => {
  clearInterval(timerId);
};

const createRegistry = (number) => {
  const registryItem = document.createElement("li");
  registryItem.classList.add("registry__item");
  registryItem.textContent = `Measurement nr: ${number}`;
  const registrySpan = document.createElement("span");
  registrySpan.classList.add("registry__time", "mx-5");
  registrySpan.textContent = timer;
  registryItem.append(registrySpan);
  registryList.append(registryItem);
};

const clearTimer = () => {
  stopwatchTimer.textContent = "0:00";
  seconds = 0;
  minutes = 0;
};

const handleStop = () => {
  number++;
  clearInterval(timerId);
  createRegistry(number);
  clearTimer();
  lastResult.firstElementChild.textContent = timer;
  lastResult.style.visibility = "visible";
};

const handleDelete = () => {
  clearInterval(timerId);
  clearTimer();
  number = 0;
  lastResult.style.visibility = "hidden";
  const allItems = document.querySelectorAll(".registry__item");
  allItems.forEach((item) => {
    item.parentElement.removeChild(item);
  });
};

const handleRegistry = () => {
  registry.classList.toggle("active");
};

optionsBtn.addEventListener("click", openOptionsPopup);
openInstructionBtn.addEventListener("click", openInstructionPopup);
closeInstructionBtn.addEventListener("click", closeInstructionPopup);

controlsBtns.addEventListener("click", (e) => {
  if (e.target.classList.contains("controls__btn--play")) {
    handleStart();
  } else if (e.target.classList.contains("controls__btn--pause")) {
    handlePause();
  } else if (e.target.classList.contains("controls__btn--stop")) {
    handleStop();
  } else if (e.target.classList.contains("controls__btn--delete")) {
    handleDelete();
  } else if (e.target.classList.contains("controls__btn--registry")) {
    handleRegistry();
  }
});

colorBtns.addEventListener("click", (e) => {
  if (e.target.classList.contains("options__color--red")) {
    root.style.setProperty("--firstColor", "#ff002b");
  } else if (e.target.classList.contains("options__color--green")) {
    root.style.setProperty("--firstColor", "#55a630");
  } else if (e.target.classList.contains("options__color--blue")) {
    root.style.setProperty("--firstColor", "rgba(87, 168, 243, 1)");
  }
});
