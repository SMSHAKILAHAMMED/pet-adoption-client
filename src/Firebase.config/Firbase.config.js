
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhtPl0_WM_gD6ssvnooNSuYlOlWkdfYZg",
  authDomain: "pet-adoption-ba336.firebaseapp.com",
  projectId: "pet-adoption-ba336",
  storageBucket: "pet-adoption-ba336.appspot.com",
  messagingSenderId: "268231652685",
  appId: "1:268231652685:web:513b0247ac2cf176983304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };
