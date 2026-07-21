<script setup>
import { ref } from "vue";

const count = ref(0);

function increase() {
  count.value++;
}

function decrease() {
  count.value--;
}

function reset() {
  count.value = 0;
}
</script>

<template>
  <div class="card">
    <h2>Counter App :{{ count }}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped>
.card {
  text-align: center;
  margin-top: 50px;
}

button {
  margin: 10px;
  padding: 10px 20px;
}
</style>