// global variable declare
const donateButton = document.getElementById("donation-button");
const historyButton = document.getElementById("history-button");
 const mainContainer = document.getElementById("main-container");
 const historyContainer = document.getElementById("history-container");




// donate btn for noyakhali
document.getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const donateAmountNoakhali = inputValueById("donate-amount-noakhali");

    const balanceNoakhali = inputTextById("balance-noakhali");
    const accountBalance = inputTextById("account-balance");

    // validation
    if (donateAmountNoakhali <= 0 || isNaN(donateAmountNoakhali)) {
      return alert("invalid data found");
    }
    

    if (accountBalance < donateAmountNoakhali) {
      return alert("insufficient balance");
    }

    const updateBalanceNoakhali = balanceNoakhali + donateAmountNoakhali;

    document.getElementById("balance-noakhali").innerText =
      updateBalanceNoakhali;

    // deducted from the total account balance

    const updateAccountBalance = accountBalance - donateAmountNoakhali;
    document.getElementById("account-balance").innerText = updateAccountBalance;

    // show in history
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("border-2", "p-10");
    div.innerHTML = `
     <P class="text-xl font-bold">${donateAmountNoakhali}  Taka is Donate for Flood at Noakhali, Bangladesh</P>
     <P class="mt-3">${new Date().toISOString()}</P>
    `;

    historyContainer.appendChild(div);
  });

// donate btn for feni
  document.getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const donateAmountFeni = inputValueById("donate-amount-feni");

    const balanceFeni = inputTextById("balance-feni");

    const accountBalance = inputTextById("account-balance");

    // validation
    if (donateAmountFeni <= 0 || isNaN(donateAmountFeni)) {
      return alert("invalid data found");
    }
    // validation
    if (accountBalance < donateAmountFeni) {
      return alert("Insufficient balance");
    }

    const updateBalanceFeni = balanceFeni + donateAmountFeni;

    document.getElementById("balance-feni").innerText = updateBalanceFeni;

    // deducted from the total account balance
    

    const updateAccountBalance = accountBalance - donateAmountFeni;
    document.getElementById("account-balance").innerText = updateAccountBalance;

    // show in history

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("border-2", "p-10");
    div.innerHTML = `
      <P class="text-xl font-bold">${donateAmountFeni}  Taka is Donate for Flood Relief in Feni,Bangladesh</P>
      <P class="mt-3">${new Date().toISOString()}</P>
      `;

    historyContainer.appendChild(div);
  });

  // donate btn for quote movement

document.getElementById("movement-donate-btn")
  .addEventListener("click", function () {
    const donateAmountMovement = inputValueById("donate-amount-movement");

    const balanceMovement = inputTextById("balance-movement");
    
    const accountBalance = inputTextById("account-balance");

    // validation
    if (donateAmountMovement <= 0 || isNaN(donateAmountMovement)) {
      return alert("invalid data found");
    }

    // validation
    if (accountBalance < donateAmountMovement) {
      return alert("Insufficient balance");
    }

    const updateBalanceMovement = balanceMovement + donateAmountMovement;

    document.getElementById("balance-movement").innerText =
      updateBalanceMovement;

    // deducted from the total account balance
    

    const updateAccountBalance = accountBalance - donateAmountMovement;
    document.getElementById("account-balance").innerText = updateAccountBalance;

    // show in history

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("border-2", "p-10");
    div.innerHTML = `
       <P class="text-xl font-bold">${donateAmountMovement}  Taka is Donate for Injured in the Quota Movement</P>
      <P class="mt-3">${new Date().toISOString()}</P>
    `;

    historyContainer.appendChild(div);
  });