<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
      <router-link to="/" class="navbar-brand">Library App</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home (Week 5)</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <div>
          <button v-if="isAuthenticated" class="btn btn-outline-danger" @click="logout">
            Logout
          </button>
          <router-link v-else to="/login" class="btn btn-outline-primary">
            Login
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { isAuthenticated } from './store/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const logout = () => {
  isAuthenticated.value = false
  router.push('/login')
}
</script>