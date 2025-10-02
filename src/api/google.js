// src/api/auth.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = { /* tu config */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());