import Vue from 'vue'
import Router from 'vue-router'

import memoList from '@/components/MemoList'
import memoCreate from '@/components/MemoCreate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: memoList
    },
    {
      path: '/memoCreate',
      component: memoCreate
    }
  ]
})
