<template>
  <div id="app">
    <h1><router-link :to="{ path: '/memo' }">MemoApp</router-link></h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  border: solid 1px black;
}
</style>
