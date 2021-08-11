import firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyATpHdb1QtPHMTOjCKIxrlgC7WNpc4sqgY",
    authDomain: "tiendacoder-fdcf8.firebaseapp.com",
    projectId: "tiendacoder-fdcf8",
    storageBucket: "tiendacoder-fdcf8.appspot.com",
    messagingSenderId: "895855513508",
    appId: "1:895855513508:web:bec8ab7eb338f4a391bb31"
  };
  // Initialize Firebase
  const app =firebase.initializeApp(firebaseConfig);

 export const getFirebase = () => {
     return app;
 }

 export const getFirestore = () => {
     return firebase.firestore(app);
 }  