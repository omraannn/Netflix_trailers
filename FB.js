


import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC97JVQygYtjWVMJUCuByMzze0edpzLHUs",
    authDomain: "nxtrailers.firebaseapp.com",
    projectId: "nxtrailers",
    storageBucket: "nxtrailers.appspot.com",
    messagingSenderId: "793118085662",
    appId: "1:793118085662:web:00f7feb83676ddf653540f",
    measurementId: "G-6K2BRV4NYN"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, db };
export default firebaseApp;