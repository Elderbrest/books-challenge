<template>
  <div>
    <div class="container">
      <h1>Top books of all time</h1>
      <input class="search" type="search" placeholder="Search..." v-model="query" />
      <ul>
        <li v-for="book in paginatedBooks">
          <post :book="book" :query="query"/>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <pagination
        :current="currentPage"
        :total="pageCount"
        :prevPage="prevPage"
        :nextPage="nextPage"
      />
    </div>
  </div>
</template>

<script>
  import { getBooks } from "../api";
  import Post from "./Post";
  import Pagination from "./Pagination";

  export default {
    name: "Listing",
    components: {
      'post': Post,
      'pagination': Pagination
    },
    data() {
      return {
        books: [],
        query: '',
        currentPage: 1,
        itemsOnPage: 3
      }
    },
    created() {
      getBooks()
        .then(({ data }) => {
          this.books = data.books.map((item, index) => {
            item.id = index + 1;
            return item;
          });
        })
        .catch(error => console.log('ee', error))
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.pageCount) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
    },
    computed: {
      filteredBooks: function() {
        this.currentPage = 1;
        return this.books.filter(book => book.title.toLowerCase().includes(this.query) || book.synopsis.toLowerCase().includes(this.query.toLowerCase()));
      },
      pageCount: function() {
        return Math.ceil(this.filteredBooks.length / this.itemsOnPage);
      },
      paginatedBooks: function() {
        const end = this.currentPage * this.itemsOnPage;
        const start = end - this.itemsOnPage;

        return this.filteredBooks.slice(start, end)
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);
    margin: 0 auto;
    max-width: 1024px;
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

  .pagination {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
</style>