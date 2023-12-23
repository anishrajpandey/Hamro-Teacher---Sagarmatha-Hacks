// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGXBGfTh5lZVpTZ5xIoXL61p9NhmgFNXE",
  authDomain: "hamro-teacher.firebaseapp.com",
  projectId: "hamro-teacher",
  storageBucket: "hamro-teacher.appspot.com",
  messagingSenderId: "43134361324",
  appId: "1:43134361324:web:3bd449bb9014e29dd88fc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
