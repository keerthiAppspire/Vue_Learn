<script setup>
import '../Styles/Day_6.css'
import { ref, reactive } from 'vue'

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

const leftClick = () => {
  alert("Left Click")
}
const rightClick = () => {
  alert("Right Click")
}
const middleClick = () => {
  alert("Middle Click")
}

const msg = ref('')
 
 const agreed = ref(false)

 const skills = ref([])
  
  const role = ref('')

  const county = ref('')

  const languages = ref([])

  const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      console.log("Selected file:", file.name)
      alert(`Selected file: ${file.name}`)
    }
  }
  const lazyMsg = ref('')

  const age = ref(null)

  const trimmedMsg = ref('')
  
  const form = reactive({ email: '', password: '' })

  function submit() {
     console.log('Submitting', form)
     alert('Form Submitted')
}

</script>

<template>
  <h3>Methods vs Inline Handlers</h3>
  <!-- Inline Handler Example -->
  <p>Count : {{ count }}</p>
  <button @click="count++">Increment</button>
  <!-- Method Handler Example -->
  <p>{{ message }}</p>
  <button @click="handleClick"> Submit</button>
  <!-- $event Example -->
   <p>{{ clickmessage }}</p>
  <button @click="handleClick2($event,'Button Clicked Successfully')">Click</button>
<hr>
  <h3>Mouse Button Modifiers</h3>
  <button @click.left="leftClick">
    Left Click
  </button>
  <button @click.right.prevent="rightClick">
    Right Click
  </button>
  <button @click.middle="middleClick">
    Middle Click
  </button>
  <hr>
    <h3>v-model on Every Input Type</h3>
    <h4>1.Text / textarea:</h4>
   <input
    v-model="msg"
    placeholder="Enter your message"
  >
  <p>You entered: {{ msg }}</p>
  <h4>2.Checkbox (single):</h4>
  <input type="checkbox" v-model="agreed" />
   I agree to the Terms & Conditions
  <p>Checkbox Value: {{ agreed }}</p>
  <h4>3.Checkbox (array):</h4>
  <label>
    <input type="checkbox" v-model="skills" value="Vue" />
    Vue
  </label>
  <label>
    <input type="checkbox" v-model="skills" value="React" />
    React
  </label>
  <label>
    <input type="checkbox" v-model="skills" value="JavaScript" /> 
      JavaScript
  </label>
  <p>Selected Skills: {{ skills }}</p>
  <h4>4.Radio Buttons:</h4>
  <label>
    <input type="radio" v-model="role" value="user" />
    User
  </label>
  <label>
    <input type="radio" v-model="role" value="admin" />
    Admin
  </label>
  <p>Selected Role: {{ role }}</p>
  <h4>5.Select</h4>
  <select v-model="county">
    <option disabled value="">Select</option>
    <option >India</option>
    <option >Germany</option>
    <option >USA</option>
  </select>
  <h4>6.Multi Select</h4>
  <select v-model="languages" multiple>
    <option >English</option>
    <option >Hindi</option>
    <option >Telugu</option>
    <option >Tamil</option>
  </select>
    
  <p>Selected Languages: {{ languages }}</p>
  <h4>7.File:</h4>
  <input type="file" @change="onFileChange" />
  <hr>
  <h3> 6. v-model Modifiers</h3>
   <h4>1. lazy Modifier</h4>
    <input v-model.lazy="msg" placeholder="Type here" /> 
      <p>Message: {{ msg }}</p>
   <h4>2. number Modifier</h4>
    <input v-model.number="age"  />
        <p>Age: {{ age }}</p>      
        <p>Age: {{ typeof age }}</p>
   <h4>3. trim Modifier</h4>
    <input v-model.trim="msg" placeholder="Type here" /> 
      <p>Message: {{ msg }}</p>
      <hr>
  <h3>7. Form Submission</h3>
    <form @submit.prevent="submit">
      <p>enter your email and password:</p>
    <input class="input" v-model.trim="form.email" type="email" required placeholder="Email" />
    <br></br>
    <input v-model="form.password" type="password" required minlength="8" placeholder="Password" />
    <button type="submit">Sign in</button>
  </form>
  <hr>

</template>
