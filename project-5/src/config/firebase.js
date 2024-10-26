// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt-ylvwASNUaplmcz0jocP_Pwvc4Z6LgM",
  authDomain: "react-contact-61cee.firebaseapp.com",
  projectId: "react-contact-61cee",
  storageBucket: "react-contact-61cee.appspot.com",
  messagingSenderId: "331223206383",
  appId: "1:331223206383:web:d93b3d9122be8bf7ee4e1a"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);