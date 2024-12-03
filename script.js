// Check if there are saved user details in localStorage
window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  
  // If there are saved details, show the existing user button
  if (savedUsername && savedPassword) {
    document.getElementById("existing").style.display = "inline-block";
  }

  // Event listener for submitting the login form
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("checkbox").checked;

    // If "remember me" is checked, save username and password in localStorage
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    alert(`Logged in as ${username}`);
  });

  // Event listener for the "Login as existing user" button
  document.getElementById("existing").addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    alert(`Logged in as ${savedUsername}`);
  });
};
