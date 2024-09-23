// donate btn for noyakhali
document.getElementById("noyakhali-donate-btn").addEventListener("click", function(){
  
  const donateAmountNoyakhali = inputValueById("noyakhali-donate-amount");
  
  const noyakhaliBalance = inputTextById("noyakhali-balance");
  
  const updateBalanceNoyakhali = noyakhaliBalance + donateAmountNoyakhali ;

  document.getElementById("noyakhali-balance").innerText = updateBalanceNoyakhali;

});

// donate btn for feni
document.getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const donateAmountFeni = inputValueById("feni-donate-amount");

    const feniBalance = inputTextById("feni-balance");

    const updateBalanceFeni = feniBalance + donateAmountFeni;

    document.getElementById("feni-balance").innerText =
      updateBalanceFeni;
  });

  // donate btn for quote movement

document.getElementById("movement-donate-btn")
  .addEventListener("click", function () {
    const donateAmountForMovement = inputValueById("movement-donate-amount");

    const movementBalance = inputTextById("movement-balance");

    const updateBalanceForMovement = movementBalance + donateAmountForMovement;

    document.getElementById("movement-balance").innerText =
      updateBalanceForMovement;
  });