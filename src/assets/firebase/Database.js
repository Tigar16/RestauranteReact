
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2NhEtiAET8OBmyxyConEKbHmjwLDMcCA",
  authDomain: "reactrestaurante-891d1.firebaseapp.com",
  projectId: "reactrestaurante-891d1",
  storageBucket: "reactrestaurante-891d1.appspot.com",
  messagingSenderId: "1060220901137",
  appId: "1:1060220901137:web:2cbc021ace5cd7dc3adeb0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
