let outputScreen = document.querySelector(".output");
// let reset = document.querySelector(".reset");

// let input = document.querySelector(".input-value");
// let intialValue = 0;
// input.addEventListener("click", handleEvent);

// function handleEvent(event) {
//   if (outputScreen.innerText === intialValue) {
//     outputScreen.innerText = event.target.innerText;
//   } else {
//     outputScreen.innerText += event.target.innerText;
//   }

//   if (event.target.classList.contains("reset")) {
//     outputScreen.innerText = intialValue;
//   }
//   return outputScreen.innerText;
// }

let input = document.querySelectorAll(".btn");

let intialValue = 0;

input.forEach((elm) => {
  elm.addEventListener("click", handleEvent);
});

function handleEvent(event) {
  if (event.target.classList.contains("equal")) {
    outputScreen.innerText = eval(outputScreen.innerText);
    return;
  }
  if (event.target.classList.contains("reset")) {
    outputScreen.innerText = intialValue;
  }
  if (outputScreen.innerText == intialValue) {
    outputScreen.innerText = event.target.innerText;
  } else {
    outputScreen.innerText += event.target.innerText;
  }
}
