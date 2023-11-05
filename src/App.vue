<template>
  <div id="app">
    <router-view id="routerView"></router-view>
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
      const mySynth = WebMidi.inputs[0];
      mySynth.channels[1].addListener("noteon", e => {
        console.log(e.note.name);
      });
      console.log(mySynth);
      
    },
  }
}
</script>

<style scoped>
  #routerView {
    height: 100vh;
  }
</style>
