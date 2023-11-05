// The PianoKeyClass may be most similar to an enemy. It has to be animated and its path does not depend on the user. And it will "die" when the player presses the right button.

export class PianoClass {
  constructor(gameWidth, gameHeight) {
    // size of canvas
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    // Size of the entire Piano sprite
    this.width = 217;
    this.height = 155;

    // Initialize location
    // starting x position such that the piano is centered: (this.gameWidth / 2) - (this.width / 2) * this.scale
    this.scale = 2;
    this.x = (this.gameWidth / 2) - (this.width / 2) * this.scale;
    // Start at the bottom of the canvas.
    this.y = this.gameHeight - (this.height * this.scale);

    this.image = document.getElementById("pianoSprite");
    // this.frameX = 0;

    this.draw = function(context) {
      // context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
      context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width * this.scale, this.height * this.scale);
    }
  }
}
