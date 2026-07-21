<script setup>
import { ref, computed, watch } from 'vue'
import "./Day_4.css"
const query = ref('')
const results = ref([])
const isLoading = ref(false)
const recentSearches = ref([])

const resultCount = computed(() => results.value.length)
const hasResults = computed(() => resultCount.value > 0)
const showEmptyState = computed(() =>
 query.value.length > 0 && 
 !isLoading.value && 
 !hasResults.value)
function clearRecentSearch(){
    recentSearches.value=[];
}
let debounceTimer
watch(query, (newQuery) => {
  clearTimeout(debounceTimer)
  if (!newQuery) {
    results.value = []
    return
  }
  isLoading.value = true
  debounceTimer = setTimeout(async () => {
    await new Promise(r => setTimeout(r, 400))
    results.value = ['Vue.js', 'Vite', 'java','css','html','javascript','Node.js']
    .filter(r => 
    r.toLowerCase().includes(newQuery.toLowerCase())
    )
    isLoading.value = false
    if (!recentSearches.value.includes(newQuery)) {
      recentSearches.value.unshift(newQuery)
      recentSearches.value = recentSearches.value.slice(0, 5)
    }
  }, 300)
})


watch(recentSearches, (val) => {
  localStorage.setItem('recent-searches', JSON.stringify(val))}, 
{ deep: true })
</script>

<template>
  <section class="search">
    <h2>Search Box</h2>
    <input v-model="query" placeholder="Search..." />
    <p v-if="query.length>0&&isLoading">Searching...</p>
    <p v-else-if="hasResults">{{ resultCount }} result(s)</p>
    <p v-if="showEmptyState">No matches for "{{ query }}"</p>
    <p v-if="recentSearches.length===0"> No recent searches</p>
    <ul>
      <li v-for="r in results" :key="r">{{ r }}</li>
    </ul>

    <h4>Recent Searches</h4>
    <ul>
      <li v-for="r in recentSearches" :key="r" @click="query = r">{{ r }}</li>
    </ul>
    <button v-if="recentSearches.length>0" @click="clearRecentSearch"> clearRecentSearch</button>
  </section>
</template>