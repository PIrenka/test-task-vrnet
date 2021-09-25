const btnRef = document.querySelector('button[data-action="add_rectangle"]');
const boxesRef = document.getElementById("boxes");

btnRef.addEventListener("click", addRectangle);

function addRectangle() {
  let array = [];

  const rectangle = document.createElement("div");
  // rectangle.setAttribute("class", "recDiv");
  rectangle.classList.add("recDiv");

  array.push(rectangle);
  boxesRef.append(...array);
}

boxesRef.addEventListener("click", lookClick);

function lookClick(event) {
  event.preventDefault();

  const clickedBox = boxesRef.querySelector(".recDiv");

  if (event.target.className === "recDiv") {
    return event.target.classList.add("clicked");
  }
  console.log("try more....");
}
