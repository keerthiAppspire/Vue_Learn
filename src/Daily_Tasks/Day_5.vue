<script setup>
import '../Styles/Day_5.css'
import { ref, computed } from 'vue'

const isAdmin = ref(false)

const user = { name: 'Alice', age: 30, city: 'Berlin' }

const search = ref('')
const users = ref([
  { id: 1, name: 'mani', active: true },
  { id: 2, name: 'sai', active: false },
  { id: 3, name: 'sumanth' , active: true}
])

const visibleUsers = computed(() =>
  users.value
    .filter(u => u.active)
    .filter(u => u.name.toLowerCase().includes(search.value.toLowerCase()))
)

const isVisible = ref(false)

const items = ref([
  { id: 1, text: 'Apple' },
  { id: 2, text: 'Banana' },
  { id: 3, text: 'Orange' }
])
function addItem() {
  items.value.push({
    id: Date.now(),
    text: 'Mango'
  })
}

function removeItem() {
  items.value.pop()
}
</script>

<template v-if="isAdmin">
    <h2>Admin Panel</h2>
    <div class="buttons">
        <button>Delete</button>
        <button>Promote</button>
    </div>
     <hr>
  <h3>v-for on Objects</h3>
    <ul>
    <li v-for="(value, key, index) in user" :key="key">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
  <hr>
  <h3>v-for with a Range</h3>
  <span v-for="n in 5" :key="n">★</span>
  <hr>
  <h3>Filtering & Sorting with Computed</h3>
  <input v-model="search" placeholder="Search users" />
  <ul>
    <li v-for="u in visibleUsers" :key="u.id">{{ u.name }}</li>
  </ul>
  <hr>
  <h3>Transitions on Conditional Elements</h3>
  <button @click="isVisible = !isVisible">Toggle</button>
  <Transition name="fade">
    <p v-if="isVisible">Hello!</p>
  </Transition>
  <hr>
  <h3> TransitionGroup for Lists</h3>
  <div class="buttons">
    <button @click="addItem">Add</button>
    <button @click="removeItem">Remove</button>
  </div>
  <TransitionGroup tag="ul" name="list">
  <li v-for="item in items" :key="item.id">
    {{ item.text }}
  </li>
</TransitionGroup>
</template>




