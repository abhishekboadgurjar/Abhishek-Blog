import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "abhishek-blog-3a2fd.firebaseapp.com",
  projectId: "abhishek-blog-3a2fd",
  storageBucket: "abhishek-blog-3a2fd.appspot.com",
  messagingSenderId: "828528997384",
  appId: "1:828528997384:web:a922ae751d6c6195390dbd",
  measurementId: "G-6QHV0JELZB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
