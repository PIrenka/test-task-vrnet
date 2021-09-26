function randomColor() {
  const red = Math.floor(Math.random() * Math.floor(256));
  const green = Math.floor(Math.random() * Math.floor(256));
  const blue = Math.floor(Math.random() * Math.floor(256));

  return `rgb(${red},${green},${blue})`;
}

export default randomColor;
// //  =====================
// function backgroundColorRandom() {
//   return "rgb(" + r() + "," + r() + "," + r() + ")";
// }
// function r() {
//   return Math.round(255.0 * Math.random());
// }
