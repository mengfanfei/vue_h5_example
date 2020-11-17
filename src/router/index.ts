import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../views/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/qa',
        name: 'Qa',
        component: () => import('@/views/qa/index.vue')
      },
      {
        path: '/video',
        name: 'Video',
        component: () => import('@/views/video/index.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/profile/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
