<template>
  <div id="app">
    <header-component/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/header.vue";
import FooterComponent from "./components/footer.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let options = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          rad: 0.5
        }
        this.$store.dispatch("fetchStops", options);
        options.rad = 0.75
        this.$store.dispatch("fetchVehicles", options);
      });
    }
    this.$store.dispatch("fetchAchievements");
  }
};
</script>

<style lang='scss'>
@import "assets/style/main";

body {
  padding: 0;
  margin: 0;
}

html,
body,
#map {
  height: 100%;
  width: 100vw;
}
</style>
