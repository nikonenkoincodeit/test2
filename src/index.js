import './sass/main.scss';
// require('dotenv').config();
// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPjk1E34nPDy4P83msEWktdV1uhHuk-Vg',
  authDomain: 'to-do-list-57e5e.firebaseapp.com',
  databaseURL: 'https://to-do-list-57e5e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'to-do-list-57e5e',
  storageBucket: 'to-do-list-57e5e.appspot.com',
  messagingSenderId: '638525864468',
  appId: '1:638525864468:web:b14e6928d8a479105c4501',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const btn = document.querySelector('.js-btn');
const btn2 = document.querySelector('.js-btn2');

btn.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log('user ', user);
      console.log('credential ', credential);
      console.log('token ', token);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('user :>> ', user);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    console.log('22222 :>> ', 22222);
    console.log('22222 :>> ', 22222);
    // User is signed out
    // ...
  }
});

btn2.addEventListener('click', () => {
  console.log('33333 :>> ', 33333);
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
});
