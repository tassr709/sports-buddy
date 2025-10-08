// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAIjqRYSzhums7Zuz5orjEtrlSnQJSkFw",
  authDomain: "sports-buddy-b06c4.firebaseapp.com",
  projectId: "sports-buddy-b06c4",
  storageBucket: "sports-buddy-b06c4.firebasestorage.app",
  messagingSenderId: "1012975181581",
  appId: "1:1012975181581:web:57e72601825b33d9c39a44",
  measurementId: "G-9C83BXWFHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);