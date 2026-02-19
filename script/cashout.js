const wdrawButton = document
  .getElementById("cashout-btn")
  .addEventListener("click", function () {
    const agentNumber = getValueInput("cashout-number");
    if (agentNumber.length != 11) {
      alert("Invalid Number");
      return;
    }
    console.log(agentNumber);

    const cashoutAmount = getValueInput("cashout-amount");
    console.log(cashoutAmount);

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
      alert("Invalid Amount");
      return;
    }
    console.log(newBalance);

    const pin = getValueInput("cashout-pin");
    if (pin === "7337") {
      alert("Withdraw Successfull");
      setBalance(newBalance);

      const history = document.getElementById("history-container");

      const newHistory = document.createElement("div");

      newHistory.innerHTML = `
       <div class="transaction-card p-5 bg=base-100">
          Cash Out Successfull to Agent Number ${agentNumber}, at ${new Date()}
        </div>
      `;

      history.append(newHistory);
    } else {
      alert("Invalid Pin");
      return;
    }
  });
