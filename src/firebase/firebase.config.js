// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTkHi7iNDEXgUt8qklZ2G6JhZEg4JGfn0",
  authDomain: "dragon-news-cd71e.firebaseapp.com",
  projectId: "dragon-news-cd71e",
  storageBucket: "dragon-news-cd71e.firebasestorage.app",
  messagingSenderId: "922096454080",
  appId: "1:922096454080:web:84a57de899dfc672006025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;