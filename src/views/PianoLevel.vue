<template>
  <main>
    <!-- <canvas id="gameScreen">
    </canvas> -->
    <canvas id="gameplayCanvas">
    </canvas>
    <img id="keyboardSprite" class="hidden" src="/src/assets/keyboardSprite.png" alt="">
    <img id="keyboardKeysSprite" class="hidden" src="/src/assets/keyboardKeysSpritesheet.png" alt="">

    <div id="playerInstrumentContainer">
      <h1 id="bossLabel" class="label">Player</h1>
      <img id="playerInstrument" src="/src/assets/piano.png" alt="">
    </div>

    <div id="enemyInstrumentContainer">
      <h1 id="playerLabel" class="label">Boss</h1>
      <img id="enemyInstrument" src="/src/assets/piano.png" alt="">
    </div>
  </main>
</template>

<script type="text/javascript">
import { PianoKeyClass } from "/scripts/PianoKeyClass.js";
import { PianoClass } from "/scripts/PianoClass.js";
import { InputHandlerClass } from "/scripts/InputHandlerClass.js";

export default {
  data() {
    return {
      screenWidth: null,
      screenHeight: null,
    }
  },
  mounted() {
    // The load event listener is necessary because it ensures all of the images have been fully loaded into the DOM.
    window.addEventListener("load", e => {
      this.main();
    });
  },
  methods: {
    main() {
      let canvas = document.getElementById("gameplayCanvas");
      let ctx = canvas.getContext("2d");
      this.setupCanvas(canvas);
      console.log("canv canv");

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(animate);
      }
      // Start animation
      // animate();

      let handler = new InputHandlerClass;
      let piano = new PianoClass(canvas.width, canvas.height);
      piano.draw(ctx);
      let pianoKey = new PianoKeyClass(canvas.width, canvas.height);
      pianoKey.draw(ctx);
    },
    setupCanvas(canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log("Canvas width", canvas.width);
    },
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}

main {
  /* Background */
  background-image: url(/src/assets/pianoHall.png);
  background-position: center;
  background-size: cover;

  /* Display */
  position: absolute;
  width: 100vw;
  overflow-x: hidden;
  top: 0;
}

#playerInstrumentContainer {
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 40%;
}

#enemyInstrumentContainer {
  position: absolute;
  top: 25%;
  right: 10%;
  width: 25%;
}

#playerInstrument {
  width: 100%;
}

#enemyInstrument {
  width: 100%;
}

.label {
  color: white;
  font-family: "Press Start 2P";
  text-align: center;
  padding: 1rem;

  /* Courtesy of https://codepen.io/mireille1306/pen/BawdXzY */
  --highlight-color: #c27549;
  --shadow-color: #6e4735;
  text-shadow: 3px 1px 1px var(--highlight-color), 2px 2px 1px var(--shadow-color), 4px 2px 1px var(--highlight-color),
    3px 3px 1px var(--shadow-color), 5px 3px 1px var(--highlight-color), 4px 4px 1px var(--shadow-color),
    6px 4px 1px var(--highlight-color), 5px 5px 1px var(--shadow-color), 7px 5px 1px var(--highlight-color),
    6px 6px 1px var(--shadow-color), 8px 6px 1px var(--highlight-color), 7px 7px 1px var(--shadow-color),
    9px 7px 1px var(--highlight-color);
}


#gameplay { /* Unused */
  /* Display */
  width: 85vw;
  height: 85vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #6e4736;
  background-image: url(/src/assets/pianoCloseup.png);
  background-position: center;
  background-size: cover;
}

#gameplayCanvas {
  position: absolute;

  bottom:0;
  left:0;
  right:0;
  margin: auto;
  z-index: 10;
}
</style>
