<template>
  <div>
    <input type="text" v-model="memo.title" placeholder="タイトル" /><br />
    <textarea
      v-model="memo.content"
      rows="10"
      placeholder="本文"
    ></textarea
    ><br />
    <button @click="sendToData">編集</button>
    <button @click="remove">削除</button>
  </div>
</template>

<script>
export default {
  props: {
    memo: {
      type: Object
    },
    index: {
      type: Number
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
      this.$emit('edit', this.index, this.memo.title, this.memo.content)
      this.newTitle = ''
      this.newContent = ''
    },
    remove () {
      this.$emit('remove', this.index)
    }
  }
}
</script>
