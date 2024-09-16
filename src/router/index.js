import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path:'/',
        name: 'home',
        component: Home
      },
      {
        path:'/about',
        name: 'about',
        component: () => import('@/views/About/index.vue')
      },
      {
        path:'/work',
        name: 'work',
        component: () => import('@/views/Work/index.vue')
      },
    ]
  })

  export default router


