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
import './global.css';
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
  mounted() {
    // Disable pinch-to-zoom
    document.addEventListener('touchmove', function(event) {
      if (event.scale !== 1) {
        event.preventDefault();
      }
    }, { passive: false });

    // Disable double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
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
