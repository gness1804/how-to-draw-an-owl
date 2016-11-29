let trackingMouse = true;

//allows you to track the mouse movement in order to pinpoint x and y coordinates on the page
document.onmousemove = (e) => {
    if (trackingMouse) {
        var x = e.pageX;
        var y = e.pageY;
        console.log(`The x coordinate is: ${x}`);
        console.log(`The y coordinate is: ${y}`);
    }

};
