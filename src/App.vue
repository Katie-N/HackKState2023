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
      let referenceNote = [];

      //setTimeout(console.log("poopies"), 100000);
      //let parsedJSON;
      fetch('/src/assets/abbamidi.json')
        .then((response) => response.json())
        .then((json) => {
          console.log("JSON:", json);
          //parsedJSON = json;
          let notes = json.tracks[0].notes;
          notes.forEach (note => {
            console.log(note.name);
            let duration = note.duration;
          });
          
          let noted = notes.name;
              //notes.forEach(time => { 
              // setTimeout(console.log (noted , duration + 5000))}); 
        });     
        
      mySynth.channels[1].addListener("noteon", e => {
          if (e.note.name == referenceNote) {
            console.log(e.note.name);
          }
        }); 
    },
  },
}
</script>
