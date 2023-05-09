// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgVb7oNGpkfJPNzi4S_h3wA78p6X13xO4",
  authDomain: "crown-clothing-db-97cb0.firebaseapp.com",
  projectId: "crown-clothing-db-97cb0",
  storageBucket: "crown-clothing-db-97cb0.appspot.com",
  messagingSenderId: "967533397614",
  appId: "1:967533397614:web:24cfdfe2bc69d82d71c87f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account", // select from the google accounts
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
