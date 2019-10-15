<template>
  <button @click="onClick" :class="[active ? 'active' : '']">
    {{ active ? 'Upvoted' : 'Upvote' }}
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      onClick: Function,
      active: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    background-color: #dcaa43;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    padding: 10px;

    &.active {
      background-color: #ffffff;
      border: 2px solid #dcaa43;
      color: #dcaa43;
    }
  }
</style>