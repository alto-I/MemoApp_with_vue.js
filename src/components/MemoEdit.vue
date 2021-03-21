<template>
  <div>
    <input type="text" v-model="memo.title" placeholder="タイトル"><br>
    <textarea name="" id="" v-model="memo.content" cols="30" rows="10" placeholder="本文"></textarea><br>
    <button @click="sendToData">編集</button>
    <!-- <button @click="remove(index)">削除</button> -->
  </div>
</template>

<script>
export default {
  props: {
    memo: {
      type: Object
    }
  },
  data () {
    return {
      newTitle: null,
      newContent: null
    }
  },
  methods: {
    sendToData () {
      if (!this.newTitle || !this.newContent) {
        return
      }
      this.$emit('send', this.newTitle, this.newContent)
      this.newTitle = ''
      this.newContent = ''
    }
  }
}
</script>

<style>
</style>
