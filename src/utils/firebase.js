// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA5KhtAAeJT83bkB2_pjx62ed8dhYTz1M",
  authDomain: "netflixgpt-19f47.firebaseapp.com",
  projectId: "netflixgpt-19f47",
  storageBucket: "netflixgpt-19f47.appspot.com",
  messagingSenderId: "587050083907",
  appId: "1:587050083907:web:efe46a1ea46fa3c68ad6f6",
  measurementId: "G-GP2ZF5W16B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();