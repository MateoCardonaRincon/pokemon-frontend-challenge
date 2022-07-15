// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAWkV_3VK7XJElTzzGeoQs-rNHbQ11Uek",
    authDomain: "pokemon-talentzone-challenge.firebaseapp.com",
    projectId: "pokemon-talentzone-challenge",
    storageBucket: "pokemon-talentzone-challenge.appspot.com",
    messagingSenderId: "1043193907749",
    appId: "1:1043193907749:web:dd58b92dfd0a276d43cdcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()