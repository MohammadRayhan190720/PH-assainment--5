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