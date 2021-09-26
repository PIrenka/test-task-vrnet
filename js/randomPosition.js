import refs from "./refs.js";

const conteinerWidth = refs.rectanglesContainer.clientWidth;
const conteinerHeight = refs.rectanglesContainer.clientHeight;

function getRandomPosition(elem) {
  const ox = Math.floor(Math.random() * conteinerWidth);
  const oy = Math.floor(Math.random() * conteinerHeight);
  elem.style.left = ox + "px";
  elem.style.top = oy + "px";
  return `${ox}, ${oy}`;
}

export default getRandomPosition;

// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();

//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset,
//   };
// }

// function getRandomPosition(elem) {
//   let coords = getCoords(elem);

//   elem.style.left = coords.left + "px";
//   elem.style.top = coords.bottom + "px";

//   return elem;
// }
