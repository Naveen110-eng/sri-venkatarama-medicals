// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQMsf7TUB1KatX-I05S7wpJZOSbR9gJ6A",
  authDomain: "sri-venkatarama-medicals.firebaseapp.com",
  projectId: "sri-venkatarama-medicals",
  storageBucket: "sri-venkatarama-medicals.firebasestorage.app",
  messagingSenderId: "787271153070",
  appId: "1:787271153070:web:7c3382993d6e5ae868443f",
  measurementId: "G-QBKME42KB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
