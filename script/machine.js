// Machine id --> Input Value
function getValueInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

// Machine --> Balance
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(Number(balance));
  return Number(balance);
}

// Machine value --> Set Balance
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}
