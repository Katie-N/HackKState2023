export class InputHandlerClass {
  constructor() {
    // Store the inputs
    this.keys = [];

    window.addEventListener("keydown", e => {
      console.log("Received input:", e.key);
      if (!this.keys.includes(e.key)) {
        this.keys.push(e.key);
      }
      console.log("Inputs: ", this.keys);
    })

    // TODO: remove the input from keys once the midi signal is finished
  }
}
