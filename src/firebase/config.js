import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBb3mX0j_g1YpzVuFmC3A0EccgYjvaATrs",
    authDomain: "muro-interactivo-be0f7.firebaseapp.com",
    projectId: "muro-interactivo-be0f7",
    storageBucket: "muro-interactivo-be0f7.appspot.com",
    messagingSenderId: "97804306697",
    appId: "1:97804306697:web:a350f6cb90fc7217f8ebd8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore;