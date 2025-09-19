<template>
  <div style="max-width: 400px; margin: 50px auto;">
    <h2>Create an Account</h2>
    <p><input type="text" placeholder="Email" v-model="email" class="form-control" /></p>
    <p><input type="password" placeholder="Password" v-model="password" class="form-control" /></p>
    <p><button @click="register" class="btn btn-success w-100">Save to Firebase</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log("✅ Firebase Register Successful!")
      alert("Register successful, please login.")
      router.push("/FireLogin")
    })
    .catch((error) => {
      console.error(error.code, error.message)
      alert("Register failed: " + error.message)
    })
}
</script>