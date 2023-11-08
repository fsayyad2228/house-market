// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvzAapq3Lif5q9uPQLIsC4YWobXIfetT0",
  authDomain: "house-market-67c54.firebaseapp.com",
  projectId: "house-market-67c54",
  storageBucket: "house-market-67c54.appspot.com",
  messagingSenderId: "514129566820",
  appId: "1:514129566820:web:341697eabf308af9df1371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();