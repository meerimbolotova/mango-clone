// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6hxHCqLMHun32Gm9JYX5P-WFXFUGWK3E",
  authDomain: "mango-pro-6a2ae.firebaseapp.com",
  projectId: "mango-pro-6a2ae",
  storageBucket: "mango-pro-6a2ae.appspot.com",
  messagingSenderId: "846760743330",
  appId: "1:846760743330:web:e530bc1a06be9bfcf062fb",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
