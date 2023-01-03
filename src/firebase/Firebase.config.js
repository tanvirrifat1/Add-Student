// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr94Sk-V_p6HwGxFdBrrRcjn8iGj0IW04",
    authDomain: "vlanchu-task.firebaseapp.com",
    projectId: "vlanchu-task",
    storageBucket: "vlanchu-task.appspot.com",
    messagingSenderId: "287777703506",
    appId: "1:287777703506:web:08bb0672080f3f4473418b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app