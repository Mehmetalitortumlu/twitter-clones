import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgHNc7ZImXWsOvk-cvApaMyG90wmh8W7o",
    authDomain: "twitter-clone-yt-2a332.firebaseapp.com",
    projectId: "twitter-clone-yt-2a332",
    storageBucket: "twitter-clone-yt-2a332.appspot.com",
    messagingSenderId: "674088464448",
    appId: "1:674088464448:web:da9e87adab44c69bceafa5",
    measurementId: "G-H9RYMT5CZ7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);