import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'


// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB_7tu3NOAcXushC3YQHOKmrGarYVFfdAc",
  authDomain: "eteclab-71767.firebaseapp.com",
  projectId: "eteclab-71767",
  storageBucket: "eteclab-71767.appspot.com",
  messagingSenderId: "851219711728",
  appId: "1:851219711728:web:b55ddee40bcad41f6ca435"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

export {auth}
