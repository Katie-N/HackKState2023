// The PianoKeyClass may be most similar to an enemy. It has to be animated and its path does not depend on the user. And it will "die" when the player presses the right button.

export class PianoKeyClass {
  constructor(gameWidth, gameHeight, key) {
    // size of canvas
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    // Size of each Piano Key sprite
    this.width = 106;
    this.height = 328;

    // Initialize location
    this.offset = 54;
    this.scale = 0.75;
    this.frameX = 0;

    // this convoluted formula is what aligns the key correctly. I even came up with it myself
    let keyboardWidth = this.width * 7;
    let frameShift = this.offset * this.frameX;
    this.x = (this.gameWidth / 2) - (keyboardWidth / 2) * this.scale;
    this.y = 0;
    // This is the formula that places the key exactly inside the keyboard
    // this.y = this.gameHeight - ((this.height + (2 * this.offset)) * this.scale);

    this.image = document.getElementById("keyboardKeysSprite");


    this.draw = function(context) {
      context.drawImage(this.image, (this.frameX * this.width) + this.offset, this.offset, this.width, this.height, this.x, this.y, this.width * this.scale, this.height * this.scale);
      // context.drawImage(this.image, 0, 0, 728, 676, 0, 0, 434, 310);
    }
  }
}
