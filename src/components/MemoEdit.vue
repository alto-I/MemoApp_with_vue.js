<template>
<div>
  <p>title: {{ memodetails($route.params.memoId).title }}</p>
  <p>content: {{ memodetails($route.params.memoId).content }}</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      memolists: []
    }
  },
  created () {
    if (localStorage.getItem('memolists')) {
      try {
        this.memolists = JSON.parse(localStorage.getItem('memolists'))
      } catch (e) {
        localStorage.removeItem('memolists')
      }
    }
  },
  methods: {
    memodetails (id) {
      return this.memolists.find((memo) => {
        return memo.id === parseInt(id)
      })
    }
  }
}
</script>

<style>
</style>
