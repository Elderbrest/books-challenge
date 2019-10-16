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
</style>
