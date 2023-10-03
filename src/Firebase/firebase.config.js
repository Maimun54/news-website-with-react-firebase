// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR13cBZD2unpijlrQYviFsADrcU_-CyHU",
  authDomain: "dragon-news-react-firebase.firebaseapp.com",
  projectId: "dragon-news-react-firebase",
  storageBucket: "dragon-news-react-firebase.appspot.com",
  messagingSenderId: "140643082009",
  appId: "1:140643082009:web:5194aa29d86e2d44e4ef88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app