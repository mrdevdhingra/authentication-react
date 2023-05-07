import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeZBftNXjDVaJ9XjD9Ci1ljoz33g-ulJs",
    authDomain: "react-authentication-complete.firebaseapp.com",
    projectId: "react-authentication-complete",
    storageBucket: "react-authentication-complete.appspot.com",
    messagingSenderId: "523831546934",
    appId: "1:523831546934:web:b0a8fa77e49dec6825b497"
  };

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
