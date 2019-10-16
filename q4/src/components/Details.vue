<template>
  <div class="container">
    <header>
      <div>
        <h1>Details page: {{ book.author }}</h1>
      </div>
    </header>
  </div>
</template>

<script>
  import { getBookBySlug } from "../api";

  export default {
    name: "Details",
    data() {
      return {
        book: {}
      }
    },
    created() {
      getBookBySlug(this.$route.params.slug)
        .then(({ data }) => {
          this.book = data;
        })
        .catch(error => console.log('ee', error))
    }
  }
</script>

<style scoped lang="scss">
  .container {
    background-color: #ffffff;
    padding: 30px;
  }
</style>