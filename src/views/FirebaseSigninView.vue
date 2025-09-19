<template>
  <div style="max-width: 400px; margin: 50px auto;">
    <h2>Sign in</h2>
    <p><input type="text" placeholder="Email" v-model="email" class="form-control" /></p>
    <p><input type="password" placeholder="Password" v-model="password" class="form-control" /></p>
    <p><button @click="signin" class="btn btn-primary w-100">Sign in via Firebase</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"
import { isAuthenticated, currentUser } from "../store/auth"

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()

const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log("✅ Firebase Login Successful!")
      isAuthenticated.value = true
      currentUser.value = userCredential.user
      router.push("/about") 
    })
    .catch((error) => {
      console.error(error.code, error.message)
      alert("Login failed: " + error.message)
    })
}
</script>