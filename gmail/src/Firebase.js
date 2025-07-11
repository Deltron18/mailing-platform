// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH0FFNhTYCekdIoOsE_90MuBYQwM6MlWE",
  authDomain: "fir-e8842.firebaseapp.com",
  projectId: "fir-e8842",
  storageBucket: "fir-e8842.firebasestorage.app",
  messagingSenderId: "223435438459",
  appId: "1:223435438459:web:85a4e5348607066b2aa5de",
  measurementId: "G-T8BZLDRP4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
