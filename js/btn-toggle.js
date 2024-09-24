// donotebutton
donateButton.addEventListener("click", function(){

  donateButton.classList.add("bg-buttonColor");
  historyButton.classList.remove("bg-buttonColor");
  historyContainer.classList.add("hidden");

 
  mainContainer.classList.remove("hidden");

});

// historybutton

historyButton.addEventListener("click", function () {
  historyButton.classList.add("bg-buttonColor");
  donateButton.classList.remove("bg-buttonColor");
  historyContainer.classList.remove("hidden");

  mainContainer.classList.add("hidden");
});