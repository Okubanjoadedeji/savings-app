document.getElementById("withdrawButton").addEventListener("click", function () {
  let balance = parseFloat(document.querySelector(".account p").textContent.split(":")[1]);
  let amount = parseFloat(prompt("Enter amount to withdraw:"));

  if (isNaN(amount)) {
    alert("Please enter a valid amount.");
  } else if (amount > balance) {
    alert("Insufficient funds.");
  } else {
    balance -= amount;
    document.querySelector(".account p").textContent = `Balance: $${balance.toFixed(2)}`;
  }
});

document.getElementById("depositButton").addEventListener("click", function () {
  let balance = parseFloat(document.querySelector(".account p").textContent.split(":")[1]);
  let amount = parseFloat(prompt("Enter amount to deposit:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
  } else {
    balance += amount;
    document.querySelector(".account p").textContent = `Balance: $${balance.toFixed(2)}`;
  }
});
