const ball = document.getElementById("ball");
const step = 20;

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Created by Setom29";
subHeader.classList.add("sub-header");
document.body.appendChild(subHeader);

container = document.getElementById("playing-field");

const moveRight = function () {
  if (
    step + (parseInt(ball.style.left) || 0) + ball.offsetWidth <=
    container.offsetWidth
  ) {
    ball.style.left = (parseInt(ball.style.left) || 0) + step + "px";
  }
};

const moveLeft = function () {
  if (-step + (parseInt(ball.style.left) || 0) >= 0) {
    ball.style.left = (parseInt(ball.style.left) || 0) - step + "px";
  }
};

const moveUp = function () {
  if (-step + (parseInt(ball.style.top) || 0) >= 0) {
    ball.style.top = (parseInt(ball.style.top) || 0) - step + "px";
  }
};

const moveDown = function () {
  if (
    step + (parseInt(ball.style.top) || 0) + ball.offsetHeight <=
    container.offsetHeight
  ) {
    ball.style.top = (parseInt(ball.style.top) || 0) + step + "px";
  }
};

const directions = {right: {direction: "left", sizeParam: "offsetWidth", directionBoolean: 1},
left: {direction: "left", sizeParam: "offsetWidth", directionBoolean: -1},
top: {direction: "top", sizeParam: "offsetHeight", directionBoolean: -1},
down: {direction: "top", sizeParam: "offsetHeight", directionBoolean: 1}}

const moveBall = function(way){

  let distance = (parseInt(ball.style[directions[way].direction]) || 0)
  distance += directions[way].directionBoolean * step
  if (distance >= 0 && distance < container[directions[way].sizeParam] - ball[directions[way].sizeParam])
  {ball.style[directions[way].direction] = distance + "px"}
}

const changeColor = function (color) {
  document.getElementById("playing-field").style.backgroundColor = color;
};
