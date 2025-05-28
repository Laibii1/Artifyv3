// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_Mt6Ghupjh4QNHFDSZWNFo0MntRJ-Eqg",
  authDomain: "artify-f1990.firebaseapp.com",
  projectId: "artify-f1990",
  storageBucket: "artify-f1990.firebasestorage.app",
  messagingSenderId: "237779028102",
  appId: "1:237779028102:web:12f8c3ae3b18c122afa907",
  measurementId: "G-X8GDZBYDCY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// ✅ Google provider
const googleProvider = new GoogleAuthProvider();


const db = getFirestore(app);

export {app, auth, googleProvider, signInWithPopup, db};
