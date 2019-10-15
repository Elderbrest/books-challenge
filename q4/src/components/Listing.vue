<template>
  <div>
    <h1>Top books of all time</h1>
    <ul>
      <li v-for="(book, index) in books">
        <post :book="book" :index="index + 1"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getBooks } from "../api";
  import Post from "./Post";

  export default {
    name: "Listing",
    components: {
      'post': Post
    },
    data() {
      return {
        books: []
      }
    },
    created() {
      getBooks()
        .then(({ data }) => {
          this.books = data.books;
        })
        .catch(error => console.log('ee', error))
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    color: #dcaa43;
    text-align: center;
    padding: 30px 0;
    font-size: 4rem;
    font-weight: bold;
  }

  ul {
    li {
      &:nth-child(odd) {
         background-color: #ffffff;
       }
    }
  }
</style>