import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB2GrhTzhfeKSiB3iaJW8djRntIuMcuxpY",
    authDomain: "ecommerce-sublimarte.firebaseapp.com",
    projectId: "ecommerce-sublimarte",
    storageBucket: "ecommerce-sublimarte.appspot.com",
    messagingSenderId: "211126795737",
    appId: "1:211126795737:web:b0b60a582734feb7af6dc8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getFirestore()

export default database;