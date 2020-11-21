let button = document.getElementById("button");

let userInput = document.getElementById("userInput");
let ul = document.querySelector("ul");

const inputLength = () => {
  return userInput.value.length;
};

const createListElement = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li);
  userInput.value = "";
};

const addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement();
  } else {
    alert("Enter an item");
  }
};

const addListAfterEnter = (event) => {
  if (inputLength() <= 0 && event.which === 13) {
    alert("Enter an item");
  } else if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
};

button.addEventListener("click", addListAfterClick);

userInput.addEventListener("keypress", addListAfterEnter);
