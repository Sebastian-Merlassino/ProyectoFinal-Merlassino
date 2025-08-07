import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBJ1oc6GQfSdmyASn3bc8dhne2-tKzFHM0",
//   authDomain: "my-ecommerce-fce23.firebaseapp.com",
//   projectId: "my-ecommerce-fce23",
//   storageBucket: "my-ecommerce-fce23.firebasestorage.app",
//   messagingSenderId: "835897976861",
//   appId: "1:835897976861:web:7c7c4d1748fd456054bef4"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
