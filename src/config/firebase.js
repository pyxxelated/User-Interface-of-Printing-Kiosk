import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjDtDqFJczFo-h9884DXStN9yXY3N0KgY",
  authDomain: "inksync-f7e40.firebaseapp.com",
  projectId: "inksync-f7e40",
  storageBucket: "inksync-f7e40.appspot.com",
  messagingSenderId: "1081290329173",
  appId: "1:1081290329173:web:ab3f0d503ea21d79bb18dc",
  measurementId: "G-YPSS0K3TP9"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);



