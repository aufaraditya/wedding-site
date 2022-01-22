// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"


const {REACT_APP_APIKEY,REACT_APP_MESSAGINGSENDERID,REACT_APP_APPID,REACT_APP_MEASUREMENTID} = process.env

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBnGSzEmnKSXdjpTpYzI8c-VZjNop-RZTo",
//     authDomain: "puti-athhar.firebaseapp.com",
//     projectId: "puti-athhar",
//     storageBucket: "puti-athhar.appspot.com",
//     messagingSenderId: "499113784158",
//     appId: "1:499113784158:web:e969f296223a9f40ac55cf",
//     measurementId: "G-5TNE43LCWQ"
//   };

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: "puti-athhar.firebaseapp.com",
  projectId: "puti-athhar",
  storageBucket: "puti-athhar.appspot.com",
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREMENTID
};

  const app = initializeApp(firebaseConfig)

 export const db = getFirestore(app)