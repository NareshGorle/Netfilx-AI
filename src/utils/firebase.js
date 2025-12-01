// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFL10TtpaTGHR-vwtziVDW2ze6SGqXKg8",
    authDomain: "netflix-ai-57eaf.firebaseapp.com",
    projectId: "netflix-ai-57eaf",
    storageBucket: "netflix-ai-57eaf.firebasestorage.app",
    messagingSenderId: "65528061318",
    appId: "1:65528061318:web:19ff9a0f14e8debac72007",
    measurementId: "G-WN3VPKFQ16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();