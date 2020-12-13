import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcA1PMpQLGNGYzmF-gACiosmi5VROVdKk",
  authDomain: "tinder-clone-f7d0f.firebaseapp.com",
  projectId: "tinder-clone-f7d0f",
  storageBucket: "tinder-clone-f7d0f.appspot.com",
  messagingSenderId: "381303146525",
  appId: "1:381303146525:web:dc443c02cd1fb70ff1def4",
  measurementId: "G-14B7EK8B6Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
