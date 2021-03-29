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
      const editMemo = { id: this.memo.id, title: this.memo.title, content: this.memo.content }
      this.$emit('edit', {index: this.index, editMemo: editMemo})
    },
    remove () {
      this.$emit('remove', this.index)
    }
  }
}
</script>
