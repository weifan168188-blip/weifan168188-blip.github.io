import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA394LWxxX3_mjiiKQU5GIWTGrWSHmCVfU",
  authDomain: "lion-credit-system.firebaseapp.com",
  projectId: "lion-credit-system",
  storageBucket: "lion-credit-system.firebasestorage.app",
  messagingSenderId: "720399842142",
  appId: "1:720399842142:web:b2635c6228553c28eaedcf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
