async function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim(); // trim to remove any accidental spaces
  const hash = await sha256(input);

  const correctHash = "2c8d9f1b79cd0f79c285edc89ad1d7b30f9f1df1991e989b13a8a9bdfb36b100"; // Hash of "funny123"

  if (hash === correctHash) {
    document.getElementById("content").classList.remove("hidden");
  } else {
    alert("Wrong password!");
  }
}

async function sha256(text) {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
