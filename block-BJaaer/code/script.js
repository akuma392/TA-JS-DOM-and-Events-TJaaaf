let form = document.querySelector("form");
let modal = document.querySelector("article");

let div = document.createElement("div");

let userInfo = {};

form.addEventListener("submit", handleEvent);

function handleEvent(event) {
  event.preventDefault();
  userInfo.name = form.elements.text.value;
  userInfo.email = form.elements.email[0].value;
  userInfo.movies = form.elements.gender.value;
  userInfo.color = form.elements.color.value;
  userInfo.rating = form.elements.range.value;
  if (form.elements.fiction.checked == true) {
    userInfo.fiction = form.elements.fiction.value;
  } else if (form.elements.adventure.checked == true) {
    userInfo.fiction = form.elements.adventure.value;
  }

  userInfo.term = form.elements.terms.checked;

  div.innerHTML = `<h1> Hello ${userInfo.name}</h1>
<p> Email : ${userInfo.email}</p>
<p> color : ${userInfo.color}</p>
<p> Rating: ${userInfo.range}</p>
<p> Book Gener: ${userInfo.fiction}</p>
<p> You agree to terms and conditions: ${userInfo.term}</p>
`;
  modal.classList.add("open");
}
modal.append(div);

let btn = document.querySelector(".btn");

btn.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("open");
}
