//the boilerplate canvas setup
const canvas = document.getElementById("canvas");
const draw = canvas.getContext("2d");

//the bottom part of the body

draw.beginPath();
draw.arc(354, 519, 150, 0, 2*Math.PI);
// draw.strokeStyle = "//color or style"; //not needed if drawing a filled circle
draw.fillStyle = "rgb(175, 184, 190)";
draw.fill();
// draw.closePath(); //not needed if using "fill()"

//the top part of the body

draw.beginPath();
draw.arc(354, 300, 100, 0, 2*Math.PI);
draw.fillStyle = "rgb(175, 184, 190)";
draw.fill();

//the head

draw.fillStyle = "rgb(175, 184, 190)";
draw.fillRect(291, 95, 130, 130);

//left eye from viewer perspective

draw.beginPath();
draw.arc(313, 125, 15, 0, 2*Math.PI);
draw.fillStyle = "black";
draw.fill();

//right eye from viewer perspective

draw.beginPath();
draw.arc(375, 125, 15, 0, 2*Math.PI);
draw.fillStyle = "black";
draw.fill();

//the beak

draw.beginPath(); //needed when starting a shape made up of multiple lines, such as a triangle
draw.moveTo(309, 167);
draw.lineTo(336, 188);
draw.lineTo(357, 167);
draw.lineTo(309, 167);
draw.strokeStyle = "yellow";
draw.stroke();
draw.fillStyle = "yellow";
draw.fill();
//draw.closePath(); //again, not needed if using draw.fill()

//the wings

window.onload = () => {
  const imageName = document.getElementById("wing-right");
  draw.drawImage(imageName, 435, 243, 150, 150);
  const imageName2 = document.getElementById("wing-left");
  draw.drawImage(imageName2, 140, 243, 150, 150);
};
