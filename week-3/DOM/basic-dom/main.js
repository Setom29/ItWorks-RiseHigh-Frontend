const ball = document.getElementById("ball");

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Created by Setom29";
subHeader.classList.add("sub-header");
document.body.appendChild(subHeader);

const moveRight = function () {
  ball.style.left = (parseInt(ball.style.left) || 0) + 15 + "px";
};

const moveLeft = function () {
  ball.style.left = (parseInt(ball.style.left) || 0) - 15 + "px";
};

const moveUp = function () {
    ball.style.top = (parseInt(ball.style.top) || 0) - 15 + "px";
};
  
  const moveDown = function () {
    ball.style.top = (parseInt(ball.style.top) || 0) + 15 + "px";
};

const changeColor = function (color) {
    document.getElementById("playing-field").style.backgroundColor = color
}