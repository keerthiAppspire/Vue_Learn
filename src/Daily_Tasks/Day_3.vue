<script setup>
import { ref, reactive, toRefs, watch } from 'vue'
import "./components/Day_3.css"

// <!-- ==================== useCounter=====================-->
function useCounter() {
  const count = ref(0)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => (count.value = 0)

  return { count, increment, decrement, reset }
}

const { count, increment, decrement, reset } = useCounter()
// <!-- ==================== User Profile=====================-->
const user = reactive({
  name: 'Keerthi',
  age: 22,
  city: 'Hyderabad'
})

const { name, age, city } = toRefs(user)

function birthday() {
  age.value++
}

// <!-- ==================== Dark Mode=====================-->
const darkMode = ref(false)

watch(darkMode, (value) => {
  document.body.classList.toggle('dark', value)
})
</script>

<template>
  <h2>Exercise 1: Counter</h2>
  <p>Count: {{ count }}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="reset">Reset</button>

  <hr>

  <h2>Exercise 2: User Profile</h2>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <p>City: {{ city }}</p>
  <button @click="birthday">Birthday</button>

  <hr>

  <h2>Exercise 3: Dark Mode</h2>
  <button  @click="darkMode = !darkMode">
    {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>
