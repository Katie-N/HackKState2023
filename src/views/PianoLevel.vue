<template>
  <main>
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

<style scoped>
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

#playerLabel {

}

#enemyLabel {

}
</style>
