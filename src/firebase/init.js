// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

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

const db = getFirestore()
export default db

