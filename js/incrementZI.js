let lastPressRect = null;

function incrementZI(ev) {
  ev.preventDefault();

  if (lastPressRect !== null) {
    lastPressRect.style.zIndex = 0;
  }
  lastPressRect = ev.target;
  lastPressRect.style.zIndex = 100;
}

export default incrementZI;
