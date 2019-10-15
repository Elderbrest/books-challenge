<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  @import "sass/main";

  body {
    background-color: #fafaf3;
    font-family: 'PT Sans', sans-serif;
  }

  #app {
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);
    margin: 0 auto;
    max-width: 1024px;
  }
</style>
