import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AllTodos from '@/views/allTodos.vue'
import AddTodo from '@/views/AddTodo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'All-Todos',
    component: AllTodos
  },
  {
    path: '/new',
    name: 'AddTodo',
    component: AddTodo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
