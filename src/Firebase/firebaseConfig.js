// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_7s3Ftl0L7I0VOupqvWGKOL8Iq8WWxAA",
  authDomain: "proyectofinal-ecommerce-b0845.firebaseapp.com",
  projectId: "proyectofinal-ecommerce-b0845",
  storageBucket: "proyectofinal-ecommerce-b0845.appspot.com",
  messagingSenderId: "558731888425",
  appId: "1:558731888425:web:2b6326799a650d9b77d938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);