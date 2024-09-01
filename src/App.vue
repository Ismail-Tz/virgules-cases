<template>
  <div id="app">
    <NavBar :lightColorMsg="lightColor" :darkColorMsg="darkColor" />
    <router-view
      @lightColorEvent="lightColorEvent"
      @darkColorEvent="darkColorEvent"
    />
    <CheckoutPage />
    

  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import CheckoutPage from "./components/CheckoutPage.vue";
export default {
  name: "App",
  components: {
    NavBar,
    CheckoutPage 
  },
  methods: {
    lightColorEvent(lightColor) {
      this.lightColor = lightColor;
    },
    darkColorEvent(darkColor) {
      this.darkColor = darkColor;
    },
  },
  data() {
    return {
      lightColor: "",
      darkColor: "",
    };
  },
  created() {
    this.$store.dispatch("initializeBag");
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
