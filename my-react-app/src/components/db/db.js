import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ1oc6GQfSdmyASn3bc8dhne2-tKzFHM0",
  authDomain: "my-ecommerce-fce23.firebaseapp.com",
  projectId: "my-ecommerce-fce23",
  storageBucket: "my-ecommerce-fce23.firebasestorage.app",
  messagingSenderId: "835897976861",
  appId: "1:835897976861:web:7c7c4d1748fd456054bef4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
