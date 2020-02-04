import { createContext } from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: "notate-stenners.firebaseapp.com",
  databaseURL: "https://notate-stenners.firebaseio.com",
  projectId: "notate-stenners",
  storageBucket: "notate-stenners.appspot.com",
  messagingSenderId: "619324066966",
  appId: "1:619324066966:web:31d4877df0a25000f646b7",
  measurementId: "G-59NDVN32NB"
};

firebase.initializeApp(firebaseConfig);

export const fb = {
  auth: firebase.auth(),
  db: firebase.firestore(),
}

const firebaseContext = createContext()

export default firebaseContext