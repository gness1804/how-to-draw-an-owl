//this lets you click anywhere on the page and see the x and y coordinates
let trackingMouse = true;

$(document).ready(() => {
  $(document).on('click', (e) => {
    if (trackingMouse) {
      let x = e.pageX;
      let y = e.pageY;
      console.log(`The x coordinate is: ${x}`);
      console.log(`The y coordinate is: ${y}`);
    }
  });
});
