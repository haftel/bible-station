import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DevotionalsView from '@/views/DevotionalsView.vue'
import MemoryView from '@/views/MemoryView.vue'
import VersesForFeelingsView from '@/views/VersesForFeelingsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Bible Station - Scripture & Encouragement' }
  },
  {
    path: '/devotionals',
    name: 'Devotionals',
    component: DevotionalsView,
    meta: { title: 'Devotionals - Bible Station' }
  },
  {
    path: '/memory',
    name: 'Memory',
    component: MemoryView,
    meta: { title: 'Scripture Memorizer - Bible Station' }
  },
  {
    path: '/verses-for-feelings',
    name: 'VersesForFeelings',
    component: VersesForFeelingsView,
    meta: { title: 'Scripture for Every Season - Bible Station' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
