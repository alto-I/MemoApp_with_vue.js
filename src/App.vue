<template>
  <div id="app">
    <h1>MemoApp</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
input {
  width: 90%;
  margin: 4px;
}
textarea {
  width: 90%;
  margin: 4px;
}
ul {
  list-style: none;
}
button {
  margin: 4px;
}
</style>
