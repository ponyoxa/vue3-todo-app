<template>
  <h2>TODO一覧</h2>
  <!-- <ul>
    <todo-item
        v-for="todo in todoStore.state.todos"
        :key="todo.id"
        :todo="todo"
        @click-title="clickTitle"
        @click-delete="clickDelete"
      >
      </todo-item>
  </ul> -->
  <suspense>
    <async-todos />
  </suspense>
  <router-link to="/new">新規作成</router-link>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import AsyncTodos from '@/components/AsyncTodos.vue'

export default defineComponent({
  // async setup () {
  //   const todoStore = inject(todoKey)
  //   if (!todoStore) {
  //     throw new Error('todoStore is not provided')
  //   }
  //   const router = useRouter()

  //   const clickDelete = (id: number) => {
  //     todoStore.deleteTodo(id)
  //   }

  //   const clickTitle = (id: number) => {
  //     router.push(`/edit/${id}`)
  //   }

  //   await todoStore.fetchTodos()

  //   return {
  //     todoStore,
  //     clickDelete,
  //     clickTitle
  //   }
  // }
  components: {
    AsyncTodos
  }
})
</script>
