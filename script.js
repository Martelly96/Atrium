/* CONTACT FORM */


// Get references to form elements
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");

// Add a submit event listener to the form
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Validate the form fields
    if (validateForm()) {
        // If validation is successful, show the success message and hide the form
        successMessage.style.display = "block";
        form.style.display = "none";
    } else {
        // If validation fails, show the error message
        errorMessage.style.display = "block";
    }
});

// Function to validate the form
function validateForm() {
    let isValid = true;

    // Reset error messages
    errorMessage.style.display = "none";

    // Name validation
    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
        setError(nameInput, "Name is required");
        isValid = false;
    }

    // Email validation
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        setError(emailInput, "Email is required");
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, "Invalid email format");
        isValid = false;
    }

    // Subject validation
    const subjectValue = subjectInput.value.trim();
    if (subjectValue === "") {
        setError(subjectInput, "Subject is required");
        isValid = false;
    }

    // Message validation
    const messageValue = messageInput.value.trim();
    if (messageValue === "") {
        setError(messageInput, "Message is required");
        isValid = false;
    }

    return isValid;
}

// Function to set an error message for a field
function setError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector(".error");
    errorElement.innerText = message;
}

// Function to check if the email is in a valid format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


/*--------------------------------------------------------------------------------------*/
/* SIGN-IN

// Function to prompt the user to sign in
function promptSignIn(action) {
  const isSignedIn = /* Add your logic to check if the user is signed in */;

  if (!isSignedIn) {
      const confirmSignIn = confirm(`Please Sign In to ${action}. Do you want to Sign In now?`);

      if (confirmSignIn) {
          // Redirect the user to the sign-in page or display a sign-in form
          // Add your logic for handling the sign-in process
          // Example: window.location.href = "signin.html";
      } else {
          // User chose not to sign in, handle accordingly
          // Example: alert("You chose not to sign in.");
      }
  }


// Event listener for the "Upload" link
document.getElementById("sign-in-link").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link from navigating immediately
  promptSignIn("sign-in-link");
});

// Add similar event listeners for other links or actions as needed
