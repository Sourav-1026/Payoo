const sendNow = document
  .getElementById("send-now-btn")
  .addEventListener("click", function () {
    // console.log("Send Now Button Was Clicked");
    const userAccountNumber = getValueInput("send-money-number");
    if (userAccountNumber.length != "11") {
      alert("Invalid User Number");
      return;
    }
    console.log(userAccountNumber);

    const amount = getValueInput("send-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);

    if (amount > currentBalance) {
      alert("Invalid Amount");
      return;
    }
    // console.log(amount);

    const pin = getValueInput("send-money-pin");
    if (pin == "7337") {
      alert(`Send Money Successfull to ${userAccountNumber} at ${new Date()}`);
      setBalance(newBalance);
      transaction(
        "Send Money",
        `BDT ${amount}, To User No ${userAccountNumber},`,
      );
    } else {
      alert("Invalid Pin");
      return;
    }
    console.log(pin);
  });
