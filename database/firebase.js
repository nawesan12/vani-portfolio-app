import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDuRyiOp0NjHUl3-CnPLVdMslCpz58FIm0",
  authDomain: "vani-portfolio.firebaseapp.com",
  projectId: "vani-portfolio",
  storageBucket: "vani-portfolio.appspot.com",
  messagingSenderId: "261913143857",
  appId: "1:261913143857:web:8452a879865f2aedff8310"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;