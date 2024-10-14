const donateButton = document.querySelectorAll(".donate-btn");


const donationHandler = (button) =>{
  console.log(button);

}



donateButton.forEach(btn =>{
  btn.addEventListener("click",(e)=>{
    // console.log(e.target);
    donationHandler(e.target);

  })
})