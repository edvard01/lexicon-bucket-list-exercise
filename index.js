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
  const arr = ["Bungie jump", "Learn to play guitar", "Go vegan for a month"];
  arr.forEach((element) => {
    currentElement.innerHTML += `<p>${element}</p>`;
  });
}

function countListItems() {
  const children = currentElement.children;
  console.log(`${children.length} list items.`);
}

function changeOwner() {
  const owner = document.querySelector(".owner");
  owner.innerHTML = "Johan's";
}

function replaceFirstItem() {
  const children = currentElement.children;
  const newElement = document.createElement("p");
  const newItem = document.createTextNode("Give a million dollars to charity");
  newElement.appendChild(newItem);
  currentElement.replaceChild(newElement, children[0]);
}

function replaceMiddleItem() {
  const children = document.querySelector(".list").children;
  const newElement = document.createElement("p");
  const newItem = document.createTextNode("Climb Sweden's tallest mountain");
  newElement.appendChild(newItem);

  if (children.length % 2 === 1) {
    let index = (children.length + 1) / 2;
    currentElement.replaceChild(newElement, children[index - 1]);
  } else {
    let index = children.length / 2;
    currentElement.replaceChild(newElement, children[index - 1]);
  }
}

function removeLastItem() {
  const lastItem = document.querySelector(".list").lastChild;
  currentElement.removeChild(lastItem);
}

firstAppend();
secondAppend();
thirdAssignment();
htmlString();
addingThroughLoop();
countListItems();
changeOwner();
replaceFirstItem();
replaceMiddleItem();
removeLastItem();
