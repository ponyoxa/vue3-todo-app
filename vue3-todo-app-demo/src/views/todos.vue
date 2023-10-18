<template>
  <h2>TODO一覧</h2>
  <ul>
    <li v-for="todo in todoStore.state.todos" :key="todo.id">
      {{ todo.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { todoKey } from '@/store/todo'
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup () {
    const todoStore = inject(todoKey)
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }
    return {
      todoStore
    }
  }
})
</script>
