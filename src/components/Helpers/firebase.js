import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDsIa_hP3jzeXN6YeM8_FPQXeqA46fzTrw",
  authDomain: "udemy-9885a.firebaseapp.com",
  databaseURL: "https://udemy-9885a-default-rtdb.firebaseio.com",
  projectId: "udemy-9885a",
  storageBucket: "udemy-9885a.appspot.com",
  messagingSenderId: "602479437180",
  appId: "1:602479437180:web:d6ab5cbf21897db21eb0f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 // Get a reference to the database service
export const database = firebase.database();
