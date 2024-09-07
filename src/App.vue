<template>
  <div id="app">
    <NavBar :lightColorMsg="lightColor" :darkColorMsg="darkColor" />
    <router-view
      @lightColorEvent="lightColorEvent"
      @darkColorEvent="darkColorEvent"
    />
    <YourOrdersPage/>
    

  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import YourOrdersPage from "./components/YourOrdersPage.vue";
export default {
  name: "App",
  components: {
    NavBar,
    YourOrdersPage,
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
  font-family: SF Pro, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
