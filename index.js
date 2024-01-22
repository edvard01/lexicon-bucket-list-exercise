const currentElement = document.querySelector(".list");

function firstAppend() {
  const firstNewEl = document.createElement("p");
  const firstNewElText = document.createTextNode("This is added");
  firstNewEl.appendChild(firstNewElText);

  currentElement.append(firstNewEl);
}

function secondAppend() {
  const newElement = document.createElement("p");
  const newElementText = document.createTextNode("second text append");

  newElement.appendChild(newElementText);

  currentElement.insertAdjacentElement("beforeend", newElement);
}

function thirdAssignment() {
  const innerHtml = currentElement.innerHTML;
  console.log(innerHtml);
}

firstAppend();
secondAppend();
thirdAssignment();
