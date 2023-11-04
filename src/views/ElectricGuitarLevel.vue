<template>
  <main>
    <img id="playerInstrument" src="/src/assets/electricGuitar.png" alt="">
    <img id="enemy" src="/src/assets/electricGuitar.png" alt="">
  </main>
</template>

<style scoped>
main {
  background-image: url(/src/assets/bluerockbg.png);
  background-position: center;
  background-size: cover;
  /* display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: 1fr; */
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}

#enemy {
  transform: rotate(45deg) scale(50%);
  /*grid-column: 3;
  place-self: center;*/
  align-self: flex-start;
}

#playerInstrument {
  transform: rotate(-45deg) scale(80%);
  /*grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end; */
  align-self: flex-end;
}
</style>
