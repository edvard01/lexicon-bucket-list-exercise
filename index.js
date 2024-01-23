const currentElement = document.querySelector(".list");

function firstAppend() {
  const firstNewEl = document.createElement("p");
  const firstNewElText = document.createTextNode("Get married");
  firstNewEl.appendChild(firstNewElText);

  currentElement.append(firstNewEl);
}

function secondAppend() {
  const newElement = document.createElement("p");
  const newElementText = document.createTextNode(
    "Visit a place colder than -25 degrees"
  );

  newElement.appendChild(newElementText);

  currentElement.insertAdjacentElement("beforeend", newElement);
}

function thirdAssignment() {
  const innerHtml = currentElement.innerHTML;
  console.log(innerHtml);
}

function htmlString() {
  const htmlListItem = "<p>See a waterfall with my own eyes</p>";

  //doing currentElement.innerHTML = htmlListItem; will replace all the current text in the element.
  //Instead we could try using a += sign, to append the html text to the existing text. Like this:
  currentElement.innerHTML += htmlListItem;
}

function addingThroughLoop() {
  const arr = ["Bungie jump", "Go vegan for a month", "Learn to play guitar"];
  arr.forEach((element) => {
    currentElement.innerHTML += `<p>${element}</p>`;
  });
}
firstAppend();
secondAppend();
thirdAssignment();

htmlString();
addingThroughLoop();
