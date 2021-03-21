<template>
  <div class="memo">
    <div class="memolist">
      <ul>
        <li v-for="(memo, i) in memos" v-bind:key="i">
          <button class="link-style-btn" @click="changeToEdit(i)">
            {{ memo.title }}
          </button>
        </li>
        <li>
          <button class="link-style-btn" @click="changeToCreate">+</button>
        </li>
      </ul>
    </div>
    <div class="memodetails">
      <component
        :is="currentView"
        @create="register"
        @edit="edit"
        @remove="remove(index)"
        v-bind:memo="memos[index]"
        v-bind:index="index"
      ></component>
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
      memos: [],
      index: null,
      currentView: ''
    }
  },
  mounted () {
    if (localStorage.getItem('memos')) {
      try {
        this.memos = JSON.parse(localStorage.getItem('memos'))
      } catch (e) {
        localStorage.removeItem('memos')
      }
    }
  },
  methods: {
    register (newTitle, newContent) {
      if (!newTitle || !newContent) {
        return alert('タイトルと本文を入力してください')
      }
      let lastMemo = this.memos.slice(-1)[0]
      const newMemo = { id: null, title: newTitle, content: newContent }
      if (this.memos.length === 0) {
        newMemo.id = 1
      } else {
        newMemo.id = lastMemo.id + 1
      }
      this.memos.push(newMemo)
      this.save()
      this.changeToHome()
      setTimeout(() => {
        return alert('保存完了')
      }, 100)
    },
    edit (index, editTitle, editContent) {
      if (!editTitle || !editContent) {
        return alert('タイトルと本文を入力してください')
      }
      this.memos[index].title = editTitle
      this.memos[index].content = editContent
      this.save()
      setTimeout(() => {
        return alert('保存完了')
      }, 100)
    },
    remove (index) {
      this.memos.splice(index, 1)
      this.save()
      this.changeToHome()
      setTimeout(() => {
        return alert('削除完了')
      }, 100)
    },
    save () {
      const parsed = JSON.stringify(this.memos)
      localStorage.setItem('memos', parsed)
    },
    changeToCreate () {
      this.currentView = 'Create'
    },
    changeToEdit (index) {
      this.index = index
      this.currentView = 'Edit'
    },
    changeToHome () {
      this.currentView = ''
    }
  }
}
</script>

<style scoped>
.memo {
  display: flex;
  flex-flow: center;
}
.memolist {
  width: 50%;
}
.memodetails {
  width: 50%;
}
button.link-style-btn {
  cursor: pointer;
  border: none;
  background: none;
  color: #0033cc;
}
button.link-style-btn:hover {
  text-decoration: underline;
  color: #002080;
}
</style>
