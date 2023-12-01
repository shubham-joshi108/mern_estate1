// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "real-estate-f4468.firebaseapp.com",
  projectId: "real-estate-f4468",
  storageBucket: "real-estate-f4468.appspot.com",
  messagingSenderId: "790337879520",
  appId: "1:790337879520:web:e02c3f6d2647aa12153f85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);