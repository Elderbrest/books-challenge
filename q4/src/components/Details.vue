<template>
  <div class="container">
    <header>
      <div>
        <h1>Details page: {{ book.title }}</h1>
        <span class="author">{{ book.author }}</span>
      </div>
      <div>
        <span class="upvote-text">Upvoted {{ book.upvotes }} times</span>
        <v-button :active="book.upvoted" />
      </div>
    </header>
    <img :src="book.cover || '../assets/book-placeholder.png'" alt="book" />
    <div>
      <h2>Synopsis</h2>
      <p class="synopsis">{{ book.synopsis }}</p>
      <p class="rating">Rating: {{ book.rating }}/10</p>
    </div>
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
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);
    margin: 0 auto;
    max-width: 1024px;
    padding: 30px;
    position: relative;

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

    img {
      border-radius: 12px;
      display: flex;
      margin: 30px auto;
      width: 45%;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .synopsis {
      margin: 30px 0;
    }

    .rating {
      font-weight: bold;
    }
  }
</style>