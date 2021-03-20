<template>
  <div class="main">
    <div class="memolist">
      <ul>
        <li v-for="(memolist, index) in memolists" v-bind:key="index">
          <router-link :to="{ path: `/memo/${memolist.id}`}">{{ memolist.title }}</router-link>
        </li>
      </ul>
      <button @click="change()">+</button>
    </div>
    <div class="memodetails" v-if="create">
      <input type="text" v-model="newTitle" placeholder="タイトル"><br>
      <textarea name="" id="" v-model="newContent" cols="30" rows="10" placeholder="本文"></textarea><br>
        <button @click="register()">新規登録</button>
        <button @click="remove(index)">削除</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      memolists: [],
      newTitle: null,
      newContent: null,
      create: false
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
    change () {
      if (!this.create) {
        this.create = true
      } else {
        this.create = false
      }
    },
    register () {
      if (!this.newTitle || !this.newContent) {
        return
      }
      let lastMemo = this.memolists.slice(-1)[0]
      const newMemo = { id: null, title: this.newTitle, content: this.newContent }
      if (this.memolists.length === 0) {
        newMemo.id = 1
      } else {
        const id = lastMemo.id + 1
        newMemo.id = id
      }
      this.memolists.push(newMemo)
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
.main {
  display: flex;
  flex-flow: center;
}
div {
  border: solid 1px green;
  margin: 4px;
  padding: 4px;
}
.memolist {
  border: solid 1px blue;
  margin: 4px;
  width: 50%;
}
.memodetails {
  width: 50%;
}
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
