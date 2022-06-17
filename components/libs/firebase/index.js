import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmu38-S-aj0Hk1r21GMZbkWfv1dSLkgBg",
  authDomain: "onl-eco.firebaseapp.com",
  projectId: "onl-eco",
  storageBucket: "onl-eco.appspot.com",
  messagingSenderId: "619386351364",
  appId: "1:619386351364:web:ccaad60e7e11e1df706a51",
  measurementId: "G-CHN1XE716E"
};

// Initialize Firebase
const database = initializeApp(firebaseConfig);
// const analytics = getAnalytics(database);

export default database