<template>
  <p>Hello world!</p>
  <p>{{counter}}</p>
</template>

<script lang="ts">

import store            from '../store';

export default {
  computed: {
    counter() {
      return store.getters["count"]
    }
  }
}
</script>

<style scoped>

</style>
