<template>
  <div class="container">
    <h1>Top books of all time</h1>
    <input class="search" type="search" placeholder="Search..." v-model="query" />
    <ul>
      <li v-for="(book, index) in filteredBooks">
        <post :book="book" :index="index + 1" :query="query"/>
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
        books: [],
        query: ''
      }
    },
    created() {
      getBooks()
        .then(({ data }) => {
          this.books = data.books;
        })
        .catch(error => console.log('ee', error))
    },
    computed: {
      filteredBooks: function() {
        return this.books.filter(book => book.title.toLowerCase().includes(this.query) || book.synopsis.toLowerCase().includes(this.query.toLowerCase()));
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    position: relative;

    h1 {
      color: #dcaa43;
      text-align: center;
      padding: 30px 0;
      font-size: 4rem;
      font-weight: bold;
    }

    .search {
      background-color: #ffffff;
      border: 1px solid #5b5b5b;
      border-radius: 12px 0 0 12px;
      padding: 10px 20px;
      position: absolute;
      right: 0;
      top: 0;
    }

    ul {
      li {
        &:nth-child(odd) {
          background-color: #ffffff;
        }
      }
    }
  }
</style>