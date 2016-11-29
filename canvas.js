//the boilerplate canvas setup
const canvas = document.getElementById("canvas");
const draw = canvas.getContext("2d");

//the bottom part of the body

draw.beginPath();
draw.arc(200, 400, 100, 0, 2*Math.PI);
// draw.strokeStyle = ""; //not needed if filling the entire circle
draw.fillStyle = "rgb(152, 145, 158)";
draw.fill();
// draw.closePath(); //not needed if using "fill()"

//the top part of the body
