welcomeMessage();

function welcomeMessage() {
  let userName = prompt("Please enter your name:");
  if (userName === null || userName.trim() === "") {
    userName = "Guest";
  }

  const speechElement = document.getElementById("welcome-speech");
  if (speechElement) {
    speechElement.innerText = "Welcome, " + userName + "!";
  }
}

function validateForm() {
  const nameInput = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const messageInput = document.getElementById("message").value.trim();

  if (nameInput === "" || emailInput === "" || messageInput === "") {
    alert("All fields are required!");
    return false;
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput)) {
    alert("Please enter a valid email address!");
    return false;
  }
  console.log("=== Data Terkirim ===");
  console.log("Nama:", nameInput);
  console.log("Email:", emailInput);
  console.log("Pesan:", messageInput);
  alert("Message sent successfully!");
  return true;
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });
