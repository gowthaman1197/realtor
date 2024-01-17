// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmNtmwhUFyZ7P8tFhUo4tZyreQ1J0Q1Fo",
  authDomain: "realtor-clone-react-c80a9.firebaseapp.com",
  projectId: "realtor-clone-react-c80a9",
  storageBucket: "realtor-clone-react-c80a9.appspot.com",
  messagingSenderId: "202803884489",
  appId: "1:202803884489:web:ccc23b9f35ff24dc4b3818",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
