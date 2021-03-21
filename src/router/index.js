import Vue from 'vue'
import Router from 'vue-router'

import memoList from '@/components/MemoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/memo',
      component: memoList
    }
  ]
})
