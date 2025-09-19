<template>
  <div class="login container mt-5">
    <h1 class="text-center">Login</h1>
    <form @submit.prevent="handleLogin" class="mt-4">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input v-model="username" type="text" class="form-control" id="username" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" />
      </div>
      <div v-if="error" class="text-danger mb-3">{{ error }}</div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated } from '../store/auth' 

const username = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

const handleLogin = () => {
  if (username.value === 'admin' && password.value === 'password123') {
    isAuthenticated.value = true
    router.push('/about') 
  } else {
    error.value = 'Invalid username or password'
  }
}
</script>