// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM5LBhoYYwDIx7lDDu4E8plPplAe7A7kw",
  authDomain: "e-commerce-84dca.firebaseapp.com",
  projectId: "e-commerce-84dca",
  storageBucket: "e-commerce-84dca.appspot.com",
  messagingSenderId: "684659418151",
  appId: "1:684659418151:web:af9309dd5a3819c3091a02",
  measurementId: "G-YY7C0WTXCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseDB = getDatabase(app)

export default FirebaseDB