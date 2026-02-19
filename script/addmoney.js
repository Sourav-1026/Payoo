const addMoneyButton = document
  .getElementById("add-money-btn")
  .addEventListener("click", function () {
    // console.log("add money button was clicked");
    const bankAccount = getValueInput("add-money-bank");
    if (bankAccount == "Select Bank") {
      alert("Please select a bank");
      return;
    }
    console.log(bankAccount);

    const accNumber = getValueInput("add-money-number");
    if (accNumber.length != "11") {
      alert("Invalid account number");
      return;
    }
    console.log(accNumber);

    const amount = getValueInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);

    const pin = getValueInput("add-money-pin");
    if (pin == "7337") {
      alert(`Add Money Successfull from ${bankAccount} at ${new Date()}`);
      setBalance(newBalance);

      const history = document.getElementById("history-container");

      const newHistory = document.createElement("div");

      newHistory.innerHTML = `
       <div class="transaction-card p-5 bg=base-100">
          Add Money Successfull from ${bankAccount}, acc-number ${accNumber} at ${new Date()}
        </div>
      `;

      history.append(newHistory);
    } else {
      alert("Invalid Pin");
      return;
    }
  });
