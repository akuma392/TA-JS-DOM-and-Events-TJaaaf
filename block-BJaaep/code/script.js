let block1 = document.querySelector("ul");
let block2 = document.querySelector(".boxes2");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

arr.forEach((elm) => {
  let box = document.createElement("li");
  box.classList.add("box");
  block1.append(box);

  box.addEventListener("click", function () {
    handleEvent(box);
  });
});

function handleEvent(box) {
  box.innerText = randomNumber();
}
function randomNumber() {
  let number = Math.floor(Math.random() * 12);
  return number;
}
arr1 = [...arr];
arr1.forEach((elm) => {
  let box1 = document.createElement("li");
  box1.classList.add("box");
  block2.append(box1);
});
function handleEvent1(event) {
  event.target.innerText = randomNumber();
}
block2.addEventListener("click", handleEvent1);
