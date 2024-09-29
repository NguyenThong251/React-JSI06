// Import the necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCvJ_tQaFc4iMjGwLv3oP6BI1sGT9RJV1k",
    authDomain: "zustand-3f112.firebaseapp.com",
    databaseURL: "https://zustand-3f112-default-rtdb.firebaseio.com",
    projectId: "zustand-3f112",
    storageBucket: "zustand-3f112.appspot.com",
    messagingSenderId: "282336709442",
    appId: "1:282336709442:web:40b2592f8b15b8079756db",
    measurementId: "G-7J4C7QE745"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };