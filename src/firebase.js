import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRNaKgE_nK2y4l0YvG0nD38lGULJGfPU0",
    authDomain: "twitters-9af11.firebaseapp.com",
    projectId: "twitters-9af11",
    storageBucket: "twitters-9af11.appspot.com",
    messagingSenderId: "827620628355",
    appId: "1:827620628355:web:7ea753978cbb00de75c8b6",
    measurementId: "G-Z03R7M7MK2"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);