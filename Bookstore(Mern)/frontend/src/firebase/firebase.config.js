// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASEAPIKEY, FIREBASEAUTHDOMAIN, FIREBASEPROJECTID, FIREBASESTORAGEBUCKET, FIREBASEMESSAGINGSENDERID, FIREBASEAPPID } from "../config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: FIREBASEAPIKEY,
    authDomain: FIREBASEAUTHDOMAIN,
    projectId: FIREBASEPROJECTID,
    storageBucket: FIREBASESTORAGEBUCKET,
    messagingSenderId: FIREBASEMESSAGINGSENDERID,
    appId: FIREBASEAPPID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;