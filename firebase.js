// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDKSYTIju5pwoc2P3Fs20KR2c0GvOL_lc",
  authDomain: "medium-clone-94aec.firebaseapp.com",
  projectId: "medium-clone-94aec",
  storageBucket: "medium-clone-94aec.appspot.com",
  messagingSenderId: "255699910790",
  appId: "1:255699910790:web:d40ef8bcd6532809ffd107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db}
