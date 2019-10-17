<template>
  <div class="container">
    <h1>Oops. Page not found. Come back to <router-link class="link" to="/">Home</router-link> page</h1>
  </div>
</template>

<script>
  export default {
    name: "PageNotFound"
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    min-height: 100vh;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      margin: auto;
    }

    .link {
      color: #00a2ff;
      text-decoration: underline;
    }
  }
</style>