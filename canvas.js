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
