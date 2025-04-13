function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const correctPassword = "ilovemyrakhiiii@69"; 

  if (input === correctPassword) {
    document.getElementById("content").classList.remove("hidden");
  } else {
    alert("Wrong password! Try again.");
  }
}
