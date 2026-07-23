<script setup>
import '../Styles/Day_6.css'
import { ref } from 'vue'

const count = ref(0)

const message = ref("Click the button")

function handleClick() {
  console.log("Button clicked!")

  message.value = "Form Submitted Successfully!"
}
const clickmessage =ref("To display the message")
function handleClick2(event, message) {
  console.log("Event Object:", event)
  console.log("Event Type:", event.type)
  console.log("Button Text:", event.target.textContent)
  console.log("Message:", message)

  alert(`Message: ${message}`)
}
</script>

<template>
  <!-- Inline Handler Example -->
  <p>Count : {{ count }}</p>
  <button @click="count++">Increment</button>

  <!-- Method Handler Example -->

  <p>{{ message }}</p>
  <button @click="handleClick"> Submit</button>

  <!-- $event Example -->
   <p>{{ clickmessage }}</p>
  <button @click="handleClick2($event, 'Button Clicked Successfully')">Click</button>
</template>