<script setup>
import { ref, computed } from 'vue'
import '../Styles/Day_5.css'
const newTask = ref('')
const filter = ref('all')   
const tasks = ref([])
let nextId = 1

function addTask() {
  if (!newTask.value.trim()) return
  tasks.value.unshift({ id: nextId++, text: newTask.value, done: false })
  newTask.value = ''
}

function removeTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

function toggle(task) {
  task.done = !task.done
}

const visibleTasks = computed(() => {
  if (filter.value === 'active') return tasks.value.filter(t => !t.done)
  if (filter.value === 'done') return tasks.value.filter(t => t.done)
  return tasks.value
})

const stats = computed(() => ({
  total: tasks.value.length,
  done: tasks.value.filter(t => t.done).length
}))
</script>

<template>
  <section class="board">
    <form @submit.prevent="addTask">
      <input v-model="newTask" placeholder="What needs doing?" />
      <button>Add</button>
    </form>

    <nav class="filters">
      <button
        v-for="f in ['all', 'active', 'done']"
        :key="f"
        :class="{ active: filter === f }"
        @click="filter = f"
      >{{ f }}</button>
    </nav>

    <p v-if="stats.total === 0">No tasks yet — add one above.</p>

    <TransitionGroup tag="ul" name="task" class="tasks">
      <li
        v-for="task in visibleTasks"
        :key="task.id"
        :class="{ done: task.done }"
      >
        <input type="checkbox" :checked="task.done" @change="toggle(task)" />
        <span>{{ task.text }}</span>
        <button @click="removeTask(task.id)">×</button>
      </li>
    </TransitionGroup>

    <footer v-if="stats.total > 0">
      {{ stats.done }} / {{ stats.total }} complete
    </footer>
  </section>
</template>

