import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDaFmiV_WppjDAV27caqNl7cqHUduTFWo4",
  authDomain: "ecommerceredsuncult.firebaseapp.com",
  projectId: "ecommerceredsuncult",
  storageBucket: "ecommerceredsuncult.appspot.com",
  messagingSenderId: "1011822472383",
  appId: "1:1011822472383:web:b1d481f940a17e35952a0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Reference to firestore service

export const firestoreDb = getFirestore(app);

