<script setup>
import ReadMidi from './components/ReadMidi.vue'
</script>

<template>
  <div id="app">
    <router-view id="routerView"></router-view>
    <ReadMidi />
  </div>
</template>

<script>
import { WebMidi } from 'webmidi'

export default {
  name: 'App',
  mounted() {
    WebMidi
      .enable()
      .then(() => {
        console.log("WebMidi enabled!");
        console.log(WebMidi.inputs);
        console.log(WebMidi.outputs);
        this.main();
      })
      .catch(err => alert(err));
  },
  methods: {
    main () {
      // Check if a Midi device is plugged in
      if (WebMidi.inputs[0]) {
        const mySynth = WebMidi.inputs[0];
        //let referenceNote = [];

        /*
        setTimeout(() =>console.log("Bongo"), 5000);
        fetch('/src/assets/abbamidi.json')
          .then((response) => response.json())
          .then((json) => {
            console.log("JSON:", json);
            let notes = json.tracks[0].notes;
            let n = 0;
            function mango() {
              let noteValue =
              notes[n].name;

              let duration = notes[n].duration;
              n++;
              console.log(mango(noteValue));
            }

            notes.forEach (note => {
              console.log(note.duration);
              let duration = note.duration;
              setTimeout(() => {console.log (note.name)}, duration*1000 + 5000)

              // clearTimeout(bongo);
              // Array for setting time
            });
          }); */

        /* mySynth.channels[1].addListener("noteon", e => {
            if (e.note.name == referenceNote) {
              console.log(e.note.name);
            }
        }); */
      }
    },
  },
}
</script>

<style scoped>
  #routerView {
    height: 100vh;
  }
</style>
