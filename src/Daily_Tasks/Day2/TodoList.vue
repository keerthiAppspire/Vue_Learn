<script setup>
import { ref, computed } from "vue";

const todos = ref([
  { id: 1, text: "Learn Vue", completed: false },
  { id: 2, text: "Complete task", completed: false },
  { id: 3, text: "Practice Exercise", completed: false },
  { id: 4, text: "Practice Git", completed: false },
  { id: 5, text: "Build Projects", completed: false }
])
const filter = ref("all");
const visibleTodos = computed(() => {
  if (filter.value === "active") {
    return todos.value.filter(todo => !todo.completed);
  }

  if (filter.value === "done") {
    return todos.value.filter(todo => todo.completed);
  }

  return todos.value;
});

function toggleTodo(todo) {
  todo.completed = !todo.completed;
}
</script>

<template>
  <div class="card">
    <h2>Todo List</h2>
      <div class="filters">
          <button @click="filter = 'all'">All</button>
          <button @click="filter = 'active'">Active</button>
          <button @click="filter = 'done'">Done</button>
      </div>
    <TransitionGroup
  tag="ul"
  name="todo"
>
        <li
  v-for="todo in visibleTodos"
  :key="todo.text"
  @click="toggleTodo(todo)"
  :class="{ completed: todo.completed }"
>
  <input type="checkbox" :checked="todo.completed" readonly />
  {{ todo.text }}
</li>
</TransitionGroup>
  </div>
</template>

<style scoped>
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

.todo-enter-active,
.todo-leave-active {
  transition: all .3s ease;
}

.todo-enter-from,
.todo-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.todo-move {
  transition: transform .3s ease;
}
</style>  

