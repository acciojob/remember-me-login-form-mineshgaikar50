// Ensure that the JavaScript code runs after the DOM is fully loaded
window.onload = function () {
  // If there are saved details in localStorage, show the "Login as existing user" button
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    document.getElementById("existing").style.display = "inline-block";
  }

  // Event listener for the login form submission
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("checkbox").checked;

    // If "remember me" is checked, store the credentials in localStorage
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Show the alert with the username
    alert(`Logged in as ${username}`);
  });

  // Event listener for the "Login as existing user" button
  document.getElementById("existing").addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    alert(`Logged in as ${savedUsername}`);
  });
};
