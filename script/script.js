const loginButton = document
  .getElementById("login-btn")
  .addEventListener("click", function () {
    // Number Related
    const inputNumber = document.getElementById("input-number");
    const number = inputNumber.value;

    // Pin Related
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;

    if (number == "01910045570" && pin == "7337") {
      alert("Login Success");
      window.location.assign("/home.html");
    } else {
      alert("Login Failed");
      return;
    }
  });
