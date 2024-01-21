import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2k7NhUNL4vuNixfMxSbwJXVzFVTc_xJo",
  authDomain: "smart-contact-react-app.firebaseapp.com",
  projectId: "smart-contact-react-app",
  storageBucket: "smart-contact-react-app.appspot.com",
  messagingSenderId: "882482686421",
  appId: "1:882482686421:web:5c2fc78c587c763d48b55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app)