// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpkoqEokxDychpegfzhpE_ENdlla5tZmE",
  authDomain: "whatsappclone-df2f3.firebaseapp.com",
  projectId: "whatsappclone-df2f3",
  storageBucket: "whatsappclone-df2f3.appspot.com",
  messagingSenderId: "367983788028",
  appId: "1:367983788028:web:a455723dc6f1ad4159bc79",
  measurementId: "G-M7Z26H6RP5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
