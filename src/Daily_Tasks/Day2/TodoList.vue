<script setup>
import { ref } from "vue";

const todos = ref([
  { text: "Learn Vue", completed: false },
  { text: "complete task", completed: false },
  { text: "Practice Exercise", completed: false },
  { text: "Practice Git", completed: false },
  { text: "Build Projects", completed: false }
]);

function toggleTodo(todo) {
  todo.completed = !todo.completed;
}
</script>

<template>
  <div class="card">
    <h2>Todo List</h2>

    <ul>
        <li
  v-for="todo in todos"
  :key="todo.text"
  @click="toggleTodo(todo)"
  :class="{ completed: todo.completed }"
>
  <input type="checkbox" :checked="todo.completed" readonly />
  {{ todo.text }}
</li>
</ul>
  </div>
</template>

<style scoped>
.card {
  text-align: center;
  margin-top: 50px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 10px;
}

.completed {
  color: green;
  font-weight: bold;
}
</style>  