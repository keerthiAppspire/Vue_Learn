<script setup>
import { reactive, computed, ref } from 'vue'
import  '../Styles/Day_6.css'
const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'user',
  skills: [],
  agree: false,
  bio: ''
})

const submitted = ref(false)
const apiError = ref('')

const errors = computed(() => {
  const e = {}
  if (!form.name.trim()) e.name = 'Name is required'
//   if (!form.email.includes('@')) {
//        e.email = 'Email must contain @'
//  }
  if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email required'
  if (form.password.length < 8) e.password = 'At least 8 characters'
  if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords must match'
  if (form.skills.length === 0) e.skills = 'Pick at least one skill'
  if (!form.agree) e.agree = 'You must agree to the terms'
  return e
})

const isValid = computed(() => Object.keys(errors.value).length === 0)

async function submit() {
  submitted.value = true
  if (!isValid.value) return
  apiError.value = ''
  try {
    // simulate API
    await new Promise(r => setTimeout(r, 600))
    alert(`Welcome, ${form.name}!`)
  } catch (err) {
    apiError.value = 'Something went wrong. Try again.'
  }
}
</script>

<template>
  <form @submit.prevent="submit" novalidate class="signup">
    <h2>Create your account</h2>

    <label>
      Name
      <input v-model.trim="form.name" />
      <small v-if="submitted && errors.name">{{ errors.name }}</small>
    </label>

    <label>
      Email
      <input v-model.trim="form.email" type="email" />
      <small v-if="submitted && errors.email">{{ errors.email }}</small>
    </label>

    <label>
      Password
      <input v-model="form.password" type="password" />
      <small v-if="submitted && errors.password">{{ errors.password }}</small>
    </label>

    <label>
      Confirm Password
      <input v-model="form.confirmPassword" type="password" />
      <small v-if="submitted && errors.confirmPassword">{{ errors.confirmPassword }}</small>
    </label>

    <fieldset>
      <legend>Role</legend>
      <label><input type="radio" value="user" v-model="form.role" /> User</label>
      <label><input type="radio" value="admin" v-model="form.role" /> Admin</label>
    </fieldset>

    <fieldset>
      <legend>Skills</legend>
      <label v-for="s in ['Vue', 'React', 'Node', 'TypeScript']" :key="s">
        <input type="checkbox" :value="s" v-model="form.skills" /> {{ s }}
      </label>
      <small v-if="submitted && errors.skills">{{ errors.skills }}</small>
    </fieldset>

    <label>
      Bio
      <textarea v-model.lazy="form.bio" rows="3" />
    </label>

    <label class="row">
      <input type="checkbox" v-model="form.agree" />
      I agree to the terms
    </label>
    <small v-if="submitted && errors.agree">{{ errors.agree }}</small>

    <button type="submit">Create account</button>

    <p v-if="apiError" class="error">{{ apiError }}</p>
  </form>
</template>


