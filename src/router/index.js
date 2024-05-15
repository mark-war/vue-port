import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import WorkView from '@/views/WorkView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(to.hash) {
      return {el: to.hash}
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y:10}
    }
  }
})

export default router
