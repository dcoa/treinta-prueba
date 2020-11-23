import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyD3MepqILYOvlCnTxdFZ_XVh9CUq5-EmNs",
    authDomain: "treinta-1ab4f.firebaseapp.com",
    databaseURL: "https://treinta-1ab4f.firebaseio.com",
    projectId: "treinta-1ab4f",
    storageBucket: "treinta-1ab4f.appspot.com",
    messagingSenderId: "839599330069",
    appId: "1:839599330069:web:160a1d482211740f2b0f1c"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  const signUp = async (email, password, name) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const currentUser = await auth.currentUser;
      await currentUser.updateProfile({
        displayName: name,
      });
      console.log(currentUser)
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }

  export {db, signUp};