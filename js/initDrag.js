import { rectanglesClassName } from "./addRectangles.js";

let startX, startY, startWidth, startHeight;

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

  document.documentElement.addEventListener("mousemove", geometry);
  document.documentElement.addEventListener("mouseup", stopDrag);
}

function geometry(e) {
  e.preventDefault();

  if (e.target.className === rectanglesClassName) {
    e.target.style.width = startWidth + e.clientX - startX + "px";
    e.target.style.height = startHeight + e.clientY - startY + "px";
    e.target.style.zIndex = 1000;
  }
}

function stopDrag(e) {
  document.documentElement.removeEventListener("mousemove", geometry);
  document.documentElement.removeEventListener("mouseup", stopDrag);
}

export default initDrag;
