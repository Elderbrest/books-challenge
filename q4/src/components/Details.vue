<template>
  <div class="container">
    <header>
      <div>
        <h1>Details page: {{ book.title }}</h1>
        <span class="author">{{ book.author }}</span>
      </div>
      <div>
        <span class="upvote-text">Upvoted 8882</span>
        <v-button :active="book.upvoted" />
      </div>
    </header>
  </div>
</template>

<script>
  import { getBookBySlug } from "../api";
  import Button from "./Button";

  export default {
    name: "Details",
    components: {
      'v-button': Button
    },
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

    header {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;

      h1 {
        color: #a97721;
        font-size: 2rem;
        font-weight: bold;
      }

      .author {
        color: #5b5b5b;
        margin: 10px 0;
      }

      .upvote-text {
        margin: 0 10px;
      }
    }
  }
</style>