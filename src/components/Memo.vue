<template>
  <div class="memo">
    <div class="memo-list">
      <ul>
        <li v-for="(memo, i) in memos" :key="i">
          <button class="link-style-btn" @click="changeToEdit(i)">
            {{ memo.title }}
          </button>
        </li>
        <li>
          <button class="link-style-btn" @click="changeToCreate">+</button>
        </li>
      </ul>
    </div>
    <div class="memo-details">
      <component
        :is="currentView"
        @create="create"
        @edit="edit"
        @remove="remove(index)"
        :memo="memos[index]"
        :index="index"
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
    create (newTitle, newContent) {
      let lastMemo = this.memos.slice(-1)[0]
      const newMemo = { id: null, title: newTitle, content: newContent }
      if (this.memos.length === 0) {
        newMemo.id = 1
      } else {
        newMemo.id = lastMemo.id + 1
      }
      this.save(newMemo.id, newMemo)
    },
    edit (index, editMemo) {
      this.save(index, editMemo)
    },
    remove (index) {
      this.memos.splice(index, 1)
      this.saveToLocalStarage()
      this.changeToHome()
      alert('削除完了')
    },
    save (index, saveMemo) {
      if (!saveMemo.title || !saveMemo.content) {
        return alert('タイトルと本文を入力してください')
      } else {
        this.memos.splice(index, 1, saveMemo)
        this.saveToLocalStarage()
        this.changeToHome()
        return alert('保存完了')
      }
    },
    saveToLocalStarage () {
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
.memo-list {
  width: 50%;
}
.memo-details {
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
