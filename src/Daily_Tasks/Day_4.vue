<script setup>
import { ref, watch } from 'vue'
const query = ref('')
function fetchResults(searchText) {
  console.log('Fetching results for:', searchText)
}
watch(query, (newVal, oldVal) => {
  console.log(`Search changed: ${oldVal} → ${newVal}`)
  fetchResults(newVal)
})
</script>

<template>
  <div>
    <h2>Search</h2>

    <input
      v-model="query"
      type="text"
      placeholder="Type something..."
    >
    <p>typed: {{ query }}</p>
  </div>
</template>