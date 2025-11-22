// Muat HTML sebelum jalankan script
document.addEventListener("DOMContentLoaded", function () {
  welcomeMessage();
  updateCurrentTime();
});

// Fungsi Sambutan Pengguna
function welcomeMessage() {
  let userName = prompt("Please enter your name:");
  if (userName === null || userName.trim() === "") {
    userName = "Guest";
  }

  // Tampilkan pesan di elemen HTML
  const speechElement = document.getElementById("welcome-speech");
  if (speechElement) {
    speechElement.innerText = "Welcome, " + userName + "!";
  }
}

// Fungsi Update Waktu Saat Ini
function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  const timeElement = document.getElementById("current-time");
  if (timeElement) {
    timeElement.innerText = timeString;
  }
}

// Fungsi Validasi dan Tampilkan Pesan
function validateForm() {
  const nameInput = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const messageInput = document.getElementById("message").value.trim();
  const dobInput = document.getElementById("dob").value.trim();
  const genderInput = document.querySelector('input[name="gender"]:checked');

  // Validasi input kosong
  if (nameInput === "" || emailInput === "" || messageInput === "") {
    alert("All fields are required!");
    return false;
  }
  // Validasi format email sederhana
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput)) {
    alert("Please enter a valid email address!");
    return false;
  }

  // Tampilkan ke kotak samping jika lolos validasi
  updateCurrentTime();

  document.getElementById("sender-name").innerText = nameInput;
  document.getElementById("sender-email").innerText = emailInput;
  document.getElementById("sender-dob").innerText = dobInput;
  document.getElementById("sender-gender").innerText = genderInput.value; // Ambil value radio
  document.getElementById("sender-message").innerText = messageInput;

  alert("Message sent successfully!");
  return true;
}

const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah refresh halaman
    validateForm(); // Jalankan fungsi di atas
  });
}
