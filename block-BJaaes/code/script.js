let form = document.querySelector("form");

let userElement = form.elements;
let errorMessage = document.querySelectorAll(".display");

let errorMessage1 = Array.from(errorMessage);

function isNumber(str = " ") {
  return str.split("").some((elm) => Number(elm));
}

function handleSubmit(event) {
  event.preventDefault();

  if (userElement.username.value.length < 4) {
    userElement.username.nextElementSibling.innerText =
      "Username cant be less than 4";
  } else {
    userElement.username.nextElementSibling.innerText = "";
  }

  if (isNumber(userElement.name.value)) {
    userElement.name.nextElementSibling.innerText =
      "You can't use number in the name field";
  } else {
    userElement.name.nextElementSibling.innerText = "";
  }

  if (!userElement.email.value.includes("@")) {
    userElement.email.nextElementSibling.innerText = "Not a valid email";
  } else if (userElement.email.value.length < 7) {
    userElement.email.nextElementSibling.innerText = "Not a valid email";
  } else {
    userElement.email.nextElementSibling.innerText = "";
  }

  if (!isNumber(userElement.phone.value)) {
    userElement.phone.nextElementSibling.innerText =
      "Phone number can only contain numbers";
  } else if (userElement.phone.value.length < 8) {
    userElement.phone.nextElementSibling.innerText =
      "Not a valid  phone number";
  } else {
    userElement.phone.nextElementSibling.innerText = "";
  }
  if (userElement.password[0].value !== userElement.password[1].value) {
    userElement.password[0].nextElementSibling.innerText =
      "Password and confirm password must be same.";
  } else {
    userElement.password[0].nextElementSibling.innerText = "";
  }

  if (errorMessage1.every((elm) => elm.innerText == "")) {
    alert("User Added Successfully!");
  }
}

form.addEventListener("submit", handleSubmit);
