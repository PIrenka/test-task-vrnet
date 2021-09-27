import refs from "./refs.js";
import getRandomColor from "./randomColor.js";
import getRandomPosition from "./randomPosition.js";
import initDrag from "./initDrag.js";
import incrementZI from "./incrementZI.js";

refs.addBtn.addEventListener("click", addRectangle);
refs.rectanglesContainer.addEventListener("click", incrementZI);

const rectanglesClassName = "recDiv";
function addRectangle() {
  let array = [];

  const rectangle = document.createElement("div");
  rectangle.classList.add(rectanglesClassName);

  rectangle.style.backgroundColor = `${getRandomColor()}`;

  let coords = getRandomPosition(rectangle);
  rectangle.style.left = coords.left + "px";
  rectangle.style.top = coords.top + "px";
  rectangle.style.zIndex = 0;

  array.push(rectangle);
  refs.rectanglesContainer.append(...array);

  rectangle.addEventListener("mousedown", initDrag);
}

export { rectanglesClassName };
