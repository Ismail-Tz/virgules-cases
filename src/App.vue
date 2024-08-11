<template >
  <NavBar :lightColorMsg="lightColor" :darkColorMsg="darkColor"/>
  <ProductPage @lightColorEvent="lightColorEvent" @darkColorEvent="darkColorEvent"/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProductPage from './components/ProductPage.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    ProductPage
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
