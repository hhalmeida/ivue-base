import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'
import DeviceInfo from '@/views/DeviceInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/deviceInfo',
      name: 'DeviceInfo',
      component: DeviceInfo
    }
  ]
})
