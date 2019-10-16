<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <router-link :to="`/post/${book.slug}`">
          <h1>{{ book.id }}. {{ book.title }}</h1>
        </router-link>
        <span class="rating">({{ book.rating }}/10)</span>
      </div>
      <p class="author">{{ book.author }}</p>
      <p class="synopsis">{{ book.synopsis | truncate(200) }}</p>
      <div class="controls">
        <v-button :active="book.upvoted" />
        <span class="upvote-text">Upvoted {{ book.upvotes }} times</span>
      </div>
    </div>
    <img :src="book.cover" alt="book" />
  </div>
</template>

<script>
  import Button from './Button';

  export default {
    name: "Post",
    components: {
      'v-button': Button
    },
    props: {
      book: {
        type: Object,
        required: true
      }
    },
    filters: {
      truncate: function(value, limit) {
        if (value.length > limit) {
          value = value.substring(0, limit) + '...';
        }

        return value;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    padding: 30px;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        display: flex;
        align-items: center;

        h1 {
          color: #a97721;
          display: inline-block;
          font-size: 2rem;
          font-weight: bold;
        }

        .rating {
          font-size: 1.5rem;
          margin: 0 10px;
          color: #000000;
        }
      }

      .author {
        color: #5b5b5b;
        margin: 20px 0;
      }

      .controls {
        margin-top: 20px;

        .upvote-text {
          margin: 0 10px;
        }
      }
    }

    img {
      border-radius: 12px;
      margin-left: 30px;
      max-width: 15%;
    }
  }
</style>