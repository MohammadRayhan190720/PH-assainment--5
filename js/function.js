function inputValueById(id){
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber ;
}

function inputTextById(id){
  const inputText = document.getElementById(id).innerText;
  const inputTextNumber = parseFloat(inputText);
  return inputTextNumber;
}

// forModalShowWhenDonation is Successfull
// function donationHandler(){
//   const isDonationSuccessfull = true;
  
//   if(isDonationSuccessfull){
//     document.getElementById("my_modal_1").showModal();
//     // document.getElementById("my_modal_1").open = false;
//   }else{
//     alert("Unsuccessful donation")
//   }
// }