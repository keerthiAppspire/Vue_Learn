<script setup>
import { ref, computed } from "vue";

const username = ref("");
const password = ref("");

const isFormValid = computed(() => {
  return username.value !== "" && password.value !== "";
});
</script>

<template>
  <div class="card">
    <h2>Login Form</h2>

    <input
      type="text"
      placeholder="Username"
      v-model="username"
    />

    <br /><br />

    <input
      type="password"
      placeholder="Password"
      v-model="password"
    />

    <br /><br />

    <button :disabled="!isFormValid">
      Submit
    </button>
  </div>
</template>

<style scoped>
.card {
  text-align: center;
  margin-top: 50px;
}

input {
  padding: 8px;
  width: 250px;
}

button {
  padding: 10px 20px;
}
</style>