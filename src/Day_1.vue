<script setup>
const developer = "keerthi"
const role = 'Intern'
const location="hyderabad"
const github="https://github.com/appspirelearner/vue-day-01"
</script>

<template>
  <main class="container">
   <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"alt="githubLog"
    width="100"
    />
    <h1>Hello,i'm{{ developer }}</h1>
    <h2>{{ role }}</h2>
    <p>{{ location }}</p>
    <p>
      <strong>GitHub:</strong>
      <a :href="github" target="_blank">{{ github }}</a>
    </p>
  </main>
</template>

<style scoped>
.container {
  font-family: system-ui, sans-serif;
  text-align: center;
  padding: 4rem;
}
h1 { color: #42b883; }h1 {
  color: #42b883;
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
</style>
