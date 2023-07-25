// let clicks = document.querySelectorAll(".click__button.numeric");
// function removeZeros(str) {
//   while (str.startsWith("0")) {
//     str = str.slice(1);
//   }
//   return str;
// }

// function clickNumStart(event) {
//   info.textContent += event.target.textContent;
//   info.textContent = removeZeros(info.textContent);
// }

// clicks.forEach((key) => key.addEventListener("click", clickNumStart));

let wide = document.querySelector(".wide");
let clicks = document.querySelectorAll(".click__button.numeric");
let info = document.querySelector(".val");
function itemToDisplay(value) {
  info.value += value;
}
function delItemFromDisplay(value){
  info.value = '';
}
function calc(event) {
  const operation = /[+\-\.\*/]/;
  const text = info.textContent;
  if (operation.test(text)){
    return;
  }
  info.textContent += event.target.textContent;
}
function num(){
  let text = info.textContent;
  let pattern = /[0-9]/g;
  let a = text.match(pattern);
}

clicks.forEach((key) => key.addEventListener("click", num));
clicks.forEach((key) => key.addEventListener("click", calc));