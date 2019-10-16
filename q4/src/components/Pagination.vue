<template>
  <div v-if="total !== 0">
    <button @click="prevPage" :disabled="current === 1">Previous</button>
    <span>{{ current }} of {{ total }}</span>
    <button @click="nextPage" :disabled="current === total">Next</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      current: {
        type: Number,
        required: true,
        default: 0
      },
      total: {
        type: Number,
        required: true,
        default: 0
      },
      nextPage: {
        type: Function,
        required: true,
        default: () => {}
      },
      prevPage: {
        type: Function,
        required: true,
        default: () => {}
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    background-color: #00a2ff;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    padding:6px 10px;
    width: 80px;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.65;
    }
  }

  span {
    font-weight: bold;
    margin: 0 20px;
  }
</style>