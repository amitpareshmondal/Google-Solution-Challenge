// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const firebaseConfig = {
    apiKey: "AIzaSyDDNit9KGQoiBmd7moZAW9j89z01MI_a2A",
    authDomain: "solution-challenge-15f7f.firebaseapp.com",
    projectId: "solution-challenge-15f7f",
    storageBucket: "solution-challenge-15f7f.appspot.com",
    messagingSenderId: "188261581360",
    appId: "1:188261581360:web:9f86ae7885a011c8b623f5"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const sing=()=>{signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
