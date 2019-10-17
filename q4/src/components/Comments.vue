<template>
  <div>
    <h2>Comments</h2>
    <ul>
      <li v-for="comment in comments">
        <p class="author">{{ comment.author }}</p>
        <p class="message">{{ comment.message }}</p>
      </li>
    </ul>
    <form @submit.prevent="handleSubmit">
      <div class="form-row">
        <input
          type="text"
          name="author"
          v-model="author"
          @keypress="errors.author = false"
          placeholder="Author"
        />
        <p class="error-message" v-if="errors.author">This field is required</p>
      </div>
      <div class="form-row">
        <textarea
          name="message"
          cols="30"
          rows="6"
          v-model="message"
          @keypress="errors.message = false"
          placeholder="Message..."
        >
        </textarea>
        <p class="error-message" v-if="errors.message">This field is required</p>
      </div>
      <div class="form-row">
        <button type="submit">Send comment</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Comments",
    data() {
      return {
        author: '',
        message: '',
        errors: {
          author: false,
          message: false
        }
      }
    },
    methods: {
      handleSubmit() {
        if (!this.author.trim().length) {
          this.errors.author = true;
        } else if (!this.message.trim().length) {
          this.errors.message = true;
        } else {
          this.$store.commit({
            type: 'addComment',
            author: this.author,
            message: this.message,
            slug: this.$route.params.slug
          });

          this.cleanFields();
        }
      },
      cleanFields() {
        this.author = '';
        this.message = '';
      }
    },
    computed: {
      comments() {
        return this.$store.getters.getCommentsBySlug(this.$route.params.slug);
      }
    }
  }
</script>

<style scoped lang="scss">
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
    background-color: #00a2ff;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    padding: 10px 20px;
  }

  .form-row {
    margin: 20px 0 0 0;
  }

  .author {
    font-weight: bold;
    margin-top: 20px;
  }

  .message {
    margin-top: 10px;
  }

  .error-message {
    color: red;
    font-weight: bold;
    margin-top: 6px;
  }

  input, textarea {
    background-color: #ffffff;
    border: 1px solid #5b5b5b;
    border-radius: 8px;
    padding: 6px 14px;
  }
</style>