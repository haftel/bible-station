import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DevotionalsView from '@/views/DevotionalsView.vue'
import MemoryView from '@/views/MemoryView.vue'
import PhoneMemoryView from '@/views/PhoneMemoryView.vue'
import VersesForFeelingsView from '@/views/VersesForFeelingsView.vue'

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false
  const uaMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || '')
  return uaMobile || window.innerWidth <= 767
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Bible Station - Scripture Memory & Encouragement' }
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
    meta: { title: 'Scripture Memorizer - Bible Station' },
    beforeEnter: () => {
      if (isMobileDevice()) {
        return { path: '/memory/mobile', replace: true }
      }
    }
  },
  {
    path: '/memory/mobile',
    name: 'MobileMemory',
    component: PhoneMemoryView,
    meta: {
      title: 'Scripture Memorizer - Mobile',
      isPhoneApp: true
    }
  },
  {
    path: '/phonememory',
    redirect: '/memory/mobile'
  },
  {
    path: '/phone-memory',
    redirect: '/memory/mobile'
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
    }
    // Let the DevotionalsView component handle its own scrolling for deep links
    if (to.query.post) {
      return false
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
