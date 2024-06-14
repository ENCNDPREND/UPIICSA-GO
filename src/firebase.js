// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBNGR4Nt1QACM0yQBlkxeqhUzt5o9nYPNY",
  authDomain: "upiicsago-5a7f9.firebaseapp.com",
  projectId: "upiicsago-5a7f9",
  storageBucket: "upiicsago-5a7f9.appspot.com",
  messagingSenderId: "370614595058",
  appId: "1:370614595058:web:dc44a8767bae00da504f6b",
  measurementId: "G-6NXKZJW2VG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);