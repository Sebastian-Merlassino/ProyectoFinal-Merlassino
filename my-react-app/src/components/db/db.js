import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRQLL0kIKlt3Dr-qhbdHOEP3qqc2BjZ38",
  authDomain: "my-ecomerce-15e40.firebaseapp.com",
  projectId: "my-ecomerce-15e40",
  storageBucket: "my-ecomerce-15e40.firebasestorage.app",
  messagingSenderId: "764471347894",
  appId: "1:764471347894:web:871241ef8bcd64cd323417",
  measurementId: "G-EZ5Q2V80BM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
