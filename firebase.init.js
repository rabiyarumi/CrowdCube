// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi_OqKgtZU22aJ3EXWjxyjhLCge3oJ5ZM",
  authDomain: "crowdcube-5d163.firebaseapp.com",
  projectId: "crowdcube-5d163",
  storageBucket: "crowdcube-5d163.firebasestorage.app",
  messagingSenderId: "862630000132",
  appId: "1:862630000132:web:46924821ae9b821f30a751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);