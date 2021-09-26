import refs from "./refs.js";
import getRandomColor from "./randomColor.js";
import getRandomPosition from "./randomPosition.js";

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
refs.rectanglesContainer.addEventListener("click", lookClick);
function lookClick(event) {
  event.preventDefault();

  if (event.target.className === rectanglesClassName) {
    event.target.classList.add("clicked");
    console.log(
      "`${rectanglesClassName} clicked`: ",
      `${rectanglesClassName} clicked`
    );
    // return event.target.classList.add("clicked");

    //     console.log("after click the rectangle:  ", rectangle);
    //     document
    //       .querySelector(rectanglesClassName)
    //       .addEventListener("click", removeClassName);
    //     // return addClassName();
  } else if (event.target.className === `${rectanglesClassName} clicked`) {
    console.log("event.target.className:  ", event.target.className);
    event.target.classList.remove("clicked");
  }
  console.log("try more....");
}

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
