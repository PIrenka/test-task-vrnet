import refs from "./refs.js";

// const conteinerScrollWidth = refs.rectanglesContainer.offsetWidth;
// const conteinerScrollHeight = refs.rectanglesContainer.offsetHeight;
const conteinerWidth = refs.rectanglesContainer.clientWidth;
const conteinerHeight = refs.rectanglesContainer.clientHeight;
// console.log(
//   "conteinerWidth, conteinerHeight:  ",
//   conteinerWidth,
//   conteinerHeight
// );
// console.log(
//   "conteinerScrollWidth, conteinerScrollHeight:  ",
//   conteinerScrollWidth,
//   conteinerScrollHeight
// );

function getRandomPosition(elem) {
  const ox = Math.floor(Math.random() * conteinerWidth);
  const oy = Math.floor(Math.random() * conteinerHeight);
  // const ox = Math.floor(Math.random() * conteinerScrollWidth);
  // const oy = Math.floor(Math.random() * conteinerScrollHeight);

  return { left: `${ox}`, top: `${oy}` };
}

export default getRandomPosition;
