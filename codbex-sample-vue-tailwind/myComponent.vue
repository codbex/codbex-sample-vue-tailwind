<template>
  <span class="text-1xl font-extrabold example">{{ msg }}</span>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'world!',
        color: 'blue',
      }
    }
  }
</script>

<style scoped>
  .example {
    color: v-bind('color');
  }
</style>
