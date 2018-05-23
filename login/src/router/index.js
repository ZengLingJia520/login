import Vue from 'vue'
import Router from 'vue-router'
import Registered from '@/components/registered'
import Tab from '@/components/tab'
import Logo from '@/components/logo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tab',
      component: Tab
    },
    {
      path: '/logo',
      name: 'logo',
      component: Logo
    }
  ]
})
