import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAm2wPNypfD4H1ZNOS5NmcW9HvU6ki7sJY",
  authDomain: "the-ninja-marioplan.firebaseapp.com",
  databaseURL: "https://the-ninja-marioplan.firebaseio.com",
  projectId: "the-ninja-marioplan",
  storageBucket: "the-ninja-marioplan.appspot.com",
  messagingSenderId: "397221235629",
  appId: "1:397221235629:web:3d7a12155ce1958ba76f24",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
