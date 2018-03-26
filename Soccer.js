var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;

function drawField(){
  ctx.fillStyle="#008000";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(200,75,5,303);

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(637,75,5,303);

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(0,75,200,5);
  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(0,373,200,5);

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(637,75,200,5);
  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(637,373,200,5);

  ctx.fillStyle="#FFFFFF"
  ctx.fillRect(419,0,5,453);

  ctx.strokeStyle="#FFFFFF"
  ctx.lineWidth = 5;
  ctx.beginPath();
	ctx.arc(421,226,80,0,2*Math.PI);
	ctx.stroke();
  }

drawField();
