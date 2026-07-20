<script setup>
import {reactive , ref, computed } from 'vue'

const profile = reactive({
  name: 'Keerthi',
  role: 'Intern',
  status: true,
  skills: ['Vue', 'TypeScript','HTML', 'CSS', 'javascript','vue.js']
})
const newSkill = ref('')

const statusClass = computed(() => ({
  'status-online': profile.status,
  'status-offline': !profile.status
}))

function addSkill() {
  if (newSkill.value.trim()) {
    profile.skills.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

function removeSkill(index) {
  profile.skills.splice(index, 1)
}
</script>

<template>
  <article class="card">
    <header>
      <h2>{{ profile.name }}</h2>
      <span :class="statusClass">
        {{ profile.status ? '● Online' : '○ Offline' }}
      </span>
    </header>

    <p>{{ profile.role }}</p>

    <button @click="profile.status = !profile.status">
      Toggle Status
    </button>

    <h3>Skills</h3>
    <ul>
      <li v-for="(skill, index) in profile.skills" :key="skill">
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