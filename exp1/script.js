// JavaScript code for form validations

// Getting the form and input elements
const form = document.querySelector("form");
const usernameInput = form.querySelector("input[placeholder='Enter your username']");
const emailInput = form.querySelector("input[placeholder='Enter your email']");
const phoneInput = form.querySelector("input[placeholder='Enter your number']");
const passwordInput = form.querySelector("input[placeholder='Enter your password']");
const confirmPasswordInput = form.querySelector("input[placeholder='Confirm your password']");

// Create a pop-up dialog box container
const popupContainer = document.createElement("div");
popupContainer.style.position = "fixed";
popupContainer.style.top = "50%";
popupContainer.style.left = "50%";
popupContainer.style.transform = "translate(-50%, -50%)";
popupContainer.style.backgroundColor = "#fff";
popupContainer.style.color = "#333";
popupContainer.style.padding = "20px";
popupContainer.style.borderRadius = "8px";
popupContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
popupContainer.style.textAlign = "center";
popupContainer.style.zIndex = "1000";
popupContainer.style.display = "none";


const popupMessage = document.createElement("p");
popupMessage.textContent = "Thanks for your response!";
popupMessage.style.margin = "0 0 10px";
popupMessage.style.fontSize = "18px";
popupMessage.style.fontWeight = "500";
popupContainer.appendChild(popupMessage);

const closeButton = document.createElement("button");
closeButton.textContent = "Close";
closeButton.style.backgroundColor = "#9b59b6";
closeButton.style.color = "#fff";
closeButton.style.border = "none";
closeButton.style.padding = "10px 20px";
closeButton.style.borderRadius = "5px";
closeButton.style.cursor = "pointer";
closeButton.style.fontSize = "16px";
closeButton.addEventListener("click", () => {
  popupContainer.style.display = "none";
});
popupContainer.appendChild(closeButton);

document.body.appendChild(popupContainer);

// Adding event listener to validate form on submit
form.addEventListener("submit", (event) => {
  let isValid = true;

  // Username validation
  if (usernameInput.value.trim() === "") {
    alert("Username cannot be empty.");
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  // Phone number validation
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    alert("Please enter a valid 10-digit phone number.");
    isValid = false;
  }

  // Password validation
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(passwordInput.value.trim())) {
    alert(
      "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and symbols."
    );
    isValid = false;
  }

  // Confirm password validation
  if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
    alert("Passwords do not match.");
    isValid = false;
  }

  // Prevent form submission if validation fails
  if (!isValid) {
    event.preventDefault();
  } else {
    // Show a colorful pop-up dialog box on successful submission
    event.preventDefault(); // Prevent default form submission to show the popup
    popupContainer.style.display = "block";
  }
});
