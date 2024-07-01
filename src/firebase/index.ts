import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPrps_2mNkq_-Z58Izg8y32eNV1FBjEiE",
  authDomain: "admin-auth-e89c9.firebaseapp.com",
  projectId: "admin-auth-e89c9",
  storageBucket: "admin-auth-e89c9.appspot.com",
  messagingSenderId: "738308914201",
  appId: "1:738308914201:web:1539f9f5c11b474adf3e88",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export {db, auth};