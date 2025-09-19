// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'


import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"   





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu09QMmnje65-GW6JF5NohzbUsb7RSOqw",
  authDomain: "week7-yiwei-5d84d.firebaseapp.com",
  projectId: "week7-yiwei-5d84d",
  storageBucket: "week7-yiwei-5d84d.firebasestorage.app",
  messagingSenderId: "108839473288",
  appId: "1:108839473288:web:dec2b18d1697d7e7ed4f3d"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')

