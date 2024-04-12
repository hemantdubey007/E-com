// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = "REACT_APP_FIREBASE_API_KEY =AIzaSyD3Si0bgqNZplqnmjDWabwE6naCIcKMY5Q";
const authDomain = "my-first-project-198dd.firebaseapp.com";
const messagingSenderId = "7653756341";
const appId = "1:7653756341:web:42031799111549ed02ddfc";
const measurementId =  'measurementId';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey ,
  authDomain: authDomain,
  projectId: "my-first-project-198dd",
  storageBucket: "my-first-project-198dd.appspot.com",
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db}
export default app;