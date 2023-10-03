// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnMxb_POBEtIiTIpdUGAKCKXjApBJuZ_k",
  authDomain: "react-dragon-news-auth-2ba99.firebaseapp.com",
  projectId: "react-dragon-news-auth-2ba99",
  storageBucket: "react-dragon-news-auth-2ba99.appspot.com",
  messagingSenderId: "335900084534",
  appId: "1:335900084534:web:b5de37a4e6ef72c5180b97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;