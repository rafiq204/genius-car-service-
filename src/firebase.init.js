// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaTNJrRibO43IH4LSrnS46f-JHezemink",
  authDomain: "genius-car-services-6aede.firebaseapp.com",
  projectId: "genius-car-services-6aede",
  storageBucket: "genius-car-services-6aede.appspot.com",
  messagingSenderId: "68776134971",
  appId: "1:68776134971:web:9374182aa63b546b8b4f1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;