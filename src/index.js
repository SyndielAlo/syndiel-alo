// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnIdf5yGlSW-598ZkC3JxtDo5F0gedJ10",
  authDomain: "syndiel-alo.firebaseapp.com",
  projectId: "syndiel-alo",
  storageBucket: "syndiel-alo.appspot.com",
  messagingSenderId: "872396477447",
  appId: "1:872396477447:web:e19db45076601cfcc946a2",
  measurementId: "G-DJXYRXGJWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)