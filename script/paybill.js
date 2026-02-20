const payBillButton = document
  .getElementById("pay-bill-btn")
  .addEventListener("click", function () {
    const selectBank = getValueInput("pay-bill-bank");
    if (selectBank == "Select Bank") {
      alert("Please Select a Bank");
      return;
    }

    const billerAccountNumber = getValueInput("pay-bill-number");
    if (billerAccountNumber.length != "11") {
      alert("Invalid Biller Account Number");
      return;
    }

    const amountToPay = getValueInput("pay-bill-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - amountToPay;
    if (newBalance < 0) {
      alert("Insufficient Balance");
      return;
    }

    const pin = getValueInput("pay-bill-pin");
    if (pin == "7337") {
      alert(`Pay Bill Successfull to ${billerAccountNumber} at ${new Date()}`);
      setBalance(newBalance);
      transaction(
        "Pay Bill",
        `BDT ${amountToPay}, To Biller ACC No ${billerAccountNumber}`,
      );
    } else {
      alert("Invalid Pin");
      return;
    }
  });
