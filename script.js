let wrongAttempts = 0;

function checkPassword() {
  const inputEl = document.getElementById("passwordInput");
  const inputValue = inputEl.value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const correctPassword = "ilovemyrakhiiii@69";

  if (inputValue === correctPassword) {
    document.getElementById("content").classList.remove("hidden");
    errorMsg.classList.add("hidden");
    inputEl.classList.remove("input-error");
    inputEl.disabled = true;
  } else {
    wrongAttempts++;
    errorMsg.classList.remove("hidden");
    inputEl.classList.add("input-error");
    showNextHint();
  }
}

function showNextHint() {
  const hints = document.querySelectorAll(".hint");
  if (wrongAttempts <= hints.length) {
    hints[wrongAttempts - 1].classList.remove("hidden");
  }
}
