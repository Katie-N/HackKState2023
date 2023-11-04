<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>Hello World</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { WebMidi } from 'webmidi'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
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
