import refs from "./refs.js";
import getRandomColor from "./randomColor.js";
import getRandomPosition from "./randomPosition.js";

console.log(refs.rectanglesContainer.clientWidth); //ширина вьюпорта
console.log(getRandomPosition()); // рандомное координаты позиционирования

refs.addBtn.addEventListener("click", addRectangle);

const rectanglesClassName = "recDiv";

function addRectangle() {
  let array = [];

  const rectangle = document.createElement("div");
  rectangle.classList.add(rectanglesClassName);

  rectangle.style.backgroundColor = `${getRandomColor()}`;
  console.log(rectangle);
  getRandomPosition(rectangle);
  // rectangle.elementFromPoint(`${getRandomPosition()}`);

  array.push(rectangle);
  refs.rectanglesContainer.append(...array);
}

//=================================================
refs.rectanglesContainer.addEventListener("click", lookClick);
function lookClick(event) {
  event.preventDefault();

  if (event.target.className === rectanglesClassName) {
    return event.target.classList.add("clicked");
  }
  console.log("try more....");
}
//=================================================
