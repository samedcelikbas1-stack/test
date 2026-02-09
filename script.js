const counterEl = document.getElementById("counter");
const goalValueEl = document.getElementById("goalValue");
const goalInput = document.getElementById("goalInput");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const reminderSelect = document.getElementById("reminderSelect");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;
let goal = Number(goalInput.value);
let reminderTimer = null;

const updateDisplay = () => {
  counterEl.textContent = count;
  goalValueEl.textContent = goal;
  const progress = Math.min((count / goal) * 100, 100) || 0;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${Math.round(progress)}%`;
};

const scheduleReminder = () => {
  if (reminderTimer) {
    clearInterval(reminderTimer);
    reminderTimer = null;
  }

  const minutes = Number(reminderSelect.value);
  if (minutes > 0) {
    reminderTimer = setInterval(() => {
      alert("Zikrinize devam etmek ister misiniz?");
    }, minutes * 60 * 1000);
  }
};

incrementBtn.addEventListener("click", () => {
  count += 1;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

goalInput.addEventListener("change", () => {
  const nextGoal = Number(goalInput.value);
  goal = nextGoal > 0 ? nextGoal : goal;
  goalInput.value = goal;
  updateDisplay();
});

reminderSelect.addEventListener("change", scheduleReminder);

updateDisplay();
