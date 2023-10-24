import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AllTodos from '@/views/allTodos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'All-Todos',
    component: AllTodos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
