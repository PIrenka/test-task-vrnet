import refs from "./refs.js";
import getRandomColor from "./randomColor.js";
import getRandomPosition from "./randomPosition.js";

// console.log(refs.rectanglesContainer.clientWidth); //ширина вьюпорта
// console.log(getRandomPosition()); // рандомное координаты позиционирования

refs.addBtn.addEventListener("click", addRectangle);

const rectanglesClassName = "recDiv";

function addRectangle() {
  let array = [];

  const rectangle = document.createElement("div");
  rectangle.classList.add(rectanglesClassName);

  rectangle.style.backgroundColor = `${getRandomColor()}`;
  console.log(rectangle);

  let coords = getRandomPosition(rectangle);
  rectangle.style.left = coords.left + "px";
  rectangle.style.top = coords.top + "px";

  array.push(rectangle);
  refs.rectanglesContainer.append(...array);
}

// //=================================================
// refs.rectanglesContainer.addEventListener("click", lookClick);
// function lookClick(event) {
//   event.preventDefault();

//   if (event.target.className === rectanglesClassName) {
//     event.target.classList.add("clicked");
//     console.log("after click the rectangle:  ", rectangle);
//     document
//       .querySelector(rectanglesClassName)
//       .addEventListener("click", removeClassName);
//     // return event.target.classList.add("clicked");
//     // return addClassName();
//   }

//   // document
//   //   .querySelector(rectanglesClassName)
//   //   .addEventListener("click", removeClassName);

//   console.log("try more....");
// }

// // document
// //   .querySelector(rectanglesClassName)
// //   .addEventListener("click", removeClassName);
// // function addClassName() {
// window.addEventListener("click", onPressRectanleOnceMore);
// //   event.target.classList.add("clicked");
// // }
// function removeClassName(event) {
//   event.target.classList.removed("clicked");
// }
// function onPressRectanleOnceMore(event) {
//   if (event.code === "Escape") {
//     console.log("Press ESC to close");
//     event.target.classList.removed("clicked");
//   }
// }
// //=================================================
