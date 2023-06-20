field.onclick = function (event) {
  let fieldCoords = this.getBoundingClientRect();

  let ballCoords = {
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.offsetWidth / 2,
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2,
  };

  if (ballCoords.top < 0) ballCoords.top = 0;

  if (ballCoords.left < 0) ballCoords.left = 0;

  if (ballCoords.left + ball.clientWight > field.clientWight) {
    ballCoords.left = field.clientWight - ball.clientWight;
  }

  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
};
