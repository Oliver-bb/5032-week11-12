<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
    <router-link to="/" class="navbar-brand">Library App</router-link>

    
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">Home (Week 5)</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
      </ul>
      <div>
        <button v-if="isAuthenticated" class="btn btn-outline-danger" @click="logout">
          Logout
        </button>
        <router-link v-else to="/FireLogin" class="btn btn-outline-primary">
          Login
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { isAuthenticated, currentUser } from "../store/auth"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "vue-router"

const auth = getAuth()
const router = useRouter()

const logout = () => {
  signOut(auth).then(() => {
    isAuthenticated.value = false
    currentUser.value = null
    router.push("/FireLogin")
  })
}
</script>
