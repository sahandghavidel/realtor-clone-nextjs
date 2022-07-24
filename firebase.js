// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCfbM3_JH6kPSzc6-qF6fLB-5bnIdwI4N4",
  authDomain: "realtor-clone-next.firebaseapp.com",
  projectId: "realtor-clone-next",
  storageBucket: "realtor-clone-next.appspot.com",
  messagingSenderId: "835843660395",
  appId: "1:835843660395:web:e8b3d33bc95dc6b8c3ef2e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()