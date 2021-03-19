<template>
  <div class="memolist">
    <ul>
      <li v-for="memolist in memolists" v-bind:key="memolist">
      <span class="title">{{ memolist.title }} {{ memolist.content }}</span>
      <button @click="remove(index)">削除</button>
    </li>
      <router-link to="/memoCreate">+</router-link><br>
      <input type="text" v-model="newTitle"><br>
      <input type="text" v-model="newContent"><br>
      <button @click="register()">新規登録</button>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      memolists: [],
      newTitle: null,
      newContent: null
    }
  },
  mounted () {
    if (localStorage.getItem('memolists')) {
      try {
        this.memolists = JSON.parse(localStorage.getItem('memolists'))
      } catch (e) {
        localStorage.removeItem('memolists')
      }
    }
  },
  methods: {
    register () {
      if (!this.newTitle || !this.newContent) {
        return
      }
      const todo = { title: this.newTitle, content: this.newContent }
      this.memolists.push(todo)
      this.newTitle = ''
      this.newContent = ''
      this.save()
    },
    remove (index) {
      this.memolists.splice(index, 1)
      this.save()
    },
    save () {
      const parsed = JSON.stringify(this.memolists)
      localStorage.setItem('memolists', parsed)
    }
  }
}
</script>

<style scoped>
.memolist {
  border: solid 1px green;
  margin: 4px
}
</style>
