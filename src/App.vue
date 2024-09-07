<template>
  <div id="app">
    <NavBar :lightColorMsg="lightColor" :darkColorMsg="darkColor" />
    <router-view
      @lightColorEvent="lightColorEvent"
      @darkColorEvent="darkColorEvent"
    />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
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
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      this.$store.commit("SET_ORDERS", JSON.parse(savedOrders));
    }
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
