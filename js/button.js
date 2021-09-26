import refs from "./refs.js";
import randomColor from "./getRandomColor.js";

console.log(randomColor());

refs.addBtn.addEventListener("click", addRectangle);

const rectanglesClassName = "recDiv";

function addRectangle() {
  let array = [];

  const rectangle = document.createElement("div");
  rectangle.classList.add(rectanglesClassName);

  rectangle.style.backgroundColor = `${randomColor()}`;

  array.push(rectangle);
  refs.rectanglesContainer.append(...array);
}

// (r = Math.floor(Math.random() * 256)),
//   (g = Math.floor(Math.random() * 256)),
//   (b = Math.floor(Math.random() * 256)),
//   (color = "#" + r.toString(16) + g.toString(16) + b.toString(16));
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
