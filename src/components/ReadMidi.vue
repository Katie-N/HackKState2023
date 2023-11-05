<template>
  <main>
    <h1>Hi</h1>
    <button @click="main">Start Audio</button>
  </main>
</template>

<script>
import { Midi } from '@tonejs/midi';
import * as Tone from 'tone';

export default {
  data() {
    return {
      // This is the midi json we will compare user input to.
      truthMidiJson: null,
    }
  },
  methods: {
    main() {
      fetch('/src/assets/abbamidi.json')
      .then((response) => response.json())
      .then((json) => {
        this.readMidi(json);
      });
    },
    readMidi(midi) {
      this.truthMidiJson = midi;
      console.log(midi);
      console.log(Tone.now())

    	const synths = [];
      const now = Tone.now() + 0.5;
      midi.tracks.forEach(track => {
        //create a synth for each track
        const synth = new Tone.PolySynth().toDestination();
        synth.set({
          envelope: {
            attack: 0.02,
            decay: 0.1,
            sustain: 0.3,
            release: 1
          }
        });
        synths.push(synth)
        //schedule all of the events
        track.notes.forEach(note => {
          synth.triggerAttackRelease(note.name, note.duration, note.time + now - 23.287499999999998, note.velocity)
        })
      })
    },
  }
}
</script>
