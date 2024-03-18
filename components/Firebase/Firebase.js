import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAvgjiIdi7BPa8G2-k_HM0r6pw99lJ-L5Y",
  authDomain: "tesuplod-1c7af.firebaseapp.com",
  databaseURL: "https://tesuplod-1c7af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tesuplod-1c7af",
  storageBucket: "tesuplod-1c7af.appspot.com",
  messagingSenderId: "408805139163",
  appId: "1:408805139163:web:3947a82cd0a16c7ad3a2fe"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };