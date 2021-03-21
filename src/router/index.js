import Vue from 'vue'
import Router from 'vue-router'

import memo from '@/components/Memo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: memo
    }
  ]
})
