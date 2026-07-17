<script setup>
import "./assets/Day_3.css"
 import { reactive} from "vue";
const user = reactive({
     name:"Pereddy Keerthi",
     age:22,
     address:"kurnool"
})
function changeName() {
    user.name = "keerthi"
    user.age =23
}
function changeAddress(){
    user.address ="hyderabad"
}
</script>
<template>
    <h1>{{ user.name}}</h1>
    <h1>{{ user.age }}</h1>
    <h1>{{ user.address }}</h1>
    <button @click="changeName">change name</button>
    <button @click="changeAddress" class="button">change address</button>

</template>