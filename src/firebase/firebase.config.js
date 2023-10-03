// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi07EN8kKGYgJTBIKMGsBK001a2gQKd8s",
  authDomain: "email-password-signup-3cb7a.firebaseapp.com",
  projectId: "email-password-signup-3cb7a",
  storageBucket: "email-password-signup-3cb7a.appspot.com",
  messagingSenderId: "347291052876",
  appId: "1:347291052876:web:cea8bab48cefbafec2bde9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

// export default app;