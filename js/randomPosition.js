import refs from "./refs.js";

function getRandomPosition(elem) {
  const conteinerWidth = refs.rectanglesContainer.clientWidth;
  const conteinerHeight = refs.rectanglesContainer.clientHeight;
  const ox = Math.floor(Math.random() * conteinerWidth);
  const oy = Math.floor(Math.random() * conteinerHeight);

  return { left: `${ox}`, top: `${oy}` };
}

export default getRandomPosition;
