<template>
  <div id="app">
    <h1>MemoApp</h1>
    <Memo />
  </div>
</template>

<script>
import Memo from '@/components/Memo'

export default {
  name: 'App',
  components: {
    Memo
  }
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
