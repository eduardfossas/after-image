let img; // Declare variable 'img'.
let i = 0;
const arr = [
  "./assets/dress.png",
  "./assets/shoes.png",
  "./assets/jacket.png",
  "./assets/bag.png",
];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  img = loadImage(arr[0]); // Load the image
  background("#f7f7f2");
}

function doubleClicked() {
  if (i >= 3) {
    i = 0;
  } else {
    i += 1;
  }

  img = loadImage(arr[i]);
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  if (mouseY === 0) return;
  image(
    img,
    mouseX - img.width / 4,
    mouseY - img.height / 4,
    img.width / 2,
    img.height / 2
  );
}
