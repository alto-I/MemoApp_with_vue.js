<template>
  <div>
    <input type="text" v-model="newTitle" placeholder="タイトル"><br>
    <textarea name="" id="" v-model="newContent" cols="30" rows="10" placeholder="本文"></textarea><br>
    <button @click="sendToData">新規登録</button>
  </div>
</template>

<script>
export default{
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
input {
  margin: 4px;
}
textarea {
  margin: 4px;
}
button {
  margin: 4px;
}
</style>
