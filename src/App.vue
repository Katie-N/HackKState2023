<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>Hello World</h1>
    <router-link to="/electricGuitarLevel">ElectricGuitarLevel</router-link>
    <router-view id="routerView"></router-view>
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
