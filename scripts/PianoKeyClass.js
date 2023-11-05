// The PianoKeyClass may be most similar to an enemy. It has to be animated and its path does not depend on the user. And it will "die" when the player presses the right button.

export class PianoKeyClass {
  constructor(gameWidth, gameHeight, key) {
    // size of canvas
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    // Size of each Piano Key sprite
    this.width = 104;
    this.height = 676;

    // Initialize location
    this.x = 0;
    this.y = 0;

    this.image = document.getElementById("pianoKeySpritesheet");
    this.frameX = 0;

    this.draw = function(context) {
      // context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
      context.drawImage(this.image, 0, 0, 728, 676, 0, 0, 434, 310);
    }
  }
}
