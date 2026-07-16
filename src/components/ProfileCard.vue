<script setup>
import { ref, computed } from 'vue'

const name = ref('Keerthi')
const role = ref('intern')
const isOnline = ref(true)
const skills = ref(['Vue', 'TypeScript', 'Tailwind','html','css'])
const newSkill = ref('')

const statusClass = computed(() => ({
  'status-online': isOnline.value,
  'status-offline': !isOnline.value
}))

function addSkill() {
  if (newSkill.value.trim()) {
    skills.value.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

function removeSkill(index) {
  skills.value.splice(index, 1)
}
</script>

<template>
  <article class="card">
    <header>
      <h2>{{ name }}</h2>
      <span :class="statusClass">
        {{ isOnline ? '● Online' : '○ Offline' }}
      </span>
    </header>

    <p>{{ role }}</p>

    <button @click="isOnline = !isOnline">
      Toggle Status
    </button>

    <h3>Skills</h3>
    <ul>
      <li v-for="(skill, index) in skills" :key="skill">
        {{ skill }}
        <button @click="removeSkill(index)">×</button>
      </li>
    </ul>

    <form @submit.prevent="addSkill">
      <input v-model="newSkill" placeholder="Add a skill" />
      <button type="submit">Add</button>
    </form>
  </article>
</template>

<style scoped>
.card { max-width: 400px; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,.08); }
.status-online { color: #16a34a; }
.status-offline { color: #6b7280; }
</style>