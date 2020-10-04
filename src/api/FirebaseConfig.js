import * as firebase from "firebase";

const Config = {
  apiKey: "AIzaSyBtILF8Dzs7mVGrTLiQ8cnhKz0mqs26Bhk",
  authDomain: "reactproject-104.firebaseapp.com",
  databaseURL: "https://reactproject-104.firebaseio.com",
  projectId: "reactproject-104",
  storageBucket: "reactproject-104.appspot.com",
  messagingSenderId: "26150205556",
  appId: "1:26150205556:web:da9c7bef6ff418c697b921",
  measurementId: "G-RBVTEECYN0",
};

export const FirebaseConfig = firebase.initializeApp(Config);