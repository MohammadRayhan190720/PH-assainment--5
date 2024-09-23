// donate btn for noyakhali
document.getElementById("noyakhali-donate-btn").addEventListener("click", function(){
  
  const donateAmountNoyakhali = inputValueById("noyakhali-donate-amount");
  
  const noyakhaliBalance = inputTextById("noyakhali-balance");
  
  const updateBalanceNoyakhali = noyakhaliBalance + donateAmountNoyakhali ;

  
  document.getElementById("noyakhali-balance").innerText = updateBalanceNoyakhali;

  // deducted from the total account balance
  const accountBalance = inputTextById("account-balance");
  const updateAccountBalance = accountBalance - donateAmountNoyakhali;
  document.getElementById("account-balance").innerText = updateAccountBalance;

  // show in history
  document
    .getElementById("history-button")
    .addEventListener("click", function () {
      const mainContainer = document.getElementById("main-container");
      mainContainer.classList.add("hidden");

      const historyContainer = document.getElementById("history-container");
      const div = document.createElement("div");
      div.classList.add("border-2", "p-10")
      div.innerHTML = `
    <P class="text-2xl font-bold">${donateAmountNoyakhali}  Taka is Donated for famine-2024 at Noyakhali, Bangladesh</P>
  `;

      historyContainer.appendChild(div);
    });

});

// donate btn for feni
document.getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const donateAmountFeni = inputValueById("feni-donate-amount");

    const feniBalance = inputTextById("feni-balance");

    const updateBalanceFeni = feniBalance + donateAmountFeni;

    document.getElementById("feni-balance").innerText = updateBalanceFeni;

    // deducted from the total account balance
    const accountBalance = inputTextById("account-balance");
    const updateAccountBalance = accountBalance - donateAmountFeni;
    document.getElementById("account-balance").innerText = updateAccountBalance;

    // show in history
    document
      .getElementById("history-button")
      .addEventListener("click", function () {
        const mainContainer = document.getElementById("main-container");
        mainContainer.classList.add("hidden");

        const historyContainer = document.getElementById("history-container");
        const div = document.createElement("div");
        div.innerHTML = `
  <P>${donateAmountFeni}  Taka is Donated for famine-2024 at Feni, Bangladesh</P>
  `;

        historyContainer.appendChild(div);
      });
  });

  // donate btn for quote movement

document.getElementById("movement-donate-btn")
  .addEventListener("click", function () {
    const donateAmountForMovement = inputValueById("movement-donate-amount");

    const movementBalance = inputTextById("movement-balance");

    const updateBalanceForMovement = movementBalance + donateAmountForMovement;

    document.getElementById("movement-balance").innerText =
      updateBalanceForMovement;

    // deducted from the total account balance
    const accountBalance = inputTextById("account-balance");
    const updateAccountBalance = accountBalance - donateAmountForMovement;
    document.getElementById("account-balance").innerText = updateAccountBalance;
  });