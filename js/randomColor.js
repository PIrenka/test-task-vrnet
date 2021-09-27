function getRandomColor() {
  const red = Math.floor(Math.random() * Math.floor(256));
  const green = Math.floor(Math.random() * Math.floor(256));
  const blue = Math.floor(Math.random() * Math.floor(256));

  return `rgb(${red},${green},${blue})`;
}

export default getRandomColor;
