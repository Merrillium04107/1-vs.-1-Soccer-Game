var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;

function drawField(){
  ctx.fillStyle="#008000";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(canvas.width/4,canvas.height/6,5,canvas.height*(4/6));

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(canvas.width*(3/4) -5,canvas.height/6,5,canvas.height*(4/6));

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(0,canvas.height/6,canvas.width/4 + 1,5);
  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(0,canvas.height*(5)/6 - 5,canvas.width/4 + 1,5);

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(canvas.width*(3/4) -5,canvas.height/6,canvas.width/4 + 5,5);
  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(canvas.width*(3/4) -5,canvas.height*(5)/6 - 5,canvas.width/4 + 5,5);

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(canvas.width/2,0,5,canvas.height);

  ctx.strokeStyle="#FFFFFF"
  ctx.lineWidth = 5;
  ctx.beginPath();
	ctx.arc(canvas.width/2 + 2.5,canvas.height/2 + 5,canvas.height/5,0,2*Math.PI);
	ctx.stroke();
  }

function drawGoalOne(){
  ctx.fillStyle="#000000"
  ctx.fillRect(0,canvas.height*(2/5),5,canvas.height*(1/5));
  }

function drawGoalTwo(){
  ctx.fillStyle="#000000"
  ctx.fillRect(canvas.width - 5,canvas.height*(2/5),5,canvas.height*(1/5));
  }

function drawBall(){
  ctx.beginPath();
  ctx.arc(canvas.width/2 + 2.5,canvas.height/2 + 5,canvas.height/20,0,2*Math.PI);
  ctx.fillStyle = "#FFFFFF"
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle="#FFFFFF"
  ctx.stroke();
}

function drawPlayerOne(){
  ctx.fillStyle="#FF0000"
  ctx.fillRect(canvas.width/8,canvas.height/2 - canvas.height*(1/16),canvas.width/60,canvas.height*(1/8));
}

function drawPlayerTwo(){
  ctx.fillStyle="#0000FF"
  ctx.fillRect(canvas.width*(7/8),canvas.height/2 - canvas.height*(1/16),canvas.width/60,canvas.height*(1/8));
}

drawField();
drawGoalOne();
drawGoalTwo();
drawBall();
drawPlayerOne();
drawPlayerTwo();
