<template>
  <div id="app">
    <header-component/>
    <router-view></router-view>
    <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from './components/header.vue'
import FooterComponent from './components/footer.vue'

export default {
  name: 'App',
  components: {
      HeaderComponent,
      FooterComponent
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
    position: fixed;
    left: 0;
    bottom: 5px;
    width: 100%;
    text-align: center;
}
</style>
