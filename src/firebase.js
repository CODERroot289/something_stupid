// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMECSX7et-Tzs8tdDX8PR2bewFCHjtpPs",
  authDomain: "gurdiantech.firebaseapp.com",
  projectId: "gurdiantech",
  storageBucket: "gurdiantech.firebasestorage.app",
  messagingSenderId: "544449101651",
  appId: "1:544449101651:web:983421f7250e35424c6ba6",
  measurementId: "G-JTYPWQDQ78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
