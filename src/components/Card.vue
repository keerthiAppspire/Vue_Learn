<script setup>
import {ref,computed} from"vue";
const name = "Keerthi"

const skills = [
  "HTML",
  "CSS",
  "Vue.js",
  "JavaScript"
];

const funFact = "I enjoy learning new web technologies every day!";
const darkmode=ref(false);
const search=ref("");
function toggleDarkMode(){
  darkmode.value=!darkmode.value;
}

const filterSkills=computed(()=>{
  return skills.filter(skill=>
    skill.toLowerCase().includes(search.value.toLocaleLowerCase())
  );
});
</script>

<template>
  <div class="card" :class="{dark: darkmode }">
    <h1>👋 About Me</h1>
    <h2>{{ name }}</h2>

    <button @click="toggleDarkMode">
      {{ darkmode ? "Light Mode":"Dark Mode"  }}
    </button>

    <br /><br />
    <input
       type="text"
       v-model="search"
       placeholder="search your skills"
    />
    <h3>My Skills</h3>

    <ul v-if="filterSkills.length > 0">
      <li v-for="skill in filterSkills" :key="skill">
        {{ skill }}
      </li>
    </ul>

    <p v-else>No skills found</p>
    <h3>Fun Fact</h3>

    <p>{{ funFact }}</p>
  </div>
</template>

<style scoped>
.card {
  max-width: 500px;
  margin: 40px auto;
  padding: 25px;
  text-align: center;
  border: 2px solid #42b883;
  border-radius: 12px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  transition: 0.3s;
}
.dark{
  background-color: #222;
  color: white;
  border-color: white;
}
button{
  margin: 10px 0;
  padding: 8px 16px;
  cursor:pointer;
}
input{
  padding:8px;
  width:80%;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 8px 0;
}

h1 {
  color: #42b883;
}
</style>
