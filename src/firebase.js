import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "admin-dashboard-1549f.firebaseapp.com",
  projectId: "admin-dashboard-1549f",
  storageBucket: "admin-dashboard-1549f.appspot.com",
  messagingSenderId: "715060355226",
  appId: "1:715060355226:web:41920b69918dc6f58c3f23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
