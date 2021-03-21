<template>
  <div class="memo">
    <div class="memolist">
      <ul>
        <li v-for="(memolist, i) in memolists" v-bind:key="i">
          <button class="link-style-btn" @click='changeToEdit(i)'>{{ memolist.title }}</button>
        </li>
        <li><button class="link-style-btn" @click='changeToCreate'>+</button></li>
      </ul>
    </div>
    <div class="memodetails" v-if="create">
        <component :is="currentView" @send='register' v-bind:memo="memolists[index]"></component>
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
      index: null,
      currentView: 'Create',
      create: true
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
    changeToCreate () {
      this.currentView = 'Create'
    },
    changeToEdit (index) {
      this.index = index
      this.currentView = 'Edit'
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
