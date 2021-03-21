<template>
  <div class="memo">
    <div class="memolist">
      <ul>
        <li v-for="(memolist, index) in memolists" v-bind:key="index">
          <button class="link-style-btn">{{ memolist.title }}</button>
        </li>
        <li><button class="link-style-btn">+</button></li>
      </ul>
    </div>
    <div class="memodetails" v-if="create">
        <!-- <button @click="remove(index)">削除</button> -->
        <Create @create='register'/>
        <Edit/>
    </div>
  </div>
</template>

<script>
import Create from '@/components/MemoCreate'
import Edit from '@/components/MemoEdit'

export default {
  components: {
    Create,
    Edit
  },
  data () {
    return {
      memolists: [],
      create: true
    }
  },
  computed: {
    newmemolists: function () {
      return this.memolists
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
    register (newTitle, newContent) {
      let lastMemo = this.memolists.slice(-1)[0]
      const newMemo = { id: null, title: newTitle, content: newContent }
      if (this.memolists.length === 0) {
        newMemo.id = 1
      } else {
        const id = lastMemo.id + 1
        newMemo.id = id
      }
      this.memolists.push(newMemo)
      this.save()
    },
    remove (index) {
      this.memolists.splice(index, 1)
      this.save()
    },
    save () {
      const parsed = JSON.stringify(this.memolists)
      localStorage.setItem('memolists', parsed)
    },
    test (newTitle, newContent) {
      console.log(newTitle, newContent)
    }
  }
}
</script>

<style scoped>
.memo {
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
button {
  margin: 4px;
}
ul {
  list-style: none;
}
button.link-style-btn{
  cursor: pointer;
  border: none;
  background: none;
  color: #0033cc;
}
button.link-style-btn:hover{
  text-decoration: underline;
  color: #002080;
}
</style>
