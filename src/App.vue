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
      })
      .catch(err => alert(err));
  }
}
</script>

<style scoped>
  #routerView {
    height: 100vh;
  }
</style>
