import Vue from 'vue'
import Router from 'vue-router'

import memoList from '@/components/MemoList'
import memoCreate from '@/components/MemoCreate'
import memoDetails from '@/components/MemoDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/memo',
      component: memoList
    },
    {
      path: '/memoCreate',
      component: memoCreate
    },
    {
      path: '/memo/:memoId',
      component: memoDetails
    }
  ]
})
