// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginauthentication-9549a.firebaseapp.com",
  projectId: "loginauthentication-9549a",
  storageBucket: "loginauthentication-9549a.firebasestorage.app",
  messagingSenderId: "977477428777",
  appId: "1:977477428777:web:abf7677acd6e1b0cc75e38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
