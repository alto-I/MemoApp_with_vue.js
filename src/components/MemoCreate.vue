<template>
  <div>
    <input type="text" v-model="newTitle" placeholder="タイトル" /><br />
    <textarea
      v-model="newContent"
      rows="10"
      placeholder="本文"
    ></textarea
    ><br />
    <button @click="sendToData">新規登録</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTitle: null,
      newContent: null
    }
  },
  methods: {
    sendToData () {
      this.$emit('create', this.newTitle, this.newContent)
      this.newTitle = ''
      this.newContent = ''
    }
  }
}
</script>
