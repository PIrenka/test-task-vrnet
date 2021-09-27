import refs from "./refs.js";
import getRandomColor from "./randomColor.js";
import getRandomPosition from "./randomPosition.js";
import initDrag from "./initDrag.js";

const rectanglesClassName = "recDiv";

refs.addBtn.addEventListener("click", addRectangle);

function addRectangle() {
  let array = [];

  const rectangle = document.createElement("div");
  rectangle.classList.add(rectanglesClassName);

  rectangle.style.backgroundColor = `${getRandomColor()}`;

  let coords = getRandomPosition(rectangle);
  rectangle.style.left = coords.left + "px";
  rectangle.style.top = coords.top + "px";
  // rectangle.style.zIndex = 1;

  array.push(rectangle);
  refs.rectanglesContainer.append(...array);

  refs.rectanglesContainer.addEventListener("click", onClick);
  rectangle.addEventListener("mousedown", initDrag);
}

function onClick(event) {
  event.preventDefault();

  if (event.target.className === rectanglesClassName) {
    // event.target.classList.add("clicked");
    event.target.style.zIndex += 1;

    console.log(`rectangle is clicked`);
  } else if (event.target.className === `${rectanglesClassName} clicked`) {
    // event.target.classList.remove("clicked");

    console.log(`rectangle is unclicked`);
  } else {
    console.log("try more...");
  }
}
//=================================================
// refs.rectanglesContainer.addEventListener("mousedown", lookClick);
// // refs.rectanglesContainer.addEventListener("click", lookClick);
// function lookClick(event) {
//   event.preventDefault();

//   if (event.target.className === rectanglesClassName) {
//     event.target.classList.add("clicked");
//     console.log(`rectangle is clicked`);
//   } else if (event.target.className === `${rectanglesClassName} clicked`) {
//     event.target.classList.remove("clicked");

//     console.log(`rectangle is unclicked`);
//   } else {
//     console.log("try more...");
//   }
// }
//=================================================

export { rectanglesClassName };
