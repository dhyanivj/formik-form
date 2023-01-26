// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8CZYKlsoloBM5I_rFavf1608LHL5-opc",
    authDomain: "lms-2022-8f347.firebaseapp.com",
    databaseURL: "https://lms-2022-8f347-default-rtdb.firebaseio.com",
    projectId: "lms-2022-8f347",
    storageBucket: "lms-2022-8f347.appspot.com",
    messagingSenderId: "419001157216",
    appId: "1:419001157216:web:cb2eab7301870610416505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);    