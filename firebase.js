// Firebase Config

const firebaseConfig = {
  apiKey: "AIzaSyA394LWxxX3_mjiiKQU5GIWTGrWSHmCVfU",
  authDomain: "lion-credit-system.firebaseapp.com",
  projectId: "lion-credit-system",
  storageBucket: "lion-credit-system.firebasestorage.app",
  messagingSenderId: "720399842142",
  appId: "1:720399842142:web:b2635c6228553c28eaedcf"
};

firebase.initializeApp(firebaseConfig);

window.db = firebase.firestore();
window.auth = firebase.auth();
