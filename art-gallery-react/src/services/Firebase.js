// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// This let's Firebase know who we are
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// This file is what we're going to be exposing to the React app, so we can actually log our users in.
// But we are going to be using it in a different file.
export const auth = getAuth(app)


// const googleProvider = new auth

// export const signInWithGoogle = async () => {
//   try {
//     await auth.signInWithPopup(googleProvider)
//   } catch (err) {
//     alert(err)
//   }
// }

// export const signOut = async () => {
//   try {
//     await auth.signOut()
//   } catch (err) {
//     alert(err)
//   }
// }

// createUserWithEmailAndPassword(auth, email, password)


// As recap:
// import the firebase code (npm package)
// State firebaseConfig that we got from Firebase website
// start the application with that config
// create and export something called auth() which we can use in our components
// create a googleProvider()
// create a function signInWithPopup() to use that googleProvider
// create a signOut() method

