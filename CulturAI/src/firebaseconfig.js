
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChlYE4WtkP9rC5HiNDJ7ZS6u38yu9s3Mg",
  authDomain: "culturai-c29cf.firebaseapp.com",
  projectId: "culturai-c29cf",
  storageBucket: "culturai-c29cf.appspot.com",
  messagingSenderId: "180432382292",
  appId: "1:180432382292:web:e22856269a44e0ef3400c1",
  measurementId: "G-125Q9DC6CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export{auth};