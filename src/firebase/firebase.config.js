// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-SsVmwW1S6xvsmQSznw-Jkt9HbRBijUI",
  authDomain: "the-news-dragon-project.firebaseapp.com",
  projectId: "the-news-dragon-project",
  storageBucket: "the-news-dragon-project.appspot.com",
  messagingSenderId: "137863532353",
  appId: "1:137863532353:web:a0166e3070dbe8c9bbdbc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;