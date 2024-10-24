// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnQneJdrEnbA0iyIjpWINYVJFgjvQW3Kw",
  authDomain: "vite-conatact.firebaseapp.com",
  projectId: "vite-conatact",
  storageBucket: "vite-conatact.appspot.com",
  messagingSenderId: "241671078032",
  appId: "1:241671078032:web:57acd70578e417dfa95815"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);