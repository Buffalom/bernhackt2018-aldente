import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Achievement from '@/components/achievementComponent'
import Progress from '@/components/progressComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/levels',
      name: 'Achievement',
      component: Achievement
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Progress
    }
  ]
})
