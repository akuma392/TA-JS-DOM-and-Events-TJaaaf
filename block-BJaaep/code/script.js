let block1 = document.querySelectorAll(".first li");
let block2 = document.querySelector(".second");

block1.forEach((elm, index) => {
  elm.addEventListener("click", (event) => {
    event.target.innerText = index + 1;
    setInterval(() => {
      event.target.innerText = "";
    }, 5000);
  });
});

block2.addEventListener("click", (event) => {
  let text = event.target.dataset.text;
  event.target.innerText = text;
  setInterval(() => {
    event.target.innerText = "";
  }, 5000);
});

// arr.forEach((elm) => {
//   let box = document.createElement("li");
//   box.classList.add("box");
//   block1.append(box);

//   box.addEventListener("click", function () {
//     handleEvent(box);
//   });
// });

// function handleEvent(box) {
//   box.innerText = randomNumber();
// }
// function randomNumber() {
//   let number = Math.floor(Math.random() * 12);
//   return number;
// }
// arr1 = [...arr];
// arr1.forEach((elm) => {
//   let box1 = document.createElement("li");
//   box1.classList.add("box");
//   block2.append(box1);
// });
// function handleEvent1(event) {
//   event.target.innerText = randomNumber();
// }
// block2.addEventListener("click", handleEvent1);
