// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore

const firebaseConfig = {
  // Your firebase config here
  apiKey: "AIzaSyAsUyvWGsYjHenTCIncQmOL_9W0gIdbHOI",
  authDomain: "esanchyan.firebaseapp.com",
  projectId: "esanchyan",
  storageBucket: "esanchyan.appspot.com",
  messagingSenderId: "540982672591",
  appId: "1:540982672591:web:09062c37a769257c9b8bba",
  measurementId: "G-2H20H91YV3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
