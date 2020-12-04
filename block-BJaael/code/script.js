let box = document.querySelectorAll(".boxes");

function getColor() {
  var colorCode = "0123456789abcdef";
  var code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + colorCode[Math.floor(Math.random() * 16)];
  }
  return code;
}

function start() {
  box.forEach((elm) => {
    elm.style.background = getColor();
  });
}
function randomNumber() {
  let num = Math.floor(Math.random() * 500);
  return num;
}

function number() {
  box.forEach((elm) => {
    elm.innerText = randomNumber();
  });
}
document.addEventListener("click", start);
document.addEventListener("click", number);
