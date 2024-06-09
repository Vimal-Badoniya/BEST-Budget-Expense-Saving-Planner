import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
 
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8RQfIaMx24pWGbL-JJeoWBiVRcyFXmds",
  authDomain: "expense-budgett.firebaseapp.com",
  databaseURL: "https://expense-budgett-default-rtdb.firebaseio.com",
  projectId: "expense-budgett",
  storageBucket: "expense-budgett.appspot.com",
  messagingSenderId: "238390206486",
  appId: "1:238390206486:web:c992a229cb919f2a245537",
  measurementId: "G-KSF8N61FES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function writeUserData(name) {
  const db = getDatabase();
  set(ref(db, "users/" + "vimal"), {
    username: name,
  });
}
