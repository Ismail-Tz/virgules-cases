<template>
  <div id="app">
    <NavBar :lightColorMsg="lightColor" :darkColorMsg="darkColor"/>
    <router-view @lightColorEvent="lightColorEvent" @darkColorEvent="darkColorEvent"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  },
  methods: {
    lightColorEvent(lightColor) {
      this.lightColor = lightColor;
    },
    darkColorEvent(darkColor) {
      this.darkColor = darkColor;
    }
  },
  data() {
    return {
      lightColor: '',
      darkColor: ''
    };
  },
  
}
</script>

<style>
#app {
  font-family:Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
