import { rectanglesClassName } from "./addRectangles.js";
// КОД ДЛЯ РИСОВКИ
// var startX, startY, startWidth, startHeight;
let startX, startY, startWidth, startHeight;

// refs.rectanglesContainer.addEventListener("mousemove", geometry)
// var startX, startY, startWidth, startHeight, startLeft, startRight;
function initDrag(e) {
  startX = e.clientX;
  startY = e.clientY;
  startWidth = parseInt(
    document.defaultView.getComputedStyle(e.currentTarget).width,
    10
  );
  startHeight = parseInt(
    document.defaultView.getComputedStyle(e.currentTarget).height,
    10
  );

  console.log(
    "startX, startY, startWidth, startHeight: ",
    startX,
    startY,
    startWidth,
    startHeight
  );

  document.documentElement.addEventListener("mousemove", geometry, false);
  document.documentElement.addEventListener("mouseup", stopDrag, false);
}

function geometry(e) {
  e.preventDefault();

  let elementId = e.target.id;
  // let sizer = document.getElementById(elementId);

  //   console.log("e.target=", e.target);
  //   console.log("mousemove=", e.clientX);

  if (e.target.className === rectanglesClassName) {
    e.target.style.width = startWidth + e.clientX - startX + "px";
    e.target.style.height = startHeight + e.clientY - startY + "px";
    e.target.style.zIndex += 1;
  }
  e.target.style.zIndex -= 1;
}
function stopDrag(e) {
  document.documentElement.removeEventListener("mousemove", geometry, false);
  document.documentElement.removeEventListener("mouseup", stopDrag, false);
}

export default initDrag;
