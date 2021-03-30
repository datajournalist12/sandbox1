<template>
  <p>Hello world!</p>
  <p>{{counter}}</p>
</template>

<script lang="ts">
export default {
  computed: {
    counter() {
      return this.$store.counter
    }
  }
}
</script>

<style scoped>

</style>
