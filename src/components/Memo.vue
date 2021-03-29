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
      <template v-if="currentView === 'MemoCreate'">
        <MemoCreate @create="create" />
      </template>
      <template v-if="currentView === 'MemoEdit'">
        <MemoEdit
          @edit="edit($event.index, $event.editMemo)"
          @remove="remove($event)"
          :memo="memos[index]"
          :index="index"
        ></MemoEdit>
      </template>
    </div>
  </div>
</template>

<script>
import MemoCreate from '@/components/MemoCreate'
import MemoEdit from '@/components/MemoEdit'

export default {
  components: {
    MemoCreate,
    MemoEdit
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
  computed: {
    newMemoid: function () {
      let lastMemo = this.memos.slice(-1)[0]
      const id = this.memos.length === 0 ? 1 : lastMemo.id + 1
      return id
    }
  },
  methods: {
    create (newTitle, newContent) {
      const newMemo = { id: this.newMemoid, title: newTitle, content: newContent }
      this.save(newMemo.id, newMemo)
      this.changeToHome()
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
        return alert('保存完了')
      }
    },
    saveToLocalStarage () {
      const parsed = JSON.stringify(this.memos)
      localStorage.setItem('memos', parsed)
    },
    changeToCreate () {
      this.currentView = 'MemoCreate'
    },
    changeToEdit (index) {
      this.index = index
      this.currentView = 'MemoEdit'
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
