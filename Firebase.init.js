// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ZIUj3QzE-2mozG1lS20Yt5XWh2-X0Nk",
  authDomain: "authpracticewithprivateroutes.firebaseapp.com",
  projectId: "authpracticewithprivateroutes",
  storageBucket: "authpracticewithprivateroutes.firebasestorage.app",
  messagingSenderId: "386507523613",
  appId: "1:386507523613:web:1fe4642263de2fbc2d28f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const auth = getAuth(app);