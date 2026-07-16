<script setup>
import MySkills from "./components/MySkills.vue"
const developer = "keerthi"
const role = 'Intern'
const location="hyderabad"
const github="https://github.com/appspirelearner/vue-day-01"
const today = new Date().toLocaleDateString()
</script>

<template>
  <main class="container">
   <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"alt="githubLog"
    width="100"
    />
    <h1>Hello,I'm{{ developer }}</h1>
    <h2>{{ role }}</h2>
    <p>{{ location }}</p>
    <p>
      <strong>GitHub:</strong>
      <a :href="github" target="_blank">{{ github }}</a>
    </p>
    <MySkills />
    <hr />
     <footer>
      <p>Today's Date: {{ today }}</p>
    </footer>
  </main>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  text-align: center;
  background-color: lightblue;
  border-radius: 12px;
  font-family: Arial, sans-serif;
}

a {
  color: #42b883;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  margin-bottom: 1rem;
}


h1 {
  color: #42b883;
}

footer {
  margin-top: 40px;
  font-weight: bold;
}
</style>
