import firebase from "firebase/app";
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAxy6hbG5rq3pAvylno94GJpY_qZo98KRw",
  authDomain: "vuejs-real-time-chat.firebaseapp.com",
  databaseURL: "https://vuejs-real-time-chat.firebaseio.com",
  projectId: "vuejs-real-time-chat",
  storageBucket: "vuejs-real-time-chat.appspot.com",
  messagingSenderId: "219798023352",
  appId: "1:219798023352:web:f20eb6591c04ebe77a984d",
  measurementId: "G-G32V5XSQGW"
};
const firebaseApp = firebase.initializeApp(config);
console.log(firestore)

export default firebaseApp.firestore();
