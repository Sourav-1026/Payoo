const wdrawButton = document
  .getElementById("cashout-btn")
  .addEventListener("click", function () {
    // console.log("button has clicked");
    const agentNumberInput = document.getElementById("cashout-number");
    const agentNumber = agentNumberInput.value;
    if (agentNumber.length != 11) {
      alert("Invalid Number");
      return;
    }
    console.log(agentNumber);

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    const newBalance = Number(balance) - Number(cashoutAmount);
    if (newBalance < 0) {
      alert("Invalid Amount");
      return;
    }
    console.log(newBalance);

    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if (pin === "7337") {
      alert("Withdraw Successfull");
      balanceElement.innerText = newBalance;
    } else {
      alert("Invalid Pin");
      return;
    }
  });
