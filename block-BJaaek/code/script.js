let mouseClk = document.querySelector(".text1");
let mouseMove = document.querySelector(".text2");

function getColor() {
  var colorCode = "0123456789abcdef";
  var code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + colorCode[Math.floor(Math.random() * 16)];
  }
  document.querySelector(".first").style.background = code;
}
function getColor1() {
  var colorCode = "0123456789abcdef";
  var code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + colorCode[Math.floor(Math.random() * 16)];
  }
  document.querySelector(".second").style.background = code;
}

mouseClk.addEventListener("click", getColor);
mouseMove.addEventListener("mousemove", getColor1);
